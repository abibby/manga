// Copyright © 2018 NAME HERE <EMAIL ADDRESS>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/abibby/manga/site"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"

	// Connectors
	// _ "github.com/abibby/manga/connectors/crunchyroll"
	_ "github.com/abibby/manga/connectors/mangadex"
	_ "github.com/abibby/manga/connectors/mangaplus"
	_ "github.com/abibby/manga/connectors/viz"
)

// downloadCmd represents the download command
var downloadCmd = &cobra.Command{
	Use:     "download <url>",
	Aliases: []string{"d"},
	Short:   "downloads manga from a url",
	Long: fmt.Sprintf(`The download command downloads manga from a url.
Manga can download from any site that has a connector setup.
Currently the installed connectors are %s.`, strings.Join(site.ConnectorNames(), ", ")),
	RunE: func(cmd *cobra.Command, args []string) error {
		sources := []*site.Source{}
		if len(args) == 0 {
			err := viper.UnmarshalKey("sources", &sources)
			if err != nil {
				return err
			}
		} else {
			from, err := strconv.ParseFloat(cmd.Flag("from").Value.String(), 64)
			if err != nil {
				return err
			}
			for _, url := range args {
				sources = append(sources, &site.Source{
					URL:  url,
					From: from,
				})
			}
		}

		mangaPath := viper.GetString("dir")
		if mangaPath == "" {
			return fmt.Errorf("must set dir in the config")
		}

		dbPath := viper.GetString("database")
		db, err := site.OpenDB(dbPath)
		if err != nil {
			return err
		}
		defer db.Close()

		for _, s := range sources {
			fmt.Printf("download %s\n", s.URL)

			err = site.Download(db, mangaPath, s)
			if err != nil {
				fmt.Fprintf(os.Stderr, "There was an error downloading %s: %+v", s.URL, err)
			}
		}
		return nil
	},
}

func init() {
	rootCmd.AddCommand(downloadCmd)

	downloadCmd.Flags().IntP("from", "f", 0, "the chapter to start downloading, inclusive")
}

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
	_ "github.com/abibby/manga/connectors/jaiminisbox"
	_ "github.com/abibby/manga/connectors/mangadex"
	_ "github.com/abibby/manga/connectors/mangaplus"
	_ "github.com/abibby/manga/connectors/mangarock"
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
		for _, url := range args {

			fmt.Printf("download %s\n", url)

			from, err := strconv.ParseInt(cmd.Flag("from").Value.String(), 10, 64)
			if err != nil {
				return err
			}

			path := viper.GetString("database")

			db, err := site.OpenDB(path)
			if err != nil {
				return err
			}
			defer db.Close()

			err = site.Download(db, url, from)
			if err != nil {
				fmt.Fprintf(os.Stderr, "There was an error downloading %s: %+v", url, err)
			}
		}
		return nil
	},
}

func init() {
	rootCmd.AddCommand(downloadCmd)

	downloadCmd.Flags().IntP("from", "f", 0, "the chapter to start downloading, inclusive")
}

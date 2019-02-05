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
	"strconv"

	"github.com/spf13/cobra"
	"github.com/zwzn/manga/site"

	_ "github.com/zwzn/manga/connectors/jaiminisbox"
	_ "github.com/zwzn/manga/connectors/mangadex"
)

// downloadCmd represents the download command
var downloadCmd = &cobra.Command{
	Use:     "download",
	Aliases: []string{"d"},
	Short:   "downloads manga from a url",
	Long: `The download command downloads manga from a url.
you it `,
	Args: cobra.ExactArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		url := args[0]
		fmt.Printf("download %s\n", url)

		from, err := strconv.ParseInt(cmd.Flag("from").Value.String(), 10, 64)
		if err != nil {
			return err
		}

		return site.Download(url, from)
	},
}

func init() {
	rootCmd.AddCommand(downloadCmd)

	downloadCmd.Flags().IntP("from", "f", 0, "the chapter to start downloading, inclusive")
}

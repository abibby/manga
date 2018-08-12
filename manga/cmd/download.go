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

	"bitbucket.org/zwzn/manga/site"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// downloadCmd represents the download command
var downloadCmd = &cobra.Command{
	Use:     "download",
	Aliases: []string{"d"},
	Short:   "download stuff",
	Long:    `Download stuff`,
	Args:    cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		url := args[0]
		fmt.Printf("download %s\n", url)

		malID := cmd.Flag("mal-id").Value.String()
		from, err := strconv.ParseInt(cmd.Flag("from").Value.String(), 10, 64)
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		if cmd.Flag("save").Value.String() == "true" {
			newSeries := true
			saves := viper.GetStringSlice("save")
			for i := range saves {
				save := strings.Split(saves[i], ",")
				if strings.Trim(save[0], " ") == url {
					save[2] = fmt.Sprint(from)
					save[1] = malID
					saves[i] = strings.Join(save, ", ")
				}
				newSeries = false
			}
			if newSeries {
				saves = append(saves, fmt.Sprintf("%s, %s, %d", url, malID, from))
			}
			viper.Set("save", saves)
			err = viper.WriteConfig()
			if err != nil {
				fmt.Printf("Error saving config: %v", err)
				os.Exit(1)
			}
		}
		site.Download(url, malID, from)
	},
}

func init() {
	rootCmd.AddCommand(downloadCmd)

	downloadCmd.Flags().IntP("mal-id", "m", 0, "the mal id to be use for sites that dont have one")
	downloadCmd.Flags().IntP("from", "f", 0, "the chapter to start downloading, inclusive")
	downloadCmd.Flags().BoolP("save", "s", false, "save the series to get new chapters on update")
}

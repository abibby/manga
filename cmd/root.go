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
	"log"
	"log/slog"
	"os"
	"path"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string
var verbose bool

var home string
var configRoot string

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "manga",
	Short: "manga is a command line tool to download manga from supported websites",
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(initConfig)

	home, _ := os.UserHomeDir()
	if home != "" {
		configRoot = path.Join(home, ".manga")
	} else {
		configRoot = "/etc/manga"
	}
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", fmt.Sprintf(`config file (default "%s/config.yaml)"`, configRoot))
	rootCmd.PersistentFlags().BoolVarP(&verbose, "verbose", "v", false, "print verbose logging")

	rootCmd.PersistentFlags().StringP("dir", "d", path.Join(home, "manga"), "the path to the manga root dir")
	rootCmd.PersistentFlags().String("cookie_file", path.Join(configRoot, "cookies.json"), "the path to the cookie file")
	rootCmd.PersistentFlags().String("database", path.Join(configRoot, "manga.db"), "the path to the database file")

	rootCmd.PersistentFlags().StringP("language", "l", "en", "the language to download chapters in")

	viper.BindPFlag("language", rootCmd.PersistentFlags().Lookup("language"))
	viper.SetDefault("language", "en")
	viper.BindPFlag("upload-path", rootCmd.PersistentFlags().Lookup("upload-path"))
	viper.BindPFlag("dir", rootCmd.PersistentFlags().Lookup("dir"))
	viper.BindPFlag("cookie_file", rootCmd.PersistentFlags().Lookup("cookie_file"))
	viper.BindPFlag("database", rootCmd.PersistentFlags().Lookup("database"))
}

// initConfig reads in config file and ENV variables if set.
func initConfig() {

	if cfgFile != "" {
		// Use config file from the flag.
		viper.SetConfigFile(cfgFile)
	} else {

		cfg, err := os.UserConfigDir()
		if err == nil {
			viper.AddConfigPath(path.Join(cfg, "manga"))
		}
		if home != "" {
			viper.AddConfigPath(path.Join(home, ".manga"))
		}
		viper.AddConfigPath("/etc/manga")
		viper.AddConfigPath(".")

		viper.SetConfigName("config")
	}
	// viper.AutomaticEnv() // read in environment variables that match

	// If a config file is found, read it in.
	if err := viper.ReadInConfig(); err == nil {
		log.Println("Using config file:", viper.ConfigFileUsed())
	}

	level := slog.LevelInfo
	if verbose {
		level = slog.LevelDebug - 4
	}

	slog.SetDefault(slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
		Level: level,
	})))
}

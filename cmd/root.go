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

	"github.com/lmittmann/tint"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
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
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file")
	rootCmd.PersistentFlags().BoolVarP(&verbose, "verbose", "v", false, "print verbose logging")

	rootCmd.PersistentFlags().StringP("dir", "d", "", "the path to the manga root dir")
	rootCmd.PersistentFlags().String("cookie_file", "", "the path to the cookie file")
	rootCmd.PersistentFlags().String("database", "", "the path to the database file")
	rootCmd.PersistentFlags().StringP("language", "l", "", "the language to download chapters in")

	MustBindPFlag("language", rootCmd.PersistentFlags().Lookup("language"))
	viper.SetDefault("language", "en")
	MustBindPFlag("dir", rootCmd.PersistentFlags().Lookup("dir"))
	viper.SetDefault("dir", path.Join(home, "manga"))
	MustBindPFlag("cookie_file", rootCmd.PersistentFlags().Lookup("cookie_file"))
	viper.SetDefault("cookie_file", path.Join(configRoot, "cookies.json"))
	MustBindPFlag("database", rootCmd.PersistentFlags().Lookup("database"))
	viper.SetDefault("database", path.Join(configRoot, "manga.db"))
}
func MustBindPFlag(key string, flag *pflag.Flag) {
	err := viper.BindPFlag(key, flag)
	if err != nil {
		panic(err)
	}
}

// initConfig reads in config file and ENV variables if set.
func initConfig() {

	level := slog.LevelInfo
	if verbose {
		level = slog.LevelDebug - 4
	}

	fi, err := os.Stdout.Stat()
	isTTY := err == nil && (fi.Mode()&os.ModeCharDevice) != 0

	slog.SetDefault(slog.New(tint.NewHandler(os.Stdout, &tint.Options{
		Level:   level,
		NoColor: !isTTY,
	})))

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

	// If a config file is found, read it in.
	err = viper.ReadInConfig()
	if _, ok := err.(viper.ConfigFileNotFoundError); ok {
		// noop
	} else if err != nil {
		slog.Error("error loading config", "err", err)
	} else {
		log.Printf("Using config file: %s", viper.ConfigFileUsed())
	}
}

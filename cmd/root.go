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
	"log/slog"
	"os"
	"path"

	"github.com/fsnotify/fsnotify"
	"github.com/lmittmann/tint"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string
var verbose bool

var home string

func init() {
	h, err := os.UserHomeDir()
	if err != nil {
		home = "/"
	} else {
		home = h
	}
}

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

	configRoot := "/etc/manga"
	if home != "/" {
		configRoot = path.Join(home, ".manga")
	}

	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file")
	rootCmd.PersistentFlags().BoolVarP(&verbose, "verbose", "v", false, "print verbose logging")

	rootCmd.PersistentFlags().StringP("dir", "d", "", "the path to the manga root dir")
	MustBindPFlag("dir", "dir")
	viper.SetDefault("dir", path.Join(home, "manga"))

	rootCmd.PersistentFlags().String("cookie_file", "", "the path to the cookie file")
	MustBindPFlag("cookie_file", "cookie_file")
	viper.SetDefault("cookie_file", path.Join(configRoot, "cookies.json"))

	rootCmd.PersistentFlags().String("database", "", "the path to the database file")
	MustBindPFlag("database", "database")
	viper.SetDefault("database", path.Join(configRoot, "manga.db"))

	rootCmd.PersistentFlags().StringP("language", "l", "", "the language to download chapters in")
	MustBindPFlag("language", "language")
	viper.SetDefault("language", "en")
}
func MustBindPFlag(configKey, flagName string) {
	err := viper.BindPFlag(configKey, rootCmd.PersistentFlags().Lookup(flagName))
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
	if isTTY {
		slog.SetDefault(slog.New(tint.NewHandler(os.Stdout, &tint.Options{
			Level: level,
		})))
	} else {
		slog.SetDefault(slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
			Level: level,
		})))
	}
	if cfgFile == "" {
		cfgFile = os.Getenv("MANGA_CONFIG_FILE")
	}
	if cfgFile != "" {
		// Use config file from the flag.
		viper.SetConfigFile(cfgFile)
	} else {

		cfg, err := os.UserConfigDir()
		if err == nil {
			viper.AddConfigPath(path.Join(cfg, "manga"))
		}
		if home != "/" {
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
		slog.Info("Using config file", "file", viper.ConfigFileUsed())
	}
	viper.OnConfigChange(func(e fsnotify.Event) {
		slog.Info("Config file changed", "file", e.Name)
	})
	viper.WatchConfig()
}

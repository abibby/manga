/*
Copyright © 2024 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"log/slog"
	"runtime/debug"
	"time"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// watchCmd represents the serve command
var watchCmd = &cobra.Command{
	Use:   "watch",
	Short: "",
	Long:  ``,
	RunE: func(cmd *cobra.Command, args []string) error {
		for {
			frequency := viper.GetDuration("watch.frequency")
			if frequency == 0 {
				frequency = time.Hour
			}
			start := time.Now()

			watchDownload()

			timeToNextRun := frequency - time.Duration(time.Now().Unix()%int64(frequency/time.Second))*time.Second
			if timeToNextRun == 0 {
				timeToNextRun += frequency
			}
			slog.Info("Download complete",
				"duration", time.Since(start).Truncate(time.Millisecond),
				"next", time.Now().Add(timeToNextRun).Truncate(time.Second),
			)
			time.Sleep(timeToNextRun)
		}
	},
}

func watchDownload() {
	defer func() {
		err := recover()
		if err == nil {
			return
		}
		slog.Error("Download failed due to panic", "err", err, "stack", debug.Stack())
	}()
	err := download(nil)
	if err != nil {
		slog.Error("Download failed", "err", err)
	}
}
func init() {
	rootCmd.AddCommand(watchCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// serveCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// serveCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

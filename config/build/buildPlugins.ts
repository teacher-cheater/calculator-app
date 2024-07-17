import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins({
    mode,
    paths,
}: BuildOptions): Configuration["plugins"] {
    const isDev = mode === "development";
    const isProd = mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];

    if (isDev) {
        plugins.push(
            new EslintWebpackPlugin({
                extensions: ["js", "jsx", "ts", "tsx"],
                emitWarning: true,
                failOnError: false,
            })
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].contenthash:8].css",
            })
        );
    }

    return plugins;
}

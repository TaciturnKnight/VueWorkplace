//webpack配置文件
//引入一个包
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
//webpack中所有配置信息写在module.exports中
module.exports = {
    mode: "production",
    //指定入口文件
    entry: './src/index.ts',
    //指定打包输出目录
    output: {
        //指定打包后的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },
    //指定webpack打包时要使用的模块
    module: {
        rules: [
            {
                //用ts-loader处理以ts结尾的文件
                test: /\.ts$/,
                //先用ts-loader编译  再用babel将编译后的文件转为旧版js
                use: [
                    {
                        loader: "babel-loader",
                        options: {//配置babel
                            //设置预定义环境
                            presets: [
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs版本
                                        "corejs": "3",
                                        //使用corejs的方式 usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node_modules/
            },
            //设置less文件的处理
            {
                test: /\.less/,
                //loader的执行顺序从下到上
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:"last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    //配置webpack插件HTMLWebpackPlugin
    plugins: [
        //自动生成html文件并引入资源
        new HTMLWebpackPlugin({
            // title: "阿焦的webpackdemo"
            template: "./src/index.html"
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}
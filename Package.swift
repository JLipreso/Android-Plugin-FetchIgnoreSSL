// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "FetchIgnoreSsl",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "FetchIgnoreSsl",
            targets: ["FetchIgnoreSSLPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "FetchIgnoreSSLPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/FetchIgnoreSSLPlugin"),
        .testTarget(
            name: "FetchIgnoreSSLPluginTests",
            dependencies: ["FetchIgnoreSSLPlugin"],
            path: "ios/Tests/FetchIgnoreSSLPluginTests")
    ]
)
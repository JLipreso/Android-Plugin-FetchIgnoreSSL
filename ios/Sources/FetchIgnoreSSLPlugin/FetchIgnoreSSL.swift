import Foundation

@objc public class FetchIgnoreSSL: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

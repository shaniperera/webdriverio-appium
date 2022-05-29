import path from "path";
import { config } from "./wdio.shared.conf";

// ====================
// Runner Configuration
// ====================
//
(config.port = 4723),
  // ============
  // Specs
  // ============
  (config.specs = ["./test/specs/ios/**/*js"]);
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "13.5",
    "appium:deviceName": "iPhone 11",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "/app/ios/MVCTodo.app"),
  },
];
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["appium"];

exports.config = config;

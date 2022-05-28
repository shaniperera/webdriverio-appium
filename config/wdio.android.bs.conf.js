import 'dotenv/config' 
import { config } from "./wdio.shared.conf";

// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// ============
// Specs
// ============
config.specs = ["./test/specs/android/**/*js"]
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://8af3fa24e3cb3803fc4e197264813501d7f9a035",
    "appium:autoGrantPermissions": true,
  },
]
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["browserstack"]

exports.config = config

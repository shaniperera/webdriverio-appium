# About

The Appium UI automation framework can be used to end to end (e2e) automate the testing of features of ios and android apps.

# Tech Stack

- [Appium](https://appium.io/docs/en/about-appium/intro/) - a HTTPS NodeJS server which interacts with the vendor-provided framework (e.g. UIAutomator of XCUITest) on the mobile device/emulator.
- [WebdriveIO](https://webdriver.io/docs/what-is-webdriverio) - is a Javascript based custom implementation of Selenium's WebDriver API which communicates via NodeJS.
- [BrowserStack](https://browserstack.com/) - testing platform allowing tests to be be executed on various remote web and mobile platforms.
-[GitHub Actions](https://github.com/features/actions) - CI/CD environment used to automate software workflows via GitHub.

# Pre-requisites

- [NodeJS](https://nodejs.org/en/download/) installed globally.
  NOTE: Currently node versions upto and including Node v16 are compatibile with WebdriverIO and Appium.
- [JAVA(JDK)](https://www.java.com/en/download/) installed
- [Andriod(SDK)](https://developer.android.com/studio) installed
- `JAVA_HOME` path set as an evn. variable (e.g. in `~/.zshrc file`) to point to the installation path.
  For example:

  `export JAVA_HOME=$(/usr/libexec/java_home)`

- `ANDROID_HOME` paths set as evn. variables (e.g. in `~/.zshrc file`) to point to the SDK installation path:
  For example:

  `export ANDROID_HOME="/Users/<user>/Library/Android/sdk"`

  `export PATH=$ANDROID_HOME/platform-tools:$PATH`

  `export PATH=$ANDROID_HOME/tools:$PATH`

Tip: Check the SDK setup by running the `adb` command.

- Emulator/or real device is setup and connected (e.g. via Android Studio AVD manager and device attached via USB)

- [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) installed 
- Xcode Command line tools: `xcode-select --install`
- [Carthage](https://formulae.brew.sh/formula/carthage) installed

Tip: Use appium doctor to check the setup required for the android or ios platform (i.e. node, java jdk and android sdk paths are set correctly).

`
appium-doctor --android
` 

OR

`
appium-doctor --ios
`

## Appium Desktop GUI

[Appium Desktop Inspector](https://appium.io/docs/en/writing-running-appium/finding-elements/#using-appium-desktop-to-locate-elements) is used for inspecting and identifying the UI elements and locators of the application under test.

# Setup and Installation
- Clone the repository: git clone `git@github.com:shaniperera/webdriverio-appium.git`
- Install dependencies: `npm install`

# Test configuration

The `wdio.android.conf.js` and `wdio.ios.conf.js` files contains the configuration required to run the tests on an emulator/device locally.
The `wdio.android.bs.conf.js` files contains the configuration required to run the tests on remote device on BrowserStack.
```

// android config.
{
    platformName: "Android",
    "appium:platformVersion": "11",
    "appium:deviceName": "Pixel 3a API 30",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(
      process.cwd(),
      "/app/android/ColorNote+Notepad.apk"
    ),
    "appium:autoGrantPermissions": true,
  },
```

To find the name of an attached emualator/device:
```
adb devices
```
```
// ios config.
{
    platformName: "ios",
    "appium:platformVersion": "13.5",
    "appium:deviceName": "iPhone 11",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "/app/ios/MVCTodo.app"),
  },
```

# Running tests

The current setup includes the appium node module and the WebdriverIO Appium service. The appium server is started when the tests are executed.

- Launch all the android tests found under the `/test/specs/android` folder locally:

```
npm run android-test
```
- Launch all the ios tests found under the `/test/specs/ios` folder locally:

```
npm run ios-test
```
- Launch a specific android or ios test locally:

```
npm run ios-test -- --spec create-list.spec.js
```

- Skip test case in a test spec using the `.skip` notation:

```
it.skip ("add note", async () => { ....
```

- Run single test case(s) in a test spec using the `.only` notation:

```
it.only("add note", async () => { ....
```

- Skip test spec using the `x` notation:

```
xdescribe("Create todo list", () => { ....
```
## BrowserStack
Add a `.env` file locally and set the BROWSERSTACK_USER and BROWSERSTACK_KEY variables to your account credentials on BrowserStack.

Run android tests remotely on BrowserStack:

`npm run android-bs-test`

## GitHub Actions
The pipeline (`android-bs-ci.yaml`) to trigger the android tests on BrowserStack has been integrated via [GitHub Actions](https://github.com/shaniperera/webdriverio-appium/actions/workflows/android-bs-ci.yaml). 
The tests are executed upon a push the `main` branch of the repository.

# Test scripts

The test script are writting using the Mocha framework's BDD-style interface.

Tests are orgaised into `spec` files (sepcification), with each `spec` containing a `describe` function call (used to group the tests) and `it` function calls (used to write the individudal test cases) which are nested within the `describe` block. The example below demonstrates how tests are organised.

```
describe('Creat todo list', () => {
   it('should add a list', () => {
     ...
   })
   it('should add a list item, () => {
     ...
   })
})
```

# Locator strategy
Various [locator strategies are supported by Appium](https://appium.io/docs/en/commands/element/find-elements/index.html#selector-strategies) to locate and interact with the elements of the app. e.g. `ID`, `Accessibility ID`, `Class Name` or `XPath`.

`Xpath` (with `resource-id` or `text` attributes) and `Accessibility ID` will be employed as the locator strategies.

# Assertions

The [Expect library and it's matchers](https://webdriver.io/docs/api/expect-webdriverio/) are used to make assertions. They can be used to ensure a certain text on a app screen is displayed (e.g. `expect(elem).toBeDisplayed()`), to check if an attribute of an element has a certain text (e.g. `expect(elem).toHaveText('automation rocks!')`) or to check if an element such as a button is disabled under a certain conditions (e.g. `expect(automateMe).toBeDisabled()`).

# Page objects

The [Page Object design pattern](https://webdriver.io/docs/pageobjects/) is used to enhance test script maintenance and reduce code duplication by abstracting page related information (i.e. selectors or page methods) away from the test scripts themselves. The page objects can be found found under the `/test/screenobjects` folder.


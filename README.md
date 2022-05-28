# About

The Appium UI automation framework can be used to end to end (e2e) test the various features ios, android or hybrid apps.

# Tech Stack

- [Appium](https://appium.io/docs/en/about-appium/intro/) - a HTTPS NodeJS server which interacts with the vendor-provided framework (e.g. UIAutomator of XCUITest) on the mobile device/emulator.
- [WebdriveIO](https://webdriver.io/docs/what-is-webdriverio) - is a Javascript based custom implementation of Selenium's WebDriver API which communicates via NodeJS.
- [BrowserStack](https://browserstack.com/) - testing platform providing, allowing tests to be be run on various web and mobile platforms.

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

Tip: Use appium doctor to check the setup required for the android platform (i.e. node, java jdk and android sdk paths are set correctly).

```bash
appium-doctor --android
```

## Appium Desktop GUI

[Appium Desktop Inspector](https://appium.io/docs/en/writing-running-appium/finding-elements/#using-appium-desktop-to-locate-elements) is used for inspecting and identifying the UI elements and locators of the application under test.

# Setup and Install
- Clone the repository
- Install dependencies: ```npm install```

# Test configuration

The `wdio.android.conf.js` and `wdio.ios.conf.js` files contains the configuration required to run the tests on an emulator/device locally.
The `wdio.android.bs.conf.js` files contains the configuration required to run the tests on remove device on BrowserStack.


To find the name of an attached emualator/device:

```
adb devices
```

# Running tests

The current setup includes the appium node module and the WebdriverIO Appium service. The appium server is started when the tests are executed.

- Launch all the android tests found under the `/test/specs/android`folder locally:

```bash
npm run android-test
```
- Launch all the ios tests found under the `/test/specs/ios` folder locally:

```bash
npm run ios-test
```
- Launch as specific android or ios test locally:

```bash
npm run android-test -- --spec add-notes.spec.js
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
## Running on BrowserStack
Add a ```.env``` file and set the BROWSERSTACK_USER and BROWSERSTACK_KEY variables to your account credentials on BrowserStack.

Run android tests remotely on BrowserStack:
```npm run android-bs-test```

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

`Xpath` (with `resource-id` attribute) and `Name` (with `text` attribute) will be employed as the locator strategies.

# Assertions

The [Expect library and it's matchers](https://webdriver.io/docs/api/expect-webdriverio/) are used to make assertions. They can be used to ensure a certain text on a app screen is displayed (e.g. `expect(elem).toBeDisplayed()`), to check if an attribute of an element has a certain text (e.g. `expect(elem).toHaveText('automation rocks!')`) or to check if an element such as a button is disabled under a certain conditions (e.g. `expect(automateMe).toBeDisabled()`).

# Page objects

The [Page Object design pattern](https://webdriver.io/docs/pageobjects/) is used to enhance test script maintenance and reduce code duplication by abstracting page related information (i.e. selectors or page methods) away from the test scripts themselves. The page objects can be found found under the `/test/pageobjects` folder.


describe("Android Elements Test", () => {
  it("Find element by accessibilityID", async () => {
    // find element by accessibilityID
    const appOption = await $("~App");
    // click on ID
    await appOption.click();
    //assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    // find element by class name
    const className = await $("android.widget.TextView");
    console.log(await className.getText());
    //Assertion
    await expect(className).toHaveText("API Demos");
  });
  xit("Find element by Xpath", async () => {
    //xpath --> //tagname[@attribute=value]

    // with content-desc attr.
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    // with resourceID attr.
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    // with text attr.
    await $('//android.widget.TextView[@text="Command two"]').click();
    // with class + assertion
    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find element by UiAutomator", async () => {
    //find by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });
  it("Find multiple element", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];
    // find element by class name
    const textList = await $$("android.widget.TextView");
    // loop through list
    for (e of textList) {
      actualList.push(await e.getText());
    }
    //Assertion
    await expect(actualList).toEqual(expectedList);
  });

  it.only("Validate text input", async () => {
    // Naviagte to text field
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    //enter text
    const textField = await $("android.widget.EditText");
    await expect(textField).toBeExisting();
    await textField.addValue("Canada");
    // validate the text entered
    await expect(textField).toHaveText("Canada");
  });
});

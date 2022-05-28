describe("iOS Find element", () => {
  it("Find element by accessibilityID", async () => {
    await $("~Alert Views").click();
    await $("~Simple").click();
    // Use toContain as the driver.getAlertText method gets all the text in the alert box
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });
  it("Find by tag name", async () => {
    // find multiple element with $$
    const textEls = await $$("XCUIElementTypeStaticText");
    for (const element of textEls) {
      console.log(await element.getText());
    }
  });
  it("Find element by xpath", async () => {
    await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    // same as using //*. Don' care what type is, just find attribute with label and value simple
    await $('//*[@label="Simple"]').click();
    // Use toContain as the driver.getAlertText method gets all the text in the alert box
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });
  it("Find element by class chain ", async () => {
    // const alertView = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
    // Can also search using a text string that CONTAINS
    const alertView = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';

    await $(`-ios class chain:${alertView}`).click();
    await $('//*[@label="Simple"]').click();
    // Use toContain as the driver.getAlertText method gets all the text in the alert box
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });
  it("Find element by predicate string", async () => {
    // const alertView = 'label == "Alert Views"';
    // Can also search with BEGINS with
    const alertView = 'value BEGINSWITH[c] "alert"';
    await $(`-ios predicate string:${alertView}`).click();
    await $('//*[@label="Simple"]').click();
    // Use toContain as the driver.getAlertText method gets all the text in the alert box
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
  });
  it("EXERCISE: Search and clear filter field", async () => {
    await $("~Search").click();
    await $("~Default").click();

    await $("//XCUIElementTypeSearchField").addValue("I love testing!");
    await expect($("//XCUIElementTypeSearchField")).toHaveAttr("value");

    await $("~Clear text").click();
    await expect($("//XCUIElementTypeSearchField")).not.toHaveAttr("value");
  });
});

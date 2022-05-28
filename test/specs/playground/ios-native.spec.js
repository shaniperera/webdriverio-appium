describe("iOS native feat", () => {
  it("Working with alerts", async () => {
    await $("~Alert Views").click();
    await $("~Okay / Cancel").click();

    // click ok
    await $("~Okay / Cancel").click();
    console.log(await driver.getAlertText());
    // OR accept or dismiss alert
    await driver.dismissAlert();

    await expect($("~OK")).not.toExist();
  });

  it("Working with scrollable elements", async () => {
    // easiest
    // await driver.execute("mobile: scroll", { direction: "down" });
    // await driver.execute("mobile: scroll", { direction: "up" });

    // complex
    await $("~Picker View").click();
    const redPicker = await $("~Red color component value");
    const bluePicker = await $("~Blue color component value");
    const greenPicker = await $("~Green color component value");

    await driver.execute("mobile: scroll", {
      element: redPicker.elementId,
      direction: "down",
    });
    await driver.execute("mobile: scroll", {
      element: bluePicker.elementId,
      direction: "up",
    });
    await driver.execute("mobile: scroll", {
      element: greenPicker.elementId,
      direction: "down",
    });
  });
  it.only("Working with scrollable elements", async () => {
    await $("~Picker View").click();
    const redPicker = await $("~Red color component value");
    const greenPicker = await $("~Green color component value");
    const bluePicker = await $("~Blue color component value");
    // set colour purple
    await redPicker.addValue("125");
    await greenPicker.addValue("0");
    await bluePicker.addValue("125");
  });
});

describe("Android Native Feature Test", () => {
  it("Access an Activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );
    // find by xpath: //*
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working with dialogue boxes", async () => {
    // access activity
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );
    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
    ).click();
    //accept alert
    // await driver.acceptAlert();

    // dismiss alert
    // await driver.dismissAlert();

    // get alert text
    console.log("alert text:", await driver.getAlertText());
    //click OK button on alert box
    await $('//*[@resource-id="android:id/button1"]').click();
    // alert box not seen
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });
  it("Vertical scrolling in android", async () => {
    await $("~App").click();
    await $("~Activity").click();
    // Scroll to end , swipe once at speed 5
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    // );
    // await $("~Secure Surfaces").click();

    // scroll text into view (more stable than scroll to end)
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    //assertion that scrolling and clicking on above element
    await expect($("~Secure Dialog")).toExist();
  });
  it("Horizontal scrolling in android", async () => {
    //jump to screen using activity
    await driver.startActivity("io.appium.android.apis", ".view.Gallery1");
    // Horizontal scrolling
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );
  });
  it.only("Scrolling date picker exercise", async () => {
    //Navigate to date Widget via appActivity
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");
    // Get initial date
    const date = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );
    const currentDate = await date.getText();

    console.log(currentDate);
    await $("~change the date").click();
    //swipe to next month
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    // click the 10th day
    await $("//*[@index=9]").click();
    await $("//*[@text='OK']").click();

    // assert updated date
    await expect(await date.getText()).not.toEqual(currentDate);
  });
});

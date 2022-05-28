import ListScreen from "../../screenobjects/ios/list.screen";

xdescribe("Delete Todo list", () => {
  before(async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do");
    await ListScreen.createBtn.click();
  });
  it("should delete a todo list", async () => {
    await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
    await driver.execute("mobile: swipe", {
      element: ListScreen.listNameField("Things to do").elementId,
      direction: "left",
    });
    // Click 'Delete'

    // Assertions
    // await expect(await ListScreen.listNameField("Things to do")).not.toBeExisting();
  });
});

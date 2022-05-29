import ListScreen from "../../screenobjects/ios/list.screen";

describe("Delete Todo list", () => {
  before(async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do");
    await ListScreen.createBtn.click();
  });
  it("should delete a todo list", async () => {
    await expect(await ListScreen.listNameField("Things to do")).toBeExisting();

    await driver.touchAction([
      {action: 'longPress', x: 160, y: 95},
      {action: 'moveTo', x: 113, y: 96},
      'release'
    ]);
    await ListScreen.deleteBtn.click();
    // Assertions
    await expect(await ListScreen.listNameField("Things to do")).not.toBeExisting();
  });
});

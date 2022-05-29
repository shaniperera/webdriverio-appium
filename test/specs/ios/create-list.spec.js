import ListScreen from "../../screenobjects/ios/list.screen";

describe("Create Todo list", () => {
  it("should create a todo list", async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do");
    await ListScreen.createBtn.click();
    // Assertions
    await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
  });
});

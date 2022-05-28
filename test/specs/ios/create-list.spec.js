import ListScreen from "../../screenobjects/ios/list.screen";
import ItemScreen from "../../screenobjects/ios/item.screen";

describe("Create Todo list and item", () => {
  it("should create a todo list", async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do");
    await ListScreen.createBtn.click();
    // Assertions
    await expect(await ListScreen.listNameField("Things to do")).toBeExisting();
  });
  it("should add list item ", async () => {
    await ListScreen.listNameField("Things to do").click();
    await ItemScreen.createItemBtn.click();
    await ItemScreen.itemTitle.addValue("Walk the dog");
    await ItemScreen.itemDue.click();
    // Select date
    await ItemScreen.datePicker.click();
    await $("~Monday, May 30").click();
    await ItemScreen.toDoWindow.click();

    await ItemScreen.creatBtn.click();

    // Assertion
    await expect(await $('//*[@name="Due May 30, 2022"]')).toBeExisting();
  });
});

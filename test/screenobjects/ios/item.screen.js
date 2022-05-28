class ItemScreen {
  get createItemBtn() {
    return $('//*[@name="Create item"]');
  }
  get itemTitle() {
    return $('//*[@value="Title"]');
  }
  get itemDue() {
    return $('//*[@value="Due"]');
  }
  get datePicker() {
    return $("~Date Picker");
  }
  get toDoWindow() {
    return $('//*[@value="Add To Do"]');
  }
  get creatBtn() {
    return $('//*[@name="Create"]');
  }
}
export default new ItemScreen();

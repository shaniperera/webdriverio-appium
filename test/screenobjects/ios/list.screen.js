class ListScreen {
  get createListBtn() {
    return $('//*[@name="Create list"]');
  }
  get listNameInput() {
    return $('//*[@value="List Name"]');
  }
  get createBtn() {
    return $("~Create");
  }
  get deleteBtn() {
    return $('//*[@label="Delete"]');
  }
  listNameField(name) {
    return $(`~${name}`);
  }
}
export default new ListScreen();

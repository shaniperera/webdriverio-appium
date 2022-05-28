class HomeScreen {
  get addNoteText() {
    return $("//*[@text='Add note']");
  }
  get navIcon() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }
  get trashCan() {
    return $("//*[@text='Trash Can']");
  }
}
export default new HomeScreen();

class DeleteNoteScreen {
  get deleteOption() {
    return $("//*[@text='Delete']");
  }
  get trashNote() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']"
    );
  }
}
export default new DeleteNoteScreen();

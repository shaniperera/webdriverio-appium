import HomeScreen from "./home-screen";

class AddNoteScreen {
  get skipButton() {
    return $("//*[@text='SKIP']");
  }
  get textOption() {
    return $("//*[@text='Text']");
  }
  get textEditView() {
    return $("//*[@text='Editing']");
  }
  get noteTitle() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']"
    );
  }
  get noteBody() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']"
    );
  }
  get editNoteBtn() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']"
    );
  }
  get viewOption() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']"
    );
  }
  get moreOption() {
    return $("~More");
  }

  async skipTutorial() {
    await this.skipButton.click();
    await expect(HomeScreen.addNoteText).toBeDisplayed();
  }
  async saveNote() {
    // Save changes
    await driver.back();
    await driver.back();
  }
  async addNote(title, body) {
    await HomeScreen.addNoteText.click();
    await this.textOption.click();
    // Add note title
    await this.noteTitle.addValue(title);
    await this.noteBody.addValue(body);
  }
}
export default new AddNoteScreen();

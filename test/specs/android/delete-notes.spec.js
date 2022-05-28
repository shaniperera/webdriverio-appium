import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import DeleteNoteScreen from "../../screenobjects/android/delete-note.screen";
import HomeScreen from "../../screenobjects/android/home-screen";

describe("Delete note", () => {
  before(async () => {
    // Skip tutorial and create note
    await AddNoteScreen.skipTutorial();
    await AddNoteScreen.addNote(
      "Fav. TV shows list",
      "Seinfeld\nFriends\nBreaking Bad"
    );
    await AddNoteScreen.saveNote();
  });
  it("should delete note and verify in trash", async () => {
    const savedNote = await AddNoteScreen.noteTitle.getText();
    // Delete note
    await AddNoteScreen.moreOption.click();
    await DeleteNoteScreen.deleteOption.click();
    await driver.acceptAlert();

    // Navigate to deleted note
    await HomeScreen.navIcon.click();
    await HomeScreen.trashCan.click();

    // Assertions
    const deletedNote = await DeleteNoteScreen.trashNote;
    await expect(deletedNote).toHaveText(savedNote);
  });
});

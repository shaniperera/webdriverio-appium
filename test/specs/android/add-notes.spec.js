import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe("Add note", () => {
  before(async () => {
    // Skip tutorial
    await AddNoteScreen.skipTutorial();
  });

  it("should add note and save changes", async () => {
    // Add and save note
    await AddNoteScreen.addNote("Fav. animal list", "Dog\nCat\nSloth");
    await AddNoteScreen.saveNote();
    // Assertion
    await expect(AddNoteScreen.editNoteBtn).toBeDisplayed();
    await expect(AddNoteScreen.noteTitle).toHaveText("Fav. animal list");
    await expect(AddNoteScreen.viewOption).toHaveText("Dog\nCat\nSloth");
  });
});

import { getToDoNotes, saveToDoNotes } from './utils/storage';
import { addStateListener, putIntoState } from '../../utils/state';

function filterNotesByActiveTabType (tabType, notes) {
  notes = notes || [];
  let result = notes;
  if (tabType === 'active') {
    result = notes.filter(i => !i.isCompleted);
  } else if (tabType === 'completed') {
    result = notes.filter(i => !!i.isCompleted);
  }
  return result;
}

/**
 * Changes the status of the note by the received id of the note.
 * Can be used together with the `ToDoNotesList` component on the input side.
 * Produces a modified list of notes at the `notes` output.
 */
export const toggleNoteCompleted = (noteId) => async (dispatch) => {
  if (noteId) {
      try {
        let storedNotes = await getToDoNotes();
        storedNotes = storedNotes || [];
        const noteItem = storedNotes.find(i => i.id === noteId);
        if (noteItem) {
          noteItem.isCompleted =
            !noteItem.isCompleted;
        }
        dispatch({
          notes: storedNotes
        });
      } catch (e) {
        alert(e.message);
      }
  }
};

/**
 * Removes a note by the received note id.
 * Can be used together with the `ToDoNotesList` component on the input side.
 * Produces a modified list of notes at the `notes` output.
 */
export const deleteNote = (noteId) => async (dispatch) => {
  if (noteId) {
    try {
      let storedNotes = await getToDoNotes();
      const noteItemIndex = storedNotes.findIndex(i => i.id === noteId);
      if (noteItemIndex >= 0) {
        storedNotes.splice(noteItemIndex, 1);
      }
      dispatch({
        notes: storedNotes,
      });
    } catch (e) {
      alert(e.message);
    }
  }
};

/**
 * Creates a new note with the received text.
 * Can be used together with the `NewNoteForm` component on the input side.
 * Produces a modified list of notes at the `notes` output.
 */
export const createNewNote = (noteText, { stateByDispatch, history }) => async (dispatch) => {
  try {
    let storedNotes = await getToDoNotes();
    storedNotes = storedNotes || [];
    storedNotes.push({
      id: `${Date.now()}`,
      noteText
    });
    dispatch({
      notes: storedNotes,
    });
  } catch (e) {
    alert(e.message);
  }
};

/**
 * Loads all the notes from localstorage.
 * Produces a list of notes at the `notes` output.
 */
export const getNotes = () => async dispatch => {
  try {
    let storedNotes = await getToDoNotes();
    storedNotes = storedNotes || [];
    dispatch({
      notes: storedNotes
    });
  } catch (e) {
    alert(e.message);
  }
};

/**
 * Saves the received notes in localstorage.
 * The `success` output is triggered when the notes are successfully saved.
 * Produces a list of received notes at the `notes` output.
 */
export const saveNotes = (notes) => async dispatch => {
  if (notes) {
    try {
      await saveToDoNotes(notes);
      dispatch({
        notes,
        success: true,
      });
    } catch (e) {
      alert(e.message);
    }
  }
};

/**
 * Filters the received notes by status depending on the values in the properties of the `NavigationTabs` component instance,
 * that should be connected to the `navigationTabsProps` output.
 * The `todoNotesListProps` output should be connected to the `TodoNotesList` component instance
 */
export const filterNotes = (notes, {stateByDispatch}) => dispatch => {
  if (stateByDispatch && notes) {
    const { todoNotesListProps, navigationTabsProps } = stateByDispatch;
    if (todoNotesListProps) {
      let newTodoNotesListProps = { ...todoNotesListProps };
      if (navigationTabsProps) {
        newTodoNotesListProps.notes =
          filterNotesByActiveTabType(navigationTabsProps.activeTabType, notes);
      }
      dispatch({
        todoNotesListProps: newTodoNotesListProps,
        navigationTabsProps,
      });
    }
  }
};

const NOTES_BUFFER_STATE_KEY = 'NOTES_BUFFER_STATE_KEY';

/**
 * Runs the listener for changes in the buffer with notes.
 * Buffer content is fed to the output.
 */
export const listenToNotesBuffer = () => dispatch => {
  addStateListener(NOTES_BUFFER_STATE_KEY, (data) => {
    dispatch({
      updatedData: data,
    });
  });
};

/**
 * Writes an array of the received notes into the buffer.
 */
export const putIntoNotesBuffer = (notes) => dispatch => {
  putIntoState(NOTES_BUFFER_STATE_KEY, notes);
};

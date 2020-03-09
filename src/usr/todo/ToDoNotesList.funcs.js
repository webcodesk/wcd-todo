/**
 * Sets the received array of ToDo notes in `ToDoNotesList` instance.
 * The function should be used with `ToDoNotesList` instance.
 *
 * _Using in flow diagram:_
 *
 * * Connect the function output to the `props` input in the `NewNoteForm` instance.
 *
 * _Input arguments:_
 *
 * * **notes**: {array} - array of objects {id, noteText, isCompleted}
 *
 */
export const setNotes = (notes, { stateByDispatch, history }) => async (dispatch) => {
  if (stateByDispatch && notes) {
    const { todoNotesListProps } = stateByDispatch;
    dispatch({
      todoNotesListProps: { ...todoNotesListProps, notes },
    });
  }
};

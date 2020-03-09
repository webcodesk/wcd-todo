/**
 * Checks the text that was received in the input argument.
 * The function should be used with `NewNoteForm` instance.
 *
 * _Using in flow diagram:_
 *
 * * Connect the `onSaveNote` output in the `NewNoteForm` instance to input in the function.
 *
 * _Input arguments:_
 *
 * * **noteText**: {string} - text for validation
 */
export const validateNoteText = (noteText, { stateByDispatch, history }) => dispatch => {
  if (noteText) {
    dispatch({
      noteText,
    });
  } else {
    dispatch({ failure: true });
  }
};

/**
 * Sets the error indicator in a `NewNoteForm` instance.
 *
 * _Using in flow diagram:_
 *
 * * Connect the function output to the `props` input in the `NewNoteForm` instance
 *
 * _No input arguments_
 */
export const setError = (options, {stateByDispatch}) => dispatch => {
  if (stateByDispatch) {
    const { newNoteFormProps } = stateByDispatch;
    dispatch({ newNoteFormProps: {...newNoteFormProps, ...{isError: true}} });
  }
};

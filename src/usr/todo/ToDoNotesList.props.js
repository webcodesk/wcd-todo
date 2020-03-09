import PropTypes from 'prop-types';

export const ToDoNotesListTypes = {
  /**
   * The text of the message that there are no notes on the list.
   */
  emptyListMessage: PropTypes.string,
  /**
   * An array of ToDo notes
   */
  notes: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Id of the note
     */
    id: PropTypes.string.isRequired,
    /**
     * Note text value
     */
    noteText: PropTypes.string,
    /**
     * Note status indicator, if true the ToDo note is completed.
     */
    isCompleted: PropTypes.bool,
  })),
  /**
   * Triggered when the user toggles the status of a note.
   * Output argument: id {string} - the id of the toggled note.
   */
  onToggleNoteCompleted: PropTypes.func,
  /**
   * Triggered when the user deletes a note.
   * Output argument: id {string} - the id of the toggled note.
   */
  onDeleteNote: PropTypes.func,
};

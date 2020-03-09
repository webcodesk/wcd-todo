import PropTypes from 'prop-types';

export const NewNoteFormTypes = {
  /**
   * Defines the space between the cells.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   * Label of the input multi text field
   */
  label: PropTypes.string,
  /**
   * An indicator of the error. Set tru to show the error.
   */
  isError: PropTypes.bool,
  /**
   * A text placed under the input element. Used for a usage hint.
   */
  helperText: PropTypes.string,
  /**
   * Rows number in the text area element
   */
  rowsNumber: PropTypes.number,
  /**
   * Triggered when the user clicks `Save` button. Output argument: `textValue` {string}
   */
  onSaveNote: PropTypes.func,
  /**
   * Triggered when the user clicks `Cancel` button. No output arguments for coupled functions.
   */
  onCancel: PropTypes.func,
};

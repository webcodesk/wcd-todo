import PropTypes from 'prop-types';

export const DisplayTypes = {
  /**
   * The display CSS property sets whether an element is treated as
   * a block or inline element and the layout used for its children,
   * such as flow layout, grid or flex.
   */
  display: PropTypes.oneOf(['', 'block', 'flex', 'flow', 'inline']),
  /**
   * The overflow shorthand CSS property sets what to do when
   * an element's content is too big to fit in its block formatting context.
   */
  overflow: PropTypes.oneOf(['', 'auto', 'hidden', 'scroll', 'visible']),
  /**
   * The text-overflow CSS property sets how hidden overflow content is signaled to users.
   */
  textOverflow: PropTypes.oneOf(['', 'clip', 'ellipsis']),
  /**
   * The visibility CSS property shows or hides an element without changing the layout of a document.
   */
  visibility: PropTypes.oneOf(['', 'hidden', 'visible', 'collapse']),
  /**
   * The white-space CSS property sets how white space inside an element is handled.
   */
  whiteSpace: PropTypes.oneOf(['', 'normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces']),
};
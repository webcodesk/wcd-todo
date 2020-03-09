import PropTypes from 'prop-types';

export const BoxPositionsTypes = {
  /**
   * The position CSS property sets how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   */
  position: PropTypes.oneOf(['', 'static', 'relative', 'absolute', 'sticky', 'fixed']),
  /**
   * References to the MUI theme zIndex values. See the application settings.
   */
  zIndex: PropTypes.oneOf(['', 'mobileStepper', 'speedDial', 'appBar', 'drawer', 'modal', 'snackbar', 'tooltip']),
  /**
   * The top CSS property participates in specifying the vertical position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  top: PropTypes.string,
  /**
   * The right CSS property participates in specifying the horizontal position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  right: PropTypes.string,
  /**
   * The bottom CSS property participates in setting the vertical position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  bottom: PropTypes.string,
  /**
   * The left CSS property participates in specifying the horizontal position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  left: PropTypes.string,
};

export const PositionsTypes = {
  /**
   * The position CSS property sets how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   */
  position: PropTypes.oneOf(['', 'static', 'relative', 'absolute', 'sticky', 'fixed']),
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or flex items.
   * Overlapping elements with a larger z-index cover those with a smaller one.
   */
  zIndex: PropTypes.number,
  /**
   * The top CSS property participates in specifying the vertical position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  top: PropTypes.string,
  /**
   * The right CSS property participates in specifying the horizontal position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  right: PropTypes.string,
  /**
   * The bottom CSS property participates in setting the vertical position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  bottom: PropTypes.string,
  /**
   * The left CSS property participates in specifying the horizontal position of a positioned element.
   * It has no effect on non-positioned elements.
   */
  left: PropTypes.string,
};
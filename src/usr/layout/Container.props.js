import PropTypes from 'prop-types';

export const ContainerTypes = {
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes instead of trying to
   * accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: PropTypes.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set disableMaxWidth to true to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Set disableMaxWidth to true to disable maxWidth.
   */
  disableMaxWidth: PropTypes.bool,
  /**
   * The content of the container
   */
  content: PropTypes.element,
};

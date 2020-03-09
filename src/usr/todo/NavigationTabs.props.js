import PropTypes from 'prop-types';

export const NavigationTabsTypes = {
  /**
   * Sets active filter (tab)
   */
  activeTabType: PropTypes.oneOf(['all', 'active', 'completed']),
  /**
   * An array of filters available to the user.
   */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Type of the filter
     */
    tabType: PropTypes.oneOf(['all', 'active', 'completed']),
    /**
     * Button label in the navigation
     */
    tabLabel: PropTypes.string,
  })),
  /**
   * Triggered when the user activates another filter.
   * The only output argument for coupled functions: `tabType` string value.
   * Is compatible with `setActiveNavigationTab` function.
   */
  onChangeActiveTab: PropTypes.func,
  /**
   * Triggered when the active filter was changed. No output arguments for coupled functions.
   */
  onActiveTabUpdated: PropTypes.func,
};

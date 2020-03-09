/**
 * The function should be used with `NavigationTabs` instances.
 * It modifies the `activeTabType` property in the instance.
 *
 * _Using in flow diagram:_
 *
 * Connect the function output to the `props` input in the `NavigationTabs` instance.
 *
 * _Input arguments:_
 *
 * * **tabType**: {string} - the active filter type that will be passed into the `NavigationTabs` properties
 */
export const setActiveNavigationTab = (tabType, { stateByDispatch, history }) => dispatch => {
  if (stateByDispatch && tabType) {
    const { navigationTabsProps } = stateByDispatch;
    dispatch({ navigationTabsProps: { ...navigationTabsProps, ...{ activeTabType: tabType } } });
  }
};

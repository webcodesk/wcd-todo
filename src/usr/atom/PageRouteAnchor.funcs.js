/**
 * Performs the navigation to the page specified in the `pageRoutePath` property of the associated instance of the `PageRouteAnchor` component.
 * There's no incoming argument.
 *
 * _Using in flow diagram:_
 *
 * Connect the function output to the `props` input in the `PageRouteAnchor` instance.
 */
export const goToPage = (options, {stateByDispatch, history}) => dispatch => {
  if (stateByDispatch && history) {
    const { pageRouteAnchorProps } = stateByDispatch;
    if (pageRouteAnchorProps && pageRouteAnchorProps.pageRoutePath) {
      history.push(pageRouteAnchorProps.pageRoutePath);
    }
    dispatch({
      pageRouteAnchorProps
    });
  }
};
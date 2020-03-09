import React from 'react';
import { PageRouteAnchorTypes } from './PageRouteAnchor.props';

/**
 * The component is not displayed on the screen and is an addition to the `goToPage` function (usr.atom.PageRouteAnchor.goToPage).
 * It is recommended to place the component in parent components in properties like Element or Node that may not display it.
 * For example, a hidden array of nodes.
 *
 * _Using in flow diagram:_
 *
 * Connect the `pageRouteAnchorProps` output in the `goToPage` function to the `props` input in the component instance.
 *
 */
const PageRouteAnchor = () => {
  return null;
};

PageRouteAnchor.propTypes = PageRouteAnchorTypes;

PageRouteAnchor.defaultProps = {
};

export default PageRouteAnchor;

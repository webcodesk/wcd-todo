import React from 'react';
import ContainerMUI from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { ContainerTypes } from './Container.props';

const styles = theme => ({
  root: {
    position: 'relative'
  },
});

/**
 * _From Material UI documentation_
 *
 * The container centers your content horizontally. It's the most basic layout element.
 * * A fluid container width is bounded by that `maxWidth` property value.
 * * If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the `fixed` property. The max-width matches the min-width of the current breakpoint.
 */
class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, content, fixed, maxWidth, disableMaxWidth } = this.props;
    return (
      <ContainerMUI
        className={classes.root}
        fixed={fixed}
        maxWidth={disableMaxWidth ? false : maxWidth}
      >
        {content}
      </ContainerMUI>
    );
  }
}

Container.propTypes = ContainerTypes;

Container.defaultProps = {
  fixed: false,
  maxWidth: 'lg',
  disableMaxWidth: false,
  content: <span />
};

export default withStyles(styles)(Container);

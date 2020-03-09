import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FabMUI from '@material-ui/core/Fab';
import pickWithValues from './utils/pickWithValues';
import ButtonCircularProgress from './lib/ButtonCircularProgress';
import { ActionButtonTypes } from './ActionButton.props';

const styles = theme => ({
  button: {
    position: 'relative',
  },
  label: {
    marginLeft: theme.spacing(1),
  }
});

/**
 * _From Material UI documentation_
 *
 * A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended.
 * Only use a FAB if it is the most suitable way to present a screen’s primary action.
 * Only one floating action button is recommended per screen to represent the most common action.
 *
 */
class ActionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onClick} = this.props;
    if (onClick) { onClick(); }
  };

  render() {
    const { classes, label, color, variant, disabled, icon, size, href, loading } = this.props;
    console.info('add btn: ', { label, color, variant, disabled, size, loading });
    // const muiButtonProps = {...this.props, ...pickBy({variant, color, disabled, size, href}, i => !isNil(i))};
    const muiButtonProps = pickWithValues({variant, color, disabled, size});
    let labelElement = null;
    if (label) {
      if (icon) {
        labelElement = <span className={classes.label}>{label}</span>;
      } else {
        labelElement = <span>{label}</span>;
      }
    }
    if (loading) {
      muiButtonProps.disabled = true;
    }
    return (
      <FabMUI
        className={classes.button}
        onClick={this.handleButtonClick}
        {...muiButtonProps}
      >
        {icon}
        {labelElement}
        {loading && (
          <ButtonCircularProgress size={size} />
        )}
      </FabMUI>
    );
  }
}

ActionButton.propTypes = ActionButtonTypes;

ActionButton.defaultProps = {
};

export default withStyles(styles)(ActionButton);

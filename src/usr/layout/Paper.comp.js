import forOwn from 'lodash/forOwn';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PaperMUI from '@material-ui/core/Paper';
import { PaperTypes } from './Paper.props';
import pickWithValues from './utils/pickWithValues';
import findColor from './utils/colorMap';

const styles = theme => ({
  root: {
    width: '100%'
  }
});

/**
 * _From Material UI documentation_
 *
 * In Material Design, the physical properties of paper are translated to the screen.
 * The background of an application resembles the flat, opaque texture of a sheet of paper,
 * and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets.
 */
class Paper extends React.Component {
  render() {
    const {
      classes,
      theme,
      elevation,
      square,
      variant,
      palette,
      paddingSpacing,
      children
    } = this.props;
    const styleProperties = {};
    const innerBoxStyleProperties = {};
    if (palette) {
      const { color, backgroundColor } = palette;
      if (color) {
        const { colorHue, colorShade } = color;
        styleProperties.color = findColor(colorHue, colorShade, theme);
      }
      if (backgroundColor) {
        const { colorHue, colorShade } = backgroundColor;
        styleProperties.backgroundColor = findColor(colorHue, colorShade, theme);
      }
    }
    if (paddingSpacing) {
      const validSpacing = pickWithValues(paddingSpacing);
      if (!isEmpty(validSpacing)) {
        forOwn(validSpacing, (value, prop) => {
          innerBoxStyleProperties[prop] = theme.spacing(parseInt(value));
        });
      }
    }
    return (
      <PaperMUI
        className={classes.root}
        elevation={parseInt(elevation)}
        style={styleProperties}
        {...pickWithValues({square, variant})}
      >
        <div style={innerBoxStyleProperties}>
          {children}
        </div>
      </PaperMUI>
    );
  }
}

Paper.propTypes = PaperTypes;

Paper.defaultProps = {
  elevation: '1',
  square: false,
  variant: 'elevation',
  children: [<span />]
};

export default withStyles(styles, {withTheme: true})(Paper);

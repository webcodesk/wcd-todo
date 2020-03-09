import isEmpty from 'lodash/isEmpty';
import forOwn from 'lodash/forOwn';
import React from 'react';
import { PageFrameWithActionButtonTypes } from './PageFrameWithActionButton.props';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import findColor from './utils/colorMap';
import pickWithValues from './utils/pickWithValues';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  root: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 1,
  },
  actionButtonCell: {
    position: 'fixed',
    bottom: '1em',
    right: '1em',
    zIndex: 10,
  },
});

/**
 * The component should be used as a root on the page.
 */
class PageFrameWithActionButton extends React.Component {
  render () {
    const {
      classes,
      theme,
      applicationBarPalette,
      applicationBarElevation,
      mainAreaPalette,
      mainAreaPadding,
      mainAreaChildren,
      actionButtonContent,
      applicationBarContent,
      htmlPageTitle,
    } = this.props;
    const applicationBarStyle = {};
    if (applicationBarPalette) {
      const { color, backgroundColor } = applicationBarPalette;
      if (color) {
        const { colorHue, colorShade } = color;
        applicationBarStyle.color = findColor(colorHue, colorShade, theme);
      }
      if (backgroundColor) {
        const { colorHue, colorShade } = backgroundColor;
        applicationBarStyle.backgroundColor = findColor(colorHue, colorShade, theme);
      }
    }
    const mainContentStyle = {};
    if (mainAreaPalette) {
      const { color, backgroundColor } = mainAreaPalette;
      if (color) {
        const { colorHue, colorShade } = color;
        mainContentStyle.color = findColor(colorHue, colorShade, theme);
      }
      if (backgroundColor) {
        const { colorHue, colorShade } = backgroundColor;
        mainContentStyle.backgroundColor = findColor(colorHue, colorShade, theme);
      }
    }
    if (mainAreaPadding) {
      const validSpacing = pickWithValues(mainAreaPadding);
      if (!isEmpty(validSpacing)) {
        forOwn(validSpacing, (value, prop) => {
          mainContentStyle[prop] = value;
        });
      }
    }
    return (
      <React.Fragment>
        <CssBaseline/>
        <Helmet>
          <title>{htmlPageTitle}</title>
        </Helmet>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            elevation={parseInt(applicationBarElevation)}
            className={classes.appBar}
            style={applicationBarStyle}
          >
            {applicationBarContent}
          </AppBar>
          <main className={classes.content}>
            <div className={classes.mainContent} style={mainContentStyle}>
              {mainAreaChildren}
            </div>
          </main>
          <div className={classes.actionButtonCell}>
            {actionButtonContent}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PageFrameWithActionButton.propTypes = PageFrameWithActionButtonTypes;

PageFrameWithActionButton.defaultProps = {
  mainAreaChildren: [
    <span/>,
  ],
  actionButtonContent: <span/>
};

export default withStyles(styles, { withTheme: true })(PageFrameWithActionButton);

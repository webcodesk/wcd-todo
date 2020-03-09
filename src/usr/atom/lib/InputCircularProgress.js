import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
  progress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
  }
}));

const progressCircleSizesMap = {
  'small': 16,
  'medium': 20,
  'large': 24,
};

const InputCircularProgress = props => {
  const classes = useStyles();
  const progressSize = progressCircleSizesMap[props.size || 'medium'];
  const progressStyle = {
    marginTop: -(progressSize / 2),
    marginLeft: -(progressSize / 2),
  };
  return (
    <CircularProgress
      size={progressSize}
      style={progressStyle}
      className={classes.progress}
    />
  );
};

export default InputCircularProgress;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NewNoteFormTypes } from './NewNoteForm.props';

const styles = theme => ({
  gridWithColumn: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(auto-fill, minmax(20px, 1fr) )',
  },
  actionArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  actionItem: {
    marginLeft: theme.spacing(1),
  }
});

/**
 * A form to enter the text of a new ToDo record.
 * It can be used together with the functions: `validateNoteText`, `setError`.
 */
class NewNoteForm extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      noteText: this.props.noteText,
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { noteText } = this.props;
    if (noteText !== prevProps.noteText) {
      this.setState({
        noteText,
      });
    }
  }

  handleChangeText = (e) => {
    this.setState({
      noteText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const {
      onSaveNote,
    } = this.props;
    if (onSaveNote) {
      onSaveNote(this.state.noteText);
    }
  };

  handleCancel = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const {
      onCancel,
    } = this.props;
    if (onCancel) {
      this.setState({noteText: ''});
      onCancel();
    }
  };

  render() {
    const { noteText } = this.state;
    const { classes, theme, spacing, label, helperText, isError, rowsNumber } = this.props;
    return (
      <div
        className={classes.gridWithColumn}
        style={{gridGap: theme.spacing(parseInt(spacing))}}
      >
        <div>
          <TextField
            id="note-multiline"
            autoFocus={true}
            label={label}
            fullWidth={true}
            multiline={true}
            rows={rowsNumber}
            rowsMax={rowsNumber}
            value={noteText}
            onChange={this.handleChangeText}
            helperText={helperText}
            error={isError}
            margin="normal"
          />
        </div>
        <div className={classes.actionArea}>
          <div className={classes.actionItem}>
            <Button variant="contained" onClick={this.handleCancel}>
              Cancel
            </Button>
          </div>
          <div className={classes.actionItem}>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

NewNoteForm.propTypes = NewNoteFormTypes;

NewNoteForm.defaultProps = {
  label: 'Add Note',
  rowsNumber: 4,
  isError: false,
  helperText: 'Enter a note text',
  spacing: '1',
};

export default withStyles(styles, { withTheme: true })(NewNoteForm);

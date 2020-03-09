import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import { ToDoNotesListTypes } from './ToDoNotesList.props';

const styles = theme => ({
  emptyDiv: {
    padding: '1em',
    height: '7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  completedText: {
    textDecoration: 'line-through',
  }
});

const DeleteIcon = () => (
  <SvgIcon>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
  </SvgIcon>
);

const NoBorderCell = withStyles(() => ({
  root: {
    borderBottom: 0
  }
}))(TableCell);

/**
 * Displays a list of ToDo items as a table.
 * Each row has a checkbox to change the entry status, and a button to delete the entry.
 */
class ToDoNotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggleNoteCompleted = (id) => e => {
    if (this.props.onToggleNoteCompleted) {
      this.props.onToggleNoteCompleted(id);
    }
  };

  handleDeleteNote = (id) => e => {
    if (this.props.onDeleteNote) {
      this.props.onDeleteNote(id);
    }
  };

  render() {
    const { classes, emptyListMessage, notes } = this.props;
    if (!notes || notes.length === 0) {
      return (
        <div className={classes.emptyDiv}>
          <Typography variant="subtitle2" align="center">
            {emptyListMessage}
          </Typography>
        </div>
      );
    }
    return (
      <TableContainer>
        <Table aria-label="to-do-notes-list">
          <TableBody>
            {notes.map((row, idx) => {
              if (idx === notes.length - 1) {
                return (
                  <TableRow key={row.id}>
                    <NoBorderCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={row.isCompleted}
                        onChange={this.handleToggleNoteCompleted(row.id)}
                      />
                    </NoBorderCell>
                    <NoBorderCell align="left" style={{ color: 'inherit' }}>
                      {row.isCompleted ? <span className={classes.completedText}>{row.noteText}</span> : row.noteText}
                    </NoBorderCell>
                    <NoBorderCell padding="checkbox">
                      <IconButton onClick={this.handleDeleteNote(row.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </NoBorderCell>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={row.isCompleted}
                        onChange={this.handleToggleNoteCompleted(row.id)}
                      />
                    </TableCell>
                    <TableCell align="left" style={{ color: 'inherit' }}>
                      {row.isCompleted ? <span className={classes.completedText}>{row.noteText}</span> : row.noteText}
                    </TableCell>
                    <TableCell padding="checkbox">
                      <IconButton onClick={this.handleDeleteNote(row.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

ToDoNotesList.propTypes = ToDoNotesListTypes;

ToDoNotesList.defaultProps = {
  emptyListMessage: 'There are no notes',
  notes: [
    {id: '01', noteText: 'Initial todo record', isCompleted: true},
    {id: '02', noteText: 'The second record', isCompleted: false}
  ]
};

export default withStyles(styles)(ToDoNotesList);

import React from 'react';
import { GridTypes } from './Grid.props';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  gridWithRow: {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'column',
  },
  gridWithColumn: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(auto-fill, minmax(20px, 1fr) )',
  },
});

/**
 * A simple CSS grid wrapper that can be used to arrange the sections in two directions
 * * horizontal layout - `row`
 * * vertical direction - `column`
 */
class Grid extends React.Component {
  constructor(props) {
    super(props);
    const {classes} = this.props;
    this.classByDirection = {
      'row': classes.gridWithRow,
      'column': classes.gridWithColumn
    };

  }

  render() {
    const { theme, grid, cells } = this.props;
    const { direction, spacing } = grid;
    const contentList = [];
    if (cells && cells.length > 0) {
      for (let i = 0; i < cells.length; i++){
        contentList.push(
          <div
            key={`cell${i}`}
          >
            {cells[i]}
          </div>
        );
      }
    }
    return (
      <div
        className={this.classByDirection[direction]}
        style={{gridGap: theme.spacing(parseInt(spacing))}}
      >
        {contentList}
      </div>
    );
  }
}

Grid.propTypes = GridTypes;

Grid.defaultProps = {
  grid: {
    spacing: '1',
    direction: 'column'
  },
  cells: [
    <span/>,
    <span/>,
    <span/>
  ]
};

export default withStyles(styles, { withTheme: true })(Grid);

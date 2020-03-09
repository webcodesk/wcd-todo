import React from 'react';
import TypographyMUI from '@material-ui/core/Typography';
import pickWithValues from './utils/pickWithValues';
import { TypographyTypes } from './Typography.props';

/**
 * _From Material UI documentation_
 *
 * Use typography to present your design and content as clearly and efficiently as possible.
 *
 * Too many type sizes and styles at once can spoil any layout.
 * A typographic scale has a limited set of type sizes that work well together along with the layout grid.
 */
class Typography extends React.Component {
  render() {
    const { align, color, display, gutterBottom, noWrap, paragraph, variant, text } = this.props;
    const muiTypographyProps =
      pickWithValues({ align, color, display, gutterBottom, noWrap, paragraph, variant, text });
    return (
      <TypographyMUI
        {...muiTypographyProps}
      >
        <span>{text}</span>
      </TypographyMUI>
    );
  }
}

Typography.propTypes = TypographyTypes;

Typography.defaultProps = {
  align: 'inherit',
  color: 'initial',
  display: 'initial',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  variant: 'body1',
  text: 'Text here'
};

export default Typography;

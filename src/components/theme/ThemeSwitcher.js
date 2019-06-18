import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import withTheme from '../hocs/withTheme';
import { toggleTheme } from '../../redux/ThemeReducer';

class ThemeSwitcher extends React.Component {
  
  render () {
    const { theme } = this.props;
    const Button = styled.button`
      border: none;
      padding: 2em;
      background-color: ${theme.backColor};
      color: ${theme.textColor};
    `;
    return (
      <Button onClick={() => this.props.toggleTheme()}>
        ChangeTheme
      </Button>
    )
  }
}

export default connect(null, { toggleTheme })(
  withTheme(ThemeSwitcher)
);



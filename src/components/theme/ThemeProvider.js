import React, { Component } from 'react';
import { connect } from 'react-redux';

import ThemeContext from './ThemeContext';
import themes from './themes.json';

class ThemeProvider extends Component {
  render () {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const mapStateToProps = state => ({
  theme: themes[state.theme.themeId]
})
export default connect(mapStateToProps)(ThemeProvider);
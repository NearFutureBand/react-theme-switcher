import React, { Component } from 'react';
import ThemeContext from '../theme/ThemeContext';

const withTheme = (WrappedComponent) => {
  
  return class extends Component {
    static contextType = ThemeContext;
    render () {
      return (
        <WrappedComponent
          theme={this.context}
          {...this.props}
        />
      )
    }
  }
}

export default withTheme;
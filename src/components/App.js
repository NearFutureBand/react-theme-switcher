import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ThemeSwitcher from './theme/ThemeSwitcher';
import withTheme from './hocs/withTheme';

class App extends React.Component {
  
  render () {
    const Wrapper = styled.div`
      padding: 4em;
      background-color: ${this.props.theme.backColor};
    `;
    const Text = styled.p`
      font-size: 1.5em;
      text-align: justify;
      color: ${this.props.theme.textColor};
    `;

    return (
      <React.Fragment>
        <Wrapper>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the
            cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
            ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </Text>
        </Wrapper>
        <ThemeSwitcher />
      </React.Fragment>
    );
  }
}

export default connect()( withTheme(App) );

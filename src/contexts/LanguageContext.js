import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english', text: 'Select a language' };

  onLanguageOnTextChange = (language, text) => {
    this.setState({ language, text });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onLanguageOnTextChange: this.onLanguageOnTextChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

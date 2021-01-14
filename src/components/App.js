import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {
  state = { language: 'uzbek', color: 'primary', text: 'Select a language :' };

  onLanguageColorTextChange = (language, color, text) => {
    this.setState({ language, color, text });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          {this.state.language === 'english'
            ? 'Select a language :'
            : 'Tilni tanlang :'}
          <i
            className='flag us'
            onClick={() => this.onLanguageColorTextChange('english', 'primary')}
            style={{ cursor: 'pointer', marginLeft: '5px' }}
          />
          <i
            className='flag uz'
            onClick={() => this.onLanguageColorTextChange('uzbek', 'red')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

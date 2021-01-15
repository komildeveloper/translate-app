import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        {this.context.language === 'english'
          ? 'Select a language :'
          : 'Tilni tanlang :'}
        <i
          className='flag us'
          onClick={() => this.context.onLanguageOnTextChange('english')}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        />
        <i
          className='flag uz'
          onClick={() => this.context.onLanguageOnTextChange('uzbek')}
          style={{ cursor: 'pointer' }}
        />
      </div>
    );
  }
}

export default LanguageSelector;

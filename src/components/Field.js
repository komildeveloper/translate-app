import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Ism';
    return (
      <div className='field'>
        <label>{text}</label>
        <input type='text' />
      </div>
    );
  }
}

export default Field;

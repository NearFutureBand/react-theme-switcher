import React from 'react';
import themes from './themes.json';

export default React.createContext(
  themes['light']
)
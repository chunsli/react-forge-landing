import React, { Component } from 'react';
import styles from '../style.css';

import Header from './Header';

export default class App extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.test}>
        <Header />
      </div>
    );
  }
}
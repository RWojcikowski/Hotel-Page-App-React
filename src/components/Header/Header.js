import React from 'react';
import styles from './Header.module.css';
import withMousePosition from '../hoc/withMousePosition';

function Header(props) {
  return (
    <header className={`${styles.header}`}>
      <div className='text-info'>
        {props.mouseX} <br></br>
        {props.mouseY}
      </div>
      {props.children}
    </header>
  );
}

export default withMousePosition(Header);
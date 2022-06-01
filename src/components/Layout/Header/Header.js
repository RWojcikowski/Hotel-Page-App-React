import React from 'react';
import styles from './Header.module.css';
import withMousePosition from '../../../hoc/withMousePosition'

function Header(props) {
  const paralaxStyles = {
    transform: `translate(
      ${props.mouseX / 100}px,
      ${props.mouseY / 100}px
                )`
  };
  return (
    <header className={`${styles.header}`}>
      <div className='text-info'>
        <div
          className={styles.headerImage}
          style={paralaxStyles} ></div>
      </div>
      {props.children}
    </header >
  );
}

export default withMousePosition(Header);
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './Menu.module.css';

function Menu(props) {
  return (
    <div className={`${style.menuContainer} `}>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
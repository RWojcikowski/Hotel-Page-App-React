import React, { useContext } from 'react';
import style from './Menu.module.css';


function Menu() {


  return (
    <div className={`${style.menuContainer} breadcrumb`}>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <a href="#">Home</a>
        </li>

      </ul>
    </div>
  );
}

export default Menu;
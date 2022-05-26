import style from './Menu.module.css';
import useAuth from '../hooks/useAuth';

function Menu() {
  // const auth = useContext(AuthContext);
  const [auth, setAuth] = useAuth();

  const login = (e) => {
    e.preventDefault();
    setAuth(true)

  }

  const logout = (e) => {
    e.preventDefault();
    setAuth(false)

  }


  return (
    <div className={`${style.menuContainer} breadcrumb-item active`}>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <a href="#">Home</a>
          {auth ? (
            <li className={style.menuItem}>
              <a href='#' onClick={logout}>Wyloguj</a>
            </li>
          ) : (
            <li className={style.menuItem}>
              <a href='#' onClick={login}> Zaloguj</a>
            </li>
          )
          }
        </li>
      </ul>
    </div >
  );
}

export default Menu;
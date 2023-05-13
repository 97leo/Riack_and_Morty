import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = ({onSearch}) => {
    const navigate = useNavigate();
    const handleClick = (event) => {
    
    }
return (
    <div className={style.Nav}>
    <h1 className={style.titulo}>Rick And Morty Fan Page</h1>
        <SearchBar onSearch={onSearch}/>
        <NavLink to='/about'>
           <button>About</button>
        </NavLink>
      <NavLink to='/home'>
          <button>Home</button>
      </NavLink>
      <button>Log out</button>
      <NavLink to='/favorites'>
           <button>Favorites</button>
        </NavLink>
    </div>
)
}
export default Nav
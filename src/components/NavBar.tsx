import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useContext } from 'react';
import { DarkModeContext } from '../utils/contexts';

const StyledNav = styled.nav<{ $darkMode: boolean }>`
  padding: 0.8rem 5%;
  border-bottom: 1px solid #ced4da;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      a,
      button {
        display: inline-block;
        border-radius: 6px;
        padding: 0.5rem;
        color: ${(props) =>
          props.$darkMode
            ? 'rgba(255, 255, 255, 0.7)'
            : 'rgba(33, 33, 33, 0.7)'};
        text-decoration: none;
        transition: all 200ms ease;
        &:hover {
          background-color: rgba(33, 33, 33, 0.1);
        }
        &.active {
          color: ${(props) =>
            props.$darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(33, 33, 33, 1)'};
        }
      }

      button {
        border: none;
        display: flex;
        cursor: pointer;
        background-color: transparent;
      }
    }
  }
`;

const navBarOptions = [
  { name: 'Productos', path: '/products' },
  { name: 'Añadir productos', path: '/add-product' },
  { name: 'Carrito', path: '/cart' },
];

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <StyledNav $darkMode={darkMode}>
      <ul>
        {navBarOptions.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
        <li>
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? (
              <FiSun size={20} color="white" />
            ) : (
              <FiMoon size={20} color="#212121" />
            )}
          </button>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  padding: 0.8rem 5%;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      a {
        display: inline-block;
        border-radius: 6px;
        padding: 0.5rem;
        color: rgba(33, 33, 33, 0.7);
        text-decoration: none;
        transition: all 200ms ease;
        &:hover {
          background-color: rgba(33, 33, 33, 0.1);
        }
        &.active {
          color: rgba(33, 33, 33, 1);
        }
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
  return (
    <StyledNav>
      <ul>
        {navBarOptions.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavBar;


import { Nav, NavLink, NavIcon, Bars } from './styles';

export function Navbar() {
  return (
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
}
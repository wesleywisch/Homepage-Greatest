
import { Nav, NavLink, NavIcon, Bars } from './styles';

export function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
}
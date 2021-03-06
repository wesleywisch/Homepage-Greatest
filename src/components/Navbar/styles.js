import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: var(--white);
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 400px){
    position: absolute;
    top: 0.625rem; // 10px
    left: 1.562rem; // 25px
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: var(--white);

  p{
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
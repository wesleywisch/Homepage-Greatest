import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 5rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  /* cursor: pointer; */

  @media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
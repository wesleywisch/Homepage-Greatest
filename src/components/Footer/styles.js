import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 81.25rem; // 1300px
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 81.25rem; // 1300px
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 68.75rem; // 1100px
  margin: 1rem auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem; // 240px
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`;

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { 
  FooterContainer, 
  FooterWrap, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialLogo, 
  SocialIcons, 
  SocialIconLink,
} from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label="Facebook" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label="Instagram" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label="Youtube" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label="Twitter" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank' aria-label="Linkedin" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}
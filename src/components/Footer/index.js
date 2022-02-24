import React from 'react';
import {FaFacebook,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import { FooterLinksContainer,FooterContainer,FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksWrapper,FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome =()=>{
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
      <FooterWrap>
      <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinkItems>
          <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Meet Up</FooterLink>
                  <FooterLink to="/signin">About Us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Meet Up</FooterLink>
                  <FooterLink to="/signin">About Us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Meet Up</FooterLink>
                  <FooterLink to="/signin">About Us</FooterLink>
          </FooterLinkItems>
          </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia> 
              <SocialMediaWrap>
                  <SocialLogo to="/" onClick={toggleHome}>TrueNaturals</SocialLogo>
                  <WebsiteRights> TrueNaturals &copy; {new Date().getFullYear()} All copyright reserved.</WebsiteRights>
                  <SocialIcons>
                      <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                      <SocialIconLink href='/' target="_blank" aria-label="FaWhatsapp"><FaWhatsapp/></SocialIconLink>
                      <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

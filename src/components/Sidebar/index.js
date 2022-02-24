import React from 'react';
import { SidebarContainer,Icon,CloseIcon,SidebarBtnWrap,SidebarMenu,SidebarLink,SidebarRoute,SidebarWrapper } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon>
          <CloseIcon/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to="aboutus" onClick={toggle}>
                  About
              </SidebarLink>
              <SidebarLink to="ourcourse" onClick={toggle}>
                  Our Course
              </SidebarLink>
              <SidebarLink to="ourgallery" onClick={toggle}>
                  Our Gallery
              </SidebarLink>
              <SidebarLink to="contactus" onClick={toggle}>
                  Contact Us
              </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
              <SidebarRoute to='/ourshop'onClick={toggle}> Our Shop</SidebarRoute>
          </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

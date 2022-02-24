import React, { useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
NavBtn,
NavBtnLink
} from './NavbarElements';
import '../../App.css';
const Navbar = ({toggle}) => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
<>
<IconContext.Provider value={{color:'#fff'}}>
		<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="#">TrueNaturals</NavLogo>
			<MobileIcon onClick={toggle}>
			<FaBars />
			</MobileIcon>
			<NavMenu>
				<NavItem>
				<NavLinks href="#">About Us</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Our Services</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Our Gallery</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Contact Us</NavLinks>
				</NavItem>
			</NavMenu>
            <NavBtn>
        <NavBtnLink to='/ourshop'>OurShop</NavBtnLink>
        </NavBtn>
		</NavContainer>
		</Nav>
        </IconContext.Provider>
	</>
	)
}

export default Navbar;

import React from 'react'
import { Nav, NavLink,ToggleButton, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import Contact from '../Contact';
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleTheme, darkMode, theme } = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          {/* <NavLink href='#experience'>Experience</NavLink> */}
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <ToggleButton onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </ToggleButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            {/* <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink> */}
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <ToggleButton onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </ToggleButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
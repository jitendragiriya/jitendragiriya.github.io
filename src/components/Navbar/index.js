import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeToggler } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { MdBrightness5 } from "react-icons/md";
import { Bio } from '../../constants';
import { useTheme } from 'styled-components';

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: theme.primary, marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <ThemeToggler onClick={toggleTheme}><MdBrightness5 /></ThemeToggler>
          <FaBars onClick={toggleOpen} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggler onClick={toggleTheme}><MdBrightness5 /></ThemeToggler>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleOpen}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleOpen}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={toggleOpen}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleOpen}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleOpen}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
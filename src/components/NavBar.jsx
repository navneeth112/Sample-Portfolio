import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #1f1f1f;
`;

const NavLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #00bcd4;
  }
`;

const navVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } }
};

const NavBar = () => {
  return (
    <Nav>
      <NavLink whileHover="hover" variants={navVariants}>Projects</NavLink>
      <NavLink whileHover="hover" variants={navVariants}>Certificates</NavLink>
      <NavLink whileHover="hover" variants={navVariants}>Other Achievements</NavLink>
      <NavLink whileHover="hover" variants={navVariants}>Contact Info</NavLink>
    </Nav>
  );
};

export default NavBar;

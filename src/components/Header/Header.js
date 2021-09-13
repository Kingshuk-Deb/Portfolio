import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiKaios } from 'react-icons/si';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '40px' }}>
          <SiKaios size="3rem" /> <span style={{ fontSize: '2rem' }}>ingshuk</span>
        </a>
      </Link>
    </Div1>
    <Div2>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Kingshuk-Deb" style={{marginBottom: '20px' }}>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kingshuk-deb-1934461b7/" style={{marginBottom: '20px' }}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/lifebyronnie/" style={{marginBottom: '20px' }}>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;

import React from 'react';
import Typical from 'react-typical'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const sendEmail = () => {
  window.location = "mailto:kingshukdeb007@gmail.com";
}


const Hero = (props) => (
  <>
    <Section row nopadding style={{marginBottom: '40px'}}>
      <LeftSection>
      <SectionText style={{color: 'whitesmoke'}}>Hi my name is,</SectionText>
        <SectionTitle main center style={{marginTop: '-30px'}} >
          Kingshuk Deb <br />
          I am<br />
          <Typical
            steps={['a Student.', 2000, 'a Developer.', 1000, 'a Coder.', 1000]}
            loop={Infinity}
            wrapper="SectionTitle"
          />
        </SectionTitle>
        <SectionText style={{marginBottom: '55px'}}>
        I believe Whether we’re fighting climate change or going to space, everything is moved forward by computers. The purpose of a true programmer is far beyond the comfort of his chair.
        </SectionText>
        <Button onClick={sendEmail}>Wanna Hire Me!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

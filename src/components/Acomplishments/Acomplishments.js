import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1600, text: 'CodeChef Rating'},
  { number: 500, text: 'HackerRank Solutions', },
  { number: 1000, text: 'LinkedIn Followers', },
  { number: 9.5, text: 'CGPA', }
];

const Acomplishments = () => (
  <Section>
  <SectionDivider style={{marginTop:'10px', marginBottom: '50px'}}/>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

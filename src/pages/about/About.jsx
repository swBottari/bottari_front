import React from 'react';
import * as S from './About.styles';
import AboutSection from '../../components/about/AboutSection';

function About() {
  return (
    <S.MainWrapper>
      <S.TopImg>
        <S.Title>규정/운송료 안내</S.Title>
      </S.TopImg>
      <S.AboutSection>
        <S.AboutTitle>서비스의 규정에 대한 안내입니다.</S.AboutTitle>
        <AboutSection />
      </S.AboutSection>
    </S.MainWrapper>
  );
}

export default About;

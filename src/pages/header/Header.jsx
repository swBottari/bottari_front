import React from 'react';
import * as S from './Header.styles';
import LogoSection from '../../components/header/LogoSection';
import NavigateSection from '../../components/header/NavigateSection';

function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <LogoSection />
      </S.LogoContainer>
      <S.NavigationContainer>
        <NavigateSection />
      </S.NavigationContainer>
    </S.HeaderContainer>
  );
}

export default Header;

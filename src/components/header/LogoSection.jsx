import React from 'react';
import logoImage from '../../assets/images/BottariLogo.svg';
import * as S from './LogoSection.styles';

function LogoSection() {
  return (
    <S.Container>
      <S.LogoImg src={logoImage} alt="Bottari Logo" />
    </S.Container>
  );
}

export default LogoSection;

import React from 'react';
import logoImage from '../../assets/images/BottariLogo.svg';
import * as S from './LogoSection.styles';
import { useNavigate } from 'react-router-dom';

function LogoSection() {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate('/');
  };

  return (
    <S.Container onClick={handleLogo}>
      <S.LogoImg src={logoImage} alt="Bottari Logo" />
    </S.Container>
  );
}

export default LogoSection;

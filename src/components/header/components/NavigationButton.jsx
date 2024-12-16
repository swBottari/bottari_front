import React from 'react';
import * as S from './NavigationButton.styles';
import { useNavigate } from 'react-router-dom';

function NavigationButton({ nav }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    switch (nav) {
      case '베송':
        navigate('/');
        break;
      case '예약':
        navigate('/reservation');
        break;
      case '마이페이지':
        navigate('/mypage');
        break;
      case '로그인':
        navigate('/login');
        break;
      case '문의':
        navigate('/inquiry');
        break;
      case '로그아웃':
        localStorage.removeItem('userName');
        window.location.reload();
        break;
      case '회원가입':
        navigate('/signup');
        break;
    }
  };

  return (
    <S.Container onClick={handleNavigation}>
      <>{nav}</>
    </S.Container>
  );
}

export default NavigationButton;

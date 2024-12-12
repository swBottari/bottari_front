import React from 'react';
import * as S from './MiddleBarButton.styles';
import { useNavigate } from 'react-router-dom';

function MiddleBarButton({ nav }) {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (nav) {
      case 'delivery':
        navigate('/');
        break;
      case 'reservation':
        navigate('/reservation');
        break;
      case 'company':
        navigate('/');
        break;
      case 'quick':
        navigate('/');
        break;
      case 'refund':
        navigate('/');
        break;
    }
  };

  return (
    <>
      <S.Container onClick={handleClick}>{nav}</S.Container>
    </>
  );
}

export default MiddleBarButton;

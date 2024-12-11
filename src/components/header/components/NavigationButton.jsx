import React from 'react';
import * as S from './NavigationButton.styles';

function NavigationButton({ nav }) {
  return (
    <S.Container>
      <>{nav}</>
    </S.Container>
  );
}

export default NavigationButton;

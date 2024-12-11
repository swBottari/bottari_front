import React from 'react';
import * as S from './MiddleBarButton.styles';

function MiddleBarButton({ nav }) {
  return (
    <>
      <S.Container>{nav}</S.Container>
    </>
  );
}

export default MiddleBarButton;

import React from 'react';
import * as S from './CompletedReservation.styles';
import ReserveInputSection from './ReserveInputSection';

function CompletedReservation() {
  return (
    <S.MainWrapper>
      <S.TopImg>
        <S.Title>국내택배픽업예약</S.Title>
      </S.TopImg>
      <ReserveInputSection />
    </S.MainWrapper>
  );
}

export default CompletedReservation;

import React from 'react';
import * as S from './CompletedSelectReservation.styles';
import InnerReserveInputSection from './components/InnerReserveInputSection';
import { useRecoilValue } from 'recoil';
import { reserveState } from '../../../recoil/Items/itemsRecoilState';
import OutReserveInputSection from './components/OutReserveInputSection';

function CompletedSelectReservation() {
  const reserveValue = useRecoilValue(reserveState);

  return (
    <S.Container>
      <S.TopImg>
        <S.Title>
          {reserveValue.boundaryState === '국내' ? '국내택배픽업예약' : '해외택배픽업예약'}
        </S.Title>
      </S.TopImg>
      <S.InputSection>
        {reserveValue.boundaryState === '국내' ? (
          <InnerReserveInputSection />
        ) : (
          <OutReserveInputSection />
        )}
      </S.InputSection>
    </S.Container>
  );
}

export default CompletedSelectReservation;

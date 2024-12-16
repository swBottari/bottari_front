import React from 'react';
import { useRecoilValue } from 'recoil';
import { reserveState } from '../../../recoil/Items/itemsRecoilState';
import * as S from './ReserveStateSelect.styles';
import ReserveUserSelect from './components/ReserveUserSelect';
import ReserveBoundaryState from './components/ReserveBoundaryState';
import CompletedSelectReservation from '../completedSelect/CompletedSelectReservation';

function ReserveStateSelect() {
  const reserveValue = useRecoilValue(reserveState);

  return (
    <S.Container>
      {!reserveValue.userState || !reserveValue.boundaryState ? (
        <S.TopImg>
          <S.Title>택배픽업예약</S.Title>
        </S.TopImg>
      ) : null}

      {!reserveValue.userState && <ReserveUserSelect />}
      {reserveValue.userState && !reserveValue.boundaryState && <ReserveBoundaryState />}
      {reserveValue.userState && reserveValue.boundaryState && <CompletedSelectReservation />}
    </S.Container>
  );
}

export default ReserveStateSelect;

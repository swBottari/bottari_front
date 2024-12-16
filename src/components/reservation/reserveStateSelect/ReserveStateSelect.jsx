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
      {!reserveValue.userState && <ReserveUserSelect />}
      {reserveValue.userState && !reserveValue.boundaryState && <ReserveBoundaryState />}
      {reserveValue.userState && reserveValue.boundaryState && <CompletedSelectReservation />}
    </S.Container>
  );
}

export default ReserveStateSelect;

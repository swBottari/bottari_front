import React from 'react';
import * as S from './Reservation.styles';
import ReserveStateSelect from '../../components/reservation/reserveStateSelect/ReserveStateSelect';

function Reservation() {
  return (
    <>
      <S.Container>
        <ReserveStateSelect />
      </S.Container>
    </>
  );
}

export default Reservation;

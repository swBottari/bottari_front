import React from 'react';
import { useRecoilState } from 'recoil';
import { reserveState } from '../../../../recoil/Items/itemsRecoilState';
import * as S from './ReserveBoundaryState.styles';
import imgIn from '../../../../assets/images/Home.png';
import imgOut from '../../../../assets/images/Airplane.png';

function ReserveBoundaryState() {
  const [reserve, setReserve] = useRecoilState(reserveState);

  const handleBoundaryStateChange = newBoundaryState => {
    setReserve(prevState => ({
      ...prevState,
      boundaryState: newBoundaryState,
    }));
  };

  return (
    <S.Container>
      <S.ButtonContainer onClick={() => handleBoundaryStateChange('해외')}>
        <S.ButtonImage src={imgOut} alt="해외 택배" />
        해외 택배 예약
      </S.ButtonContainer>
      <S.ButtonContainer onClick={() => handleBoundaryStateChange('국내')}>
        <S.ButtonImage src={imgIn} alt="국내 택배" />
        국내 택배 예약
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ReserveBoundaryState;

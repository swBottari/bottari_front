import React from 'react';
import { useRecoilState } from 'recoil';
import { reserveState } from '../../../../recoil/Items/itemsRecoilState';
import * as S from './ReserveBoundaryState.styles';

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
      <S.ButtonContainer onClick={() => handleBoundaryStateChange('국내')}>국내</S.ButtonContainer>
      <S.ButtonContainer onClick={() => handleBoundaryStateChange('해외')}>해외</S.ButtonContainer>
    </S.Container>
  );
}

export default ReserveBoundaryState;

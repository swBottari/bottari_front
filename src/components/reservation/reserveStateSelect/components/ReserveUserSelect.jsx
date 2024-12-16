import React from 'react';
import { useRecoilState } from 'recoil';
import { reserveState } from '../../../../recoil/Items/itemsRecoilState';
import * as S from './ReserveUserSelect.styles';

function ReserveUserSelect() {
  const [reserve, setReserve] = useRecoilState(reserveState);
  const handleUserStateChange = newUserState => {
    setReserve(prevState => ({
      ...prevState,
      userState: newUserState,
    }));
  };

  return (
    <S.Container>
      <S.ButtonContainer onClick={() => handleUserStateChange('개인')}>개인</S.ButtonContainer>
      <S.ButtonContainer onClick={() => handleUserStateChange('기업')}>기업</S.ButtonContainer>
    </S.Container>
  );
}

export default ReserveUserSelect;

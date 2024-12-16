import React from 'react';
import { useRecoilState } from 'recoil';
import { reserveState } from '../../../../recoil/Items/itemsRecoilState';
import * as S from './ReserveUserSelect.styles';
import imgPerson from '../../../../assets/images/Person.png';
import imgFirm from '../../../../assets/images/Firm.png';

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
      <S.ButtonContainer onClick={() => handleUserStateChange('기업')}>
        <S.ButtonImage src={imgFirm} alt="기업" />
        기업 회원 예약
      </S.ButtonContainer>
      <S.ButtonContainer onClick={() => handleUserStateChange('개인')} isPerson>
        <S.ButtonImage src={imgPerson} alt="개인" />
        개인 회원 예약
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ReserveUserSelect;

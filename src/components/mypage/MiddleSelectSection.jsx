import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './MiddleSelectSection.styles';
import { useRecoilState } from 'recoil';
import { checkRecoilState } from '../../recoil/user/myPageRecoilState';

function MiddleSelectSection() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedMenu, setSelectedMenu] = useRecoilState(checkRecoilState);

  const handleClick = action => {
    setSelectedMenu(action);
  };

  const getTitle = () => {
    switch (selectedMenu) {
      case '예약':
        return '예약확인';
      case '반품':
        return '반품확인';
      case '퀵':
        return '퀵확인';
      default:
        return '예약확인';
    }
  };

  return (
    <S.Container>
      <S.Title>{getTitle()}</S.Title>
      <S.ButtonContainer>
        <S.DateButton>
          <S.ButtonText>기간</S.ButtonText>
          <S.DatePickerWrapper>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <span> ~ </span>
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </S.DatePickerWrapper>
        </S.DateButton>
        <S.Button onClick={() => handleClick('예약')} isSelected={selectedMenu === '예약'}>
          <S.Icon>🚚</S.Icon>
          <S.ButtonText>예약</S.ButtonText>
        </S.Button>
        <S.Button onClick={() => handleClick('반품')} isSelected={selectedMenu === '반품'}>
          <S.Icon>↩️</S.Icon>
          <S.ButtonText>반품</S.ButtonText>
        </S.Button>
        <S.Button onClick={() => handleClick('퀵')} isSelected={selectedMenu === '퀵'}>
          <S.Icon>📦</S.Icon>
          <S.ButtonText>퀵</S.ButtonText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default MiddleSelectSection;

import React from 'react';
import * as S from './NavigateSection.styles';
import NavigationButton from './components/NavigationButton';

function NavigateSection() {
  const navList = ['배송', '예약', '마이페이지'];

  return (
    <S.Container>
      {navList.map((item, index) => (
        <NavigationButton key={index} nav={item} />
      ))}
    </S.Container>
  );
}

export default NavigateSection;

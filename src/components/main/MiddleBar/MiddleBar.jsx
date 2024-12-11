import React from 'react';
import * as S from './MiddleBar.styles';
import MiddleBarButton from './components/MiddleBarButton';

function MiddleBar() {
  const navList = ['delivery', 'reservation', 'company', 'quick', 'refund'];

  return (
    <S.MiddleBar>
      {navList.map((item, index) => (
        <MiddleBarButton key={index} nav={item} />
      ))}
    </S.MiddleBar>
  );
}

export default MiddleBar;

import React, { useEffect, useState } from 'react';
import * as S from './NavigateSection.styles';
import NavigationButton from './components/NavigationButton';

function NavigateSection() {
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('userName');
    if (accessToken) {
      setNavList(['배송', '예약', '마이페이지', '문의', '로그아웃']);
    } else {
      setNavList(['로그인', '회원가입']);
    }
  }, []);

  return (
    <S.Container>
      {navList.map((item, index) => (
        <NavigationButton key={index} nav={item} />
      ))}
    </S.Container>
  );
}

export default NavigateSection;

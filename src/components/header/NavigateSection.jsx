import React, { useEffect, useState } from 'react';
import * as S from './NavigateSection.styles';
import NavigationButton from './components/NavigationButton';

function NavigateSection() {
  const [navList, setNavList] = useState([]);

  const updateNavList = () => {
    const accessToken = localStorage.getItem('userName');
    if (accessToken) {
      setNavList(['배송', '예약', '마이페이지', '문의', '안내', '로그아웃']);
    } else {
      setNavList(['로그인', '회원가입', '안내']);
    }
  };

  useEffect(() => {
    // 초기 상태 설정
    updateNavList();

    const handleStorageChange = () => {
      updateNavList();
    };

    window.addEventListener('storageChange', handleStorageChange);

    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
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

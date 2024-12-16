import React from 'react';
import * as S from './MyPage.styles';
import MiddleSelectSection from '../../components/mypage/MiddleSelectSection';
import ListSection from '../../components/mypage/ListSection';

function MyPage() {
  return (
    <S.MainWrapper>
      <S.TopImg>
        <S.Title>마이페이지</S.Title>
      </S.TopImg>
      <S.MiddleSection>
        <MiddleSelectSection />
      </S.MiddleSection>
      <S.ReserveListSection>
        <ListSection />
      </S.ReserveListSection>
    </S.MainWrapper>
  );
}

export default MyPage;

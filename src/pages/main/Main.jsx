import React from 'react';
import * as S from './Main.styles';
import Search from '../../components/main/Search/Search';
import MiddleBar from '../../components/main/MiddleBar/MiddleBar';

function Main() {
  return (
    <S.MainWrapper>
      <S.SearchSection>
        <Search />
      </S.SearchSection>
      <S.MiddleSection>
        <MiddleBar />
      </S.MiddleSection>
    </S.MainWrapper>
  );
}

export default Main;

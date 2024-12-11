import React from 'react';
import * as S from './Tracking.styles';
import Search from '../../components/main/Search/Search';
import TrackingList from '../../components/tracking/TrackingList';

function Tracking() {
  return (
    <S.MainWrapper>
      <S.TopImg>
        <S.Title>배송조회</S.Title>
      </S.TopImg>
      <S.SearchSection>
        <Search />
      </S.SearchSection>
      <S.ListSection>
        <TrackingList />
      </S.ListSection>
    </S.MainWrapper>
  );
}

export default Tracking;

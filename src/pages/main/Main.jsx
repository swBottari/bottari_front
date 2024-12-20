import React, { useEffect } from 'react';
import * as S from './Main.styles';
import Search from '../../components/main/Search/Search';
import MiddleBar from '../../components/main/MiddleBar/MiddleBar';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { reserveState, searchQueryAtom } from '../../recoil/Items/itemsRecoilState';

function Main() {
  const setReserveValue = useSetRecoilState(reserveState);
  const setSearchValue = useSetRecoilState(searchQueryAtom);

  useEffect(() => {
    setReserveValue([]);
    setSearchValue('');
  }, []);

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

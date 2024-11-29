import React from 'react';
import * as S from './Search.styles';

function Search() {
  return (
    <S.SearchBar>
      <S.InputWrapper>
        <S.InputImage />
        <S.InputArea type="text" placeholder="택배조회" />
        <S.InputIcon />
      </S.InputWrapper>
    </S.SearchBar>
  );
}

export default Search;

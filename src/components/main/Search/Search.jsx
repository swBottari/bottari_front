import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchQueryAtom } from '../../../recoil/Items/itemsRecoilState';
import * as S from './Search.styles';

function Search() {
  const [searchValue, setSearchValue] = useRecoilState(searchQueryAtom);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate('/tracking');
    }
  };

  return (
    <S.SearchBar>
      <S.InputWrapper onSubmit={handleSearch}>
        <S.InputImage />
        <S.InputArea
          type="text"
          placeholder="택배조회"
          value={searchValue}
          onChange={handleInputChange}
        />
        <S.InputIcon onClick={handleSearch} />
      </S.InputWrapper>
    </S.SearchBar>
  );
}

export default Search;

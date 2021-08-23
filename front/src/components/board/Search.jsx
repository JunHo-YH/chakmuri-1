import React from 'react';
import styled from "styled-components";
import SearchBar from '../board/SearchBar';
import Button from '../common/Button'

/**
 * 독서 모임 찾기 영역입니다.
 * 
 * 여기에서는 원하는 독서 모임의 이름을 검색하여 특정한 독서 모임을 찾을 수 있고, 검색 바 밑에 여러 가지 특정한
 * 버튼(==태그)를 누르면, 그에 맞는 태그들만 필터링해서 렌더링합니다. ** 최대 3개까지 가능
 */

const SearchLogo = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  justify-content: center;
`;

const SearchLogoText = styled.span`
  margin-left: 8px;
`;

const ButtonWrapper = styled.div` /* 수정 예정 - 2021.08.23 */
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const Search = (props) => { 
  return (
    <>
      <SearchLogo>
        <img src="assets/images/boardSearchLogo.png" alt="icon.png"/>
        <SearchLogoText>독서 모임 찾기</SearchLogoText> 
      </SearchLogo>
      <SearchBar />
      <ButtonWrapper>
        <Button />
        <Button />
        <Button />
        <Button />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button />
        <Button />
        <Button />
        <Button />
      </ButtonWrapper>
    </>
  );
};

export default Search;
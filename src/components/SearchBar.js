import React from 'react';
import glamorous from 'glamorous';
import SearchText from './Inputs/SearchText';

const SearchBarContainer = glamorous.div({
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '0.4rem 3rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-end',
  boxShadow: '1px 2px 5px #dedede',
});

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchText />
    </SearchBarContainer>
  );
};

export default SearchBar;

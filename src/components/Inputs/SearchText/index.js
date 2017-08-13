import React from 'react';
import { InputContainer, TextInput } from '../Text';
import MagnifyingGlass from '../../../assets/icons/MagnifyingGlass';

const SearchText = () => {
  return (
    <InputContainer>
      <MagnifyingGlass
        style={{ height: '0.6rem', fill: '#999999', marginRight: '0.4rem' }}
      />
      <TextInput type="text" placeholder="Search" />
    </InputContainer>
  );
};

export default SearchText;

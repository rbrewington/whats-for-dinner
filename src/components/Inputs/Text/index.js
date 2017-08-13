import React from 'react';
import glamorous from 'glamorous';

export const InputContainer = glamorous.div({
  border: '1px solid #dddddd',
  padding: '0.4rem',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
});
export const TextInput = glamorous.input({
  appearance: 'none',
  border: 'none',
  padding: '0',
  fontSize: '0.6rem',
  width: '160px',
  ':focus': { outline: 'none' },
  '::placeholder': { color: '#888888' },
});

const Text = props => {
  return (
    <InputContainer>
      <TextInput {...props} />
    </InputContainer>
  );
};

export default Text;

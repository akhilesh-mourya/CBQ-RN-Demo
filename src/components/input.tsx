import { InputContainer, ErrorText, TextInput } from './styles';
import React, { FC } from 'react';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  error?: string;
}

export const CBQInput: FC<InputProps> = React.memo((props) => {
  return (
    <InputContainer>
      <TextInput {...props} />
      <ErrorText>{props.error || ''}</ErrorText>
    </InputContainer>
  );
});

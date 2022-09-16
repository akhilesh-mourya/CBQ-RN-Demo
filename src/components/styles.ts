import styled from 'styled-components/native';
import { color, border, layout, space } from 'styled-system';
import { scale } from 'react-native-size-matters';

export const Container = styled.View.attrs((props) => ({
  flex: 1,
  bg: props.theme.colors.bg,
}))`
  justify-content: center;
  align-items: center;
  ${color}
`;

export const ButtonContainer = styled.TouchableOpacity.attrs((props) => ({
  width: props.width,
  height: props.height,
  bg: props.theme.colors.primary,
  borderRadius: props.theme.borderRadius,
}))`
  align-items: center;
  justify-content: center;
  align-self: center;
  ${layout}
  ${color}
${border}
`;

export const Text = styled.Text.attrs((props) => ({
  color: props.theme.colors.white,
}))`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  ${color}
`;

export const InputContainer = styled.View.attrs((props) => ({
  bg: props.theme.colors.bg,
  marginHorizontal: scale(15),
  marginVertical: scale(5),
}))`
  ${color}
`;

export const ErrorText = styled.Text.attrs((props) => ({
  color: props.theme.colors.danger,
  mt: scale(2),
}))`
  font-size: ${scale(12)}px;
  ${color}
  ${space}
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  color: props.theme.colors.black,
  marginVertical: scale(2),
  bg: props.theme.colors.white,
  height: scale(45),
  borderBottomColor: props.theme.colors.secondary,
  borderBottomWidth: 2,
}))`
  font-size: ${scale(15)}px;
  padding-left: 20px;
  ${color}
`;

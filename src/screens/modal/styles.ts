import styled from 'styled-components/native';
import { color, space } from 'styled-system';
import { scale } from 'react-native-size-matters';

export const Container = styled.View.attrs((props) => ({
  flex: 1,
  bg: props.theme.colors.bg,
}))`
  ${color}
`;

export const ListView = styled.FlatList.attrs(() => ({
  flex: 1,
}))`
  ${color}
`;

export const ListItem = styled.View.attrs((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: scale(10),
  padding: scale(30),
  margin: scale(15),
  shadowColor: props.theme.colors.black,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowRadius: scale(10),
  shadowOpacity: 0.1,
  bg: props.theme.colors.white,
}))`
  ${color}
`;

export const Text = styled.Text.attrs((props) => ({
  color: props.theme.colors.black,
}))`
  font-size: ${scale(15)}px;
  font-weight: 500;
  text-align: center;
  ${color}
`;

export const Block = styled.View.attrs(() => ({
  mt: scale(30),
}))`
  ${space}
`;

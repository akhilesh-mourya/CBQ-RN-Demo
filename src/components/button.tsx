import { ButtonContainer, Text } from './styles';
import React, { FC } from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { Size } from '../enums';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  size?: string;
  type?: string;
}

export const CBQButton: FC<ButtonProps> = React.memo((props) => {
  const { children, title, size } = props;
  let width = scale(60);
  let height = verticalScale(26);
  let fontSize = scale(12);

  const getSize = () => {
    switch (size) {
      case Size.Small:
        width = scale(110);
        height = verticalScale(32);
        fontSize = scale(14);
        break;
      case Size.Medium:
        width = scale(210);
        height = verticalScale(42);
        fontSize = scale(16);

        break;
      case Size.Large:
        width = scale(310);
        height = verticalScale(52);
        fontSize = scale(20);
        break;
      default:
        break;
    }

    return { width, height, fontSize };
  };

  return (
    <ButtonContainer {...props} {...getSize()}>
      <Text {...props} {...getSize()}>
        {children || title}
      </Text>
    </ButtonContainer>
  );
});

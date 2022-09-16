import { Container } from './styles';
import React, { FC } from 'react';
import { ActivityIndicatorProps, ActivityIndicator } from 'react-native';

export const CBQIndicator: FC<ActivityIndicatorProps> = React.memo(() => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
});

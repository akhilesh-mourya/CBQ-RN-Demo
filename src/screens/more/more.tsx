import React, { FC, useEffect } from 'react';
import { Size } from '../../enums';
import { CBQButton } from '../../components/button';
import { Container } from './styles';
import { showModalScreen, DATA_LIST, MODAL_CONTAINER_SCREEN } from '../../navigation';
import { useSelector } from 'react-redux';

export const MoreScreen: FC<{}> = () => {
  const data = useSelector((state) => state.data);
  useEffect(() => {
    // Checking if the user data is already added in the redux store. If data available then show the user list otherwise show tab screen
    if (data.data?.length > 0) {
      showModalScreen(MODAL_CONTAINER_SCREEN, DATA_LIST, false, true);
    }
  }, []);
  const onPress = () => {
    // Open Modal
    showModalScreen(MODAL_CONTAINER_SCREEN, DATA_LIST, false, true);
  };

  return (
    <Container>
      <CBQButton title="Open Modal" size={Size.Medium} onPress={onPress} />
    </Container>
  );
};

export default MoreScreen;

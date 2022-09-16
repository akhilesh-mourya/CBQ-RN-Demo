// @flow

import React, { FC } from 'react';
import { Navigation } from 'react-native-navigation';
import { HomeScreen, DataListScreen, MoreScreen, AddDataScreen } from '../screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import {
  HOME_SCREEN,
  MORE_SCREEN,
  DATA_LIST_SCREEN,
  ADD_DATA_SCREEN,
  MODAL_CONTAINER_SCREEN,
} from './Screens';
import ReduxStore from '../redux/store/store';
import ModalContainerScreen from '../screens/modal/container';

function WrappedComponent(Component: FC) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider store={ReduxStore.store}>
        <PersistGate loading={null} persistor={ReduxStore.persistor}>
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(MORE_SCREEN, () => WrappedComponent(MoreScreen));
  Navigation.registerComponent(MODAL_CONTAINER_SCREEN, () =>
    WrappedComponent(ModalContainerScreen),
  );
  Navigation.registerComponent(DATA_LIST_SCREEN, () => WrappedComponent(DataListScreen));
  Navigation.registerComponent(ADD_DATA_SCREEN, () => WrappedComponent(AddDataScreen));
}

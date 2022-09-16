import React, { FC, useEffect, useState } from 'react';
import {
  DATA_LIST,
  MODAL_CONTAINER_SCREEN,
  ADD_DATA,
  DATA_LIST_SCREEN,
  ADD_DATA_SCREEN,
  NAV_ADD_BTN,
  NAV_BACK_BTN,
  INDICATOR_SCREEN,
} from '../../navigation';
import { Navigation } from 'react-native-navigation';
import { CBQIndicator } from '../../components/indicator';
import DataList from './dataList';
import AddData from './addData';
import { mergeNavigationOption } from '../../utility/utility';
import { useSelector } from 'react-redux';

export const ModalContainerScreen: FC<{}> = () => {
  const [currentScreen, setCurrentScreen] = useState(DATA_LIST_SCREEN);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    const appLaunchedListener =
      Navigation.events().registerNavigationButtonPressedListener(navigationButtonPressed);
    return () => {
      appLaunchedListener.remove();
    };
  });

  useEffect(() => {
    // Showing an indicator while submitting the data through API
    if (data.isLoading) {
      setCurrentScreen(INDICATOR_SCREEN);
    } else if (data.error?.message) {
      setCurrentScreen(ADD_DATA_SCREEN);
      alert(data.error?.message);
    } else {
      // Show Add button on the Nav bar and update the screen title with user list
      mergeNavigationOption(
        Navigation,
        MODAL_CONTAINER_SCREEN,
        DATA_LIST,
        MODAL_CONTAINER_SCREEN,
        false,
        true,
      );
      setCurrentScreen(DATA_LIST_SCREEN);
    }
  }, [data.data, data.isLoading, data.error]);

  /*
   * Handle navigation bar back and add button actions
   */
  const navigationButtonPressed = ({ buttonId }) => {
    switch (buttonId) {
      case ADD_DATA_SCREEN + NAV_BACK_BTN:
        // Show Add button on the Nav bar and update the screen title with user list
        mergeNavigationOption(
          Navigation,
          MODAL_CONTAINER_SCREEN,
          DATA_LIST,
          MODAL_CONTAINER_SCREEN,
          false,
          true,
        );
        // Change the container to show the user details screen
        setCurrentScreen(DATA_LIST_SCREEN);
        break;
      case MODAL_CONTAINER_SCREEN + NAV_ADD_BTN:
        // Show back button on the Nav bar and update the screen title with add user fields
        mergeNavigationOption(
          Navigation,
          MODAL_CONTAINER_SCREEN,
          ADD_DATA,
          ADD_DATA_SCREEN,
          true,
          false,
        );
        // Change the container to add the user details screen
        setCurrentScreen(ADD_DATA_SCREEN);
        break;
      default:
        break;
    }
  };

  const renderBody = (screen: string) => {
    switch (screen) {
      case DATA_LIST_SCREEN:
        return <DataList />;
      case ADD_DATA_SCREEN:
        return <AddData />;
      default:
        return <CBQIndicator />;
    }
  };

  return renderBody(currentScreen);
};

export default ModalContainerScreen;

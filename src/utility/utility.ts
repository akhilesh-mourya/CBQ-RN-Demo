import { NAV_ADD_BTN, NAV_BACK_BTN } from '../navigation';
import { NavigationDelegate } from 'react-native-navigation/lib/dist/src/NavigationDelegate';

export const mergeNavigationOption = (
  Navigation: NavigationDelegate,
  component: string,
  title: string,
  btnId: string,
  isLeft = false,
  isRight = false,
) => {
  Navigation.mergeOptions(component, {
    topBar: {
      title: {
        text: title,
      },
      leftButtons: isLeft
        ? [
            {
              id: btnId + NAV_BACK_BTN,
              icon: require('assets/icons/ic_nav_back.png'),
              color: 'black',
            },
          ]
        : [{ id: '1', text: '' }],
      rightButtons: isRight
        ? [
            {
              id: btnId + NAV_ADD_BTN,
              text: 'Add',
              color: 'blue',
            },
          ]
        : [{ id: '1', text: '' }],
    },
  });
};

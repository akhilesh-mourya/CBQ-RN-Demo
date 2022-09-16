import { Navigation } from 'react-native-navigation';
import { HOME_SCREEN, MORE_SCREEN, NAV_ADD_BTN, NAV_BACK_BTN } from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: '#F7F7F7',
    },
    title: {
      color: 'black',
    },
    backButton: {
      title: '', // Remove previous screen name from back button
      color: 'white',
    },
  },
  statusBar: {
    style: 'light',
  },
  layout: {
    orientation: ['portrait'],
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    textColor: 'gray',
    selectedTextColor: 'blue',
    iconColor: 'gray',
    selectedIconColor: 'blue',
  },
});

export function showModalScreen(component: string, title = '', isLeft = false, isRight = false) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: component,
            name: component,
            options: {
              topBar: {
                title: {
                  text: title,
                },
                leftButtons: isLeft
                  ? [
                      {
                        id: component + NAV_BACK_BTN,
                        icon: require('assets/icons/ic_nav_back.png'),
                        color: 'black',
                      },
                    ]
                  : [{ id: '1', text: '' }],
                rightButtons: isRight
                  ? [
                      {
                        id: component + NAV_ADD_BTN,
                        text: 'Add',
                        color: 'blue',
                      },
                    ]
                  : [{ id: '1', text: '' }],
              },
            },
          },
        },
      ],
    },
  });
}

export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                    options: {
                      topBar: {
                        visible: false,
                      },
                      statusBar: {
                        style: 'dark',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('assets/icons/ic_tab_home.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  text: 'Home',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: MORE_SCREEN,
                    options: {
                      topBar: {
                        visible: false,
                      },
                      statusBar: {
                        style: 'dark',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('assets/icons/ic_tab_menu.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  text: 'More',
                },
              },
            },
          },
        ],
      },
    },
  });
}

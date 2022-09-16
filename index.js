import { Navigation } from 'react-native-navigation';
import { pushTabBasedApp } from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => pushTabBasedApp());

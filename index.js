/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './MainScreen';
import MainNav from './navigators/navi_main';

AppRegistry.registerComponent(appName, () => MainNav);

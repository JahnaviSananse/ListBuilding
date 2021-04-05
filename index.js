/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ListScreen from './ListScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ListScreen);

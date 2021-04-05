/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ListScreen from './src/ListScreen/ListScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ListScreen);

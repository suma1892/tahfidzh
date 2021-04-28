/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import nav from './src/navigations/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

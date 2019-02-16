/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from "./src/services/Navigator"

AppRegistry.registerComponent(appName, () => Navigator);

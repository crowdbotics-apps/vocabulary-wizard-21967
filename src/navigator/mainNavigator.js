import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings161919Navigator from '../features/Settings161919/navigator';
import UserProfile161912Navigator from '../features/UserProfile161912/navigator';
import Settings161911Navigator from '../features/Settings161911/navigator';
import Settings161909Navigator from '../features/Settings161909/navigator';
import SignIn2161907Navigator from '../features/SignIn2161907/navigator';
import Settings161880Navigator from '../features/Settings161880/navigator';
import ArticleList161861Navigator from '../features/ArticleList161861/navigator';
import ArticleList161860Navigator from '../features/ArticleList161860/navigator';
import ArticleList161859Navigator from '../features/ArticleList161859/navigator';
import Settings161825Navigator from '../features/Settings161825/navigator';
import Settings161806Navigator from '../features/Settings161806/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings161919: { screen: Settings161919Navigator },
UserProfile161912: { screen: UserProfile161912Navigator },
Settings161911: { screen: Settings161911Navigator },
Settings161909: { screen: Settings161909Navigator },
SignIn2161907: { screen: SignIn2161907Navigator },
Settings161880: { screen: Settings161880Navigator },
ArticleList161861: { screen: ArticleList161861Navigator },
ArticleList161860: { screen: ArticleList161860Navigator },
ArticleList161859: { screen: ArticleList161859Navigator },
Settings161825: { screen: Settings161825Navigator },
Settings161806: { screen: Settings161806Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

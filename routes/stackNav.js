import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../src/components/screens/Home';
import About from '../src/components/screens/About';


const screens = {
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Welcome'
        }
    },
    AboutScreen: {
        screen: About,
        navigationOptions: {
            title: 'Dashboard',
            // headerStyle: { backgroundColor: '#5AC18D' }
        }
    },


}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#5AC18D' }
    }
});

export default createAppContainer(HomeStack);
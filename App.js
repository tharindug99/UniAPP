import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';
import DrawerNav from './Routes/drawerNav';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );

  
}



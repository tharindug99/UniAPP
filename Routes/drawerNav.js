import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Settings from '../Screens/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    
  return (
    
        <Drawer.Navigator initialRouteName="Home">
            {/* <Drawer.Screen name='Home' component={Home}/> */}
            <Drawer.Screen name='About' component={About}/>
            <Drawer.Screen name='Settings' component={Settings}/>
        </Drawer.Navigator> 
      
    
  )
}

export default DrawerNav;


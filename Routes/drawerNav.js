import React from 'react'
import About from '../Screens/About';
import Settings from '../Screens/Settings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CIS from '../Screens/CIS';
import SE from '../Screens/SE';
import DS from '../Screens/DS';


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    
  return (
    
        <Drawer.Navigator initialRouteName="HomePage">
            {/* <Drawer.Screen name='Home' component={Home}/> */}
            <Drawer.Screen name='HomePage' component={About}/>
            <Drawer.Screen name='Dept of Computing and Information Systems' component={CIS}/>
            <Drawer.Screen name='Dept of Software Engineering' component={SE}/>
            <Drawer.Screen name='Dept of Data Science' component={DS}/>
            <Drawer.Screen name='Settings' component={Settings}/>
        </Drawer.Navigator> 
      
    
  )
}

export default DrawerNav;


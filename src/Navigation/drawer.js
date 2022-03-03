import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabScreen } from './tab';
import { screens } from './routeItems';
import { CustomDrawerContent } from '../Components';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      initialRouteName='DrawerHome'
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={screens.HomeTab}
        component={TabScreen}
        options={{
          title: 'HFilm',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

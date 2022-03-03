import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from '../Contains/Colors';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  FavariteStack: 'FavoriteStack',
  Favarite: 'Favarite',
  SettingStack: 'SettingStack',
  Setting: 'Setting',
  Detail: 'Detail',
  LoginStack: 'LoginStack',
  Login: 'Login',
  Register: 'Register',
  ForgotPassword: 'ForgotPassword',
};

export const routes = [
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'HFilm',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon
        name='home'
        size={30}
        color={focused ? color.errorField : color.textHeaderColor}
      />
    ),
  },
  {
    name: screens.FavariteStack,
    focusedRoute: screens.FavariteStack,
    title: 'Favarite',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon
        name='heart'
        size={30}
        color={focused ? color.errorField : color.textHeaderColor}
      />
    ),
  },
  {
    name: screens.Setting,
    focusedRoute: screens.Setting,
    title: 'Setting',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon
        name='settings'
        size={30}
        color={focused ? color.errorField : color.textHeaderColor}
      />
    ),
  },
];

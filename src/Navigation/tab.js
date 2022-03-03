import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FavoriteStackScreen,
  HomeStackScreen,
  SettingStackScreen,
} from './stack';
import { color } from '../Contains/Colors';
import { routes, screens } from './routeItems';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name); // get the route config object

  if (!item?.showInTab) {
    // hide this tab
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      title: item?.title,
      animationEnabled: false,
      tabBarStyle: styles.tabContainer,
      tabBarActiveTintColor: color.errorField,
      tabBarInactiveTintColor: color.textHeaderColor,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item?.title,
    animationEnabled: false,
    tabBarActiveTintColor: color.errorField,
    tabBarInactiveTintColor: color.textHeaderColor,
  };
};

export const TabScreen = () => {
  return (
    <Tab.Navigator initialRouteName='HomeStack' screenOptions={tabOptions}>
      <Tab.Screen
        name={screens.HomeStack}
        component={HomeStackScreen}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: color.headerColor,
            paddingBottom: 15,
            height: '8%',
          },
        })}
      />
      <Tab.Screen
        name={screens.FavariteStack}
        component={FavoriteStackScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen name={screens.Setting} component={SettingStackScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: color.headerColor,
    paddingBottom: 15,
    height: '8%',
  },
});

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeStack';
  if (routeName === 'LoginStack') {
    return 'none';
  }
  return 'flex';
};

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DetaiMovieScreen,
  MovieScreen,
  LoginSreen,
  ForgotPasswordScreen,
  RegisterScreen,
  SettingScreen,
  FavariteScreen,
} from '../Containers';
import { color } from '../Contains/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';

const HomeStack = createNativeStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='MovieScreen'
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name='Home'
        component={MovieScreen}
        options={({ route, navigation }) => ({
          title: 'HFILM',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: color.headerColor,
          },
          headerTintColor: color.textHeaderColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name='bars' size={30} color={color.textHeaderColor} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Alert.alert('Chuc nang hien chua co')}
            >
              <Icon name='bell' size={30} color={color.textHeaderColor} />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name='Detail'
        component={DetaiMovieScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: color.headerColor,
          },
          headerTintColor: color.textHeaderColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 13,
          },
        })}
      />
      <HomeStack.Screen
        name='LoginStack'
        component={LoginStackScreen}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();
export const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      initialRouteName='Login'
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
    >
      <LoginStack.Screen name='Login' component={LoginSreen} />
      <LoginStack.Screen
        name='ForgotPassword'
        component={ForgotPasswordScreen}
      />
      <LoginStack.Screen name='Register' component={RegisterScreen} />
    </LoginStack.Navigator>
  );
};

const FavariteStack = createNativeStackNavigator();
export const FavoriteStackScreen = () => {
  return (
    <FavariteStack.Navigator
      initialRouteName='Favarite'
      screenOptions={{
        animation: 'none',
      }}
    >
      <FavariteStack.Screen
        name='Favarite'
        component={FavariteScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: color.headerColor,
          },
          headerTintColor: color.textHeaderColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name='bars' size={30} color={color.textHeaderColor} />
            </TouchableOpacity>
          ),
        })}
      />
    </FavariteStack.Navigator>
  );
};

const SettingStack = createNativeStackNavigator();
export const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator
      initialRouteName='Setting'
      screenOptions={{
        animation: 'none',
      }}
    >
      <SettingStack.Screen
        name='Setting'
        component={SettingScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: color.headerColor,
          },
          headerTintColor: color.textHeaderColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name='bars' size={30} color={color.textHeaderColor} />
            </TouchableOpacity>
          ),
        })}
      />
    </SettingStack.Navigator>
  );
};

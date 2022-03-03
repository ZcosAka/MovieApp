import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { color } from '../../Contains/Colors';
import { routes, screens } from '../../Navigation/routeItems';
import { IMAGE } from '../../Contains/images';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEdit from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../redux/reducers/loginSlice';
import { Loader } from '..';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name; // get focused route name

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);

  const dataUser = useSelector((state) => state.login.data);

  const isLogin = useSelector((state) => state.login.isLoggedIn);

  const [userToken, setUserToken] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const { email, full_name } = dataUser;

  const handleLogin = () => {
    navigation.navigate('LoginStack');
  };

  const handleLogout = async () => {
    dispatch(fetchLogout());
  };

  const handleSubmit = () => {
    if (isLogin && userToken != null) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  const checkToken = async () => {
    const token = await getUser();
    if (token != null) {
      setUserToken(token);
      setUserEmail(email);
      setUserFullName(full_name);
    } else {
      setUserEmail('');
      setUserFullName('');
    }
  };

  useEffect(() => {
    if (!isLogin) {
      checkToken();
    }
  }, [isLogin, userEmail, userFullName]);

  useEffect(() => {
    checkToken();
    if (isLogin && userToken != null) {
      setUserEmail(email);
      setUserFullName(full_name);
    } else {
      setUserEmail('');
      setUserFullName('');
    }
  }, [isLogin, userToken]);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: color.headerColor }}
      >
        <ImageBackground
          source={IMAGE.BACKGROUND}
          style={{
            padding: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Loader loading={loading} />
          {isLogin && userToken != null ? (
            <>
              <Icon
                name='user-circle'
                size={80}
                color={color.textHeaderColor}
                style={{ marginBottom: 10 }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconEmail
                  name='gmail'
                  size={20}
                  color={color.textHeaderColor}
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{ color: color.textHeaderColor, fontWeight: '300' }}
                >
                  {userEmail}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{ color: color.textHeaderColor, fontWeight: '300' }}
                >
                  {userFullName}
                </Text>
                <IconEdit name='edit' size={20} color={color.textHeaderColor} />
              </View>
            </>
          ) : null}
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: color.textHeaderColor,
            paddingTop: 10,
          }}
        >
          {routes
            .filter((route) => route.showInDrawer)
            .map((route) => {
              const focusedRouteItem = routes.find(
                (r) => r?.name === currentRouteName
              ); // get route item config object
              const focused = focusedRouteItem
                ? route?.name === focusedRouteItem?.focusedRoute
                : route?.name === screens.HomeStack;
              return (
                <DrawerItem
                  key={route?.name}
                  label={() => (
                    <Text
                      style={
                        focused ? styles.drawerLabelFocused : styles.drawerLabel
                      }
                    >
                      {route?.title}
                    </Text>
                  )}
                  onPress={() => props.navigation.navigate(route?.name)}
                  style={[
                    styles.drawerItem,
                    focused ? styles.drawerItemFocused : null,
                  ]}
                />
              );
            })}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          height: '10%',
          borderTopColor: color.viewsColor,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            marginTop: 0,
            marginBottom: 0,
          }}
          onPress={handleSubmit}
        >
          <IconEmail
            name={isLogin && userToken != null ? 'logout' : 'login'}
            size={35}
            color={'black'}
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontWeight: 'bold', color: 'black' }}>
            {isLogin && userToken != null ? 'Log out' : 'Log in'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: color.textHeaderColor,
    fontWeight: 'bold',
  },
  drawerItem: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: color.headerColor,
  },
});

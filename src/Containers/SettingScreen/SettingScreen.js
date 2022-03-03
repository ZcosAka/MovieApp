import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import { color } from '../../Contains/Colors';
import { IMAGE } from '../../Contains/images';
import { ButtonCustom as Button, Loader } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogout } from '../../redux/reducers/loginSlice';
import { getUser, removeUser } from '../../local/saveData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingScreen = () => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  // const dataUser = useSelector((state) => state.login.data);

  // const isLogin = useSelector((state) => state.login.isLoggedIn);

  // const isLoading = useSelector((state) => state.loading.loading);

  // const [userToken, setUserToken] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  // const [userFullName, setUserFullName] = useState('');
  // const { email, full_name } = dataUser;

  // const handleLogin = async () => {
  //   navigation.navigate('Login');
  // };

  // const handleLogout = async () => {
  //   dispatch(fetchLogout());
  // };

  // const checkToken = async () => {
  //   const token = await getUser();
  //   if (token != null) {
  //     setUserToken(token);
  //     setUserEmail(email);
  //     setUserFullName(full_name);
  //   } else {
  //     setUserEmail('');
  //     setUserFullName('');
  //   }
  // };

  // useEffect(() => {
  //   if (!isLogin) {
  //     checkToken();
  //   }
  // }, [isLogin, userEmail, userFullName]);

  // useEffect(() => {
  //   checkToken();
  //   if (isLogin && userToken != null) {
  //     console.log('login', isLogin, userToken);
  //     setUserEmail(email);
  //     setUserFullName(full_name);
  //   } else {
  //     console.log('logout', isLogin, userToken);
  //     setUserEmail('');
  //     setUserFullName('');
  //   }
  // }, [isLogin, userToken]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        animated={true}
        backgroundColor={color.headerColor}
        hidden={false}
      />
      <ImageBackground
        source={IMAGE.BACKGROUND}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        {/* <Loader loading={isLoading} />
        <View
          style={{
            flex: 1,
            margin: 10,
          }}
        >
          {isLogin && userToken != null ? (
            <View
              style={{
                backgroundColor: color.textHeaderColor,
                borderRadius: 10,
                opacity: 0.9,
                shadowColor: 'black',
                shadowOffset: {
                  height: 1,
                  width: 1,
                },
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Icon
                size={100}
                name={'user'}
                color={color.facebook}
                style={{ margin: 10 }}
              />
              <View
                style={{
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: color.facebook,
                  }}
                >
                  Email:{userEmail}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: color.facebook,
                  }}
                >
                  Name:{userFullName}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <Button
          text={isLogin && userToken != null ? 'Log out' : 'Log in'}
          onPress={isLogin && userToken != null ? handleLogout : handleLogin}
          styleButon={styles.styleButon}
          styleTextButton={styles.styleTextButton}
        /> */}
      </ImageBackground>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.headerColor,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  styleImage: {
    height: 16,
    width: 16,
    resizeMode: 'cover',
    marginRight: 5,
    tintColor: color.textHeaderColor,
  },
  styleButon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: '95%',
    opacity: 0.9,
    borderRadius: 10,
    backgroundColor: color.facebook,
    marginBottom: 20,
  },
  styleTextButton: {
    color: color.textHeaderColor,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

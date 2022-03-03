import React, { useState, useEffect, createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../local/saveData';
import { fetchLoginSuccess } from '../redux/reducers/loginSlice';
import DrawerNavigator from './drawer';

const AppNavigation = () => {
  const navigationRef = createRef();
  const nav = () => navigationRef.current;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.login.data);

  const isLogin = useSelector((state) => state.login.logging);

  const [userToken, setUserToken] = useState('');

  const [dataUser, setdataUser] = useState({});

  const checkUser = async () => {
    const token = await getUser();
    if (token != null) {
      setUserToken(token);
      setdataUser(user);
    }
  };

  useEffect(() => {
    checkUser();
    if (isLogin === false) {
      dispatch(fetchLoginSuccess(dataUser));
    }
  }, [isLogin, dispatch, userToken]);

  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator nav={nav} />
    </NavigationContainer>
  );
};

export default AppNavigation;

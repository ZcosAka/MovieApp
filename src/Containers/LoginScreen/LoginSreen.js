import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {
  InputCustom as Input,
  ButtonCustom as Button,
  Loader,
} from '../../Components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { color } from '../../Contains/Colors';
import { styles } from './style/LoginScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { validationSchema } from '../../Contains/validateSchema';
import { IMAGE } from '../../Contains/images';
import { fetchLogin, fetchLoginFailed } from '../../redux/reducers/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { getUser } from '../../local/saveData';

const LoginSreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading.loading);
  const userData = useSelector((state) => state.login.data);
  const isLogin = useSelector((state) => state.login.logging);

  const { id, full_name, email, access_token } = userData;

  const [userId, setUserId] = useState('');
  const [len, setLen] = useState(0);
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [useToken, setUserToken] = useState('');

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    validationSchema: () => validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = () => {
    try {
      dispatch(fetchLogin({ email: values.email, password: values.password }));
      if (!isLogin) {
        setTimeout(() => {
          navigation.goBack();
        }, 200);
      }
    } catch (error) {
      dispatch(fetchLoginFailed(error.message));
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground source={IMAGE.BACKGROUND} style={styles.imageBackground}>
        <Loader loading={loading} />
        <View style={styles.loginWrapper}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flex: 2,
            }}
          >
            {touched.email && errors.email && (
              <Text
                style={{
                  color: color.errorField,
                  fontWeight: '500',
                  marginLeft: 40,
                  marginTop: 10,
                }}
              >
                {errors.email}
              </Text>
            )}
            <Input
              onBlur={handleBlur('email')}
              value={values.email}
              onChangeText={handleChange('email')}
              styleView={styles.styleInputView}
              placeholder={'Email'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              returnKeyType={'next'}
              blurOnSubmit={false}
            />
            {touched.password && errors.password && (
              <Text
                style={{
                  color: color.errorField,
                  fontWeight: '500',
                  marginLeft: 40,
                  marginTop: 10,
                }}
              >
                {errors.password}
              </Text>
            )}
            <Input
              onBlur={handleBlur('password')}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder={'Mật khẩu'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              secureTextEntry={true}
              returnKeyType={'go'}
              blurOnSubmit={false}
            />
            <Button
              disabled={isValid}
              onPress={handleLogin}
              styleTextButton={styles.styleTextButton}
              text={'Đăng nhập'}
              styleButon={
                !isValid ? styles.styleButton : styles.styleButtonIsValid
              }
            />
            <Button
              onPress={handleForgotPassword}
              styleTextButton={styles.styleTextButton}
              text={'Quên mật khẩu?'}
              styleButon={{ ...styles.styleButton, ...styles.styleButonForgot }}
            />
            <Button
              styleImage={styles.imageButtonFB}
              source={IMAGE.ICON_FB}
              styleTextButton={styles.styleTextButton}
              text={'Đăng nhập với Facebook'}
              styleButon={{ ...styles.styleButton, ...styles.styleButtonFB }}
            />
            <Button
              styleImage={styles.imageButtonGG}
              source={IMAGE.ICON_GG}
              styleTextButton={{ ...styles.styleTextButton, ...styles.textGG }}
              text={'Đăng nhập với Google'}
              styleButon={{ ...styles.styleButton, ...styles.styleButtonGG }}
            />
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.questionWrapper}>
          <Button
            onPress={() => navigation.goBack()}
            styleImage={styles.imageClose}
            source={IMAGE.ICON_CLOSE}
            styleButon={styles.imageButton}
          />
          <Text style={styles.textQuestion}>
            Bạn chưa có tài khoản?
            <Text style={styles.textQuestion2} onPress={handleRegister}>
              {' ĐĂNG KÝ'}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableNativeFeedback>
  );
};

export default LoginSreen;

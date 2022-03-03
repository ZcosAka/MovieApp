import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import { InputCustom as Input, ButtonCustom as Button } from '../../Components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { color } from '../../Contains/Colors';
import { styles } from './style/RegisterScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { validationSchema } from '../../Contains/validateSchema';
import { IMAGE } from '../../Contains/images';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/reducers/registerSlice';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: () => validationSchema,
      initialValues: {
        fullName: '',
        email: '',
        password: '',
        confirPassword: '',
      },
      onSubmit: () => handleRegister(),
    });

  const handleRegister = () => {
    const goBack = () => {
      navigation.goBack();
    };
    dispatch(
      fetchRegister({
        full_name: values.fullName,
        email: values.email,
        password: values.password,
        confirPassword: values.confirPassword,
      })
    );
    setTimeout(() => {
      goBack();
    }, 100);
  };

  return (
    <TouchableNativeFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground source={IMAGE.BACKGROUND} style={styles.imageBackground}>
        <View style={styles.loginWrapper}>
          <Text style={styles.textLogin}>Đăng ký</Text>
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
            {touched.fullName && errors.fullName && (
              <Text
                style={{
                  color: color.errorField,
                  fontWeight: '500',
                  marginLeft: 40,
                  marginTop: 10,
                }}
              >
                {errors.fullName}
              </Text>
            )}
            <Input
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              styleView={styles.styleInputView}
              placeholder={'Họ Tên'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              returnKeyType={'next'}
              blurOnSubmit={false}
              // onSubmitEditing={() => passwordRef.current?.focus()}
              // ref={emailRef}
            />
            {touched.email && errors.email && (
              <Text
                style={{
                  marginLeft: 40,
                  color: color.errorField,
                  fontWeight: '500',
                }}
              >
                {errors.email}
              </Text>
            )}
            <Input
              onBlur={handleBlur('email')}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={'Email'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              // onSubmitEditing={() => console.log('click')}
              returnKeyType={'go'}
              blurOnSubmit={false}
              // ref={passwordRef}
            />
            {touched.password && errors.password && (
              <Text
                style={{
                  marginLeft: 40,
                  color: color.errorField,
                  fontWeight: '500',
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
              // onSubmitEditing={handleSubmit}
              returnKeyType={'go'}
              blurOnSubmit={false}
              // ref={passwordRef}
            />
            {touched.confirPassword && errors.confirPassword && (
              <Text
                style={{
                  marginLeft: 40,
                  color: color.errorField,
                  fontWeight: '500',
                }}
              >
                {errors.confirPassword}
              </Text>
            )}
            <Input
              onBlur={handleBlur('confirPassword')}
              value={values.confirPassword}
              onChangeText={handleChange('confirPassword')}
              placeholder={'Xác nhận mật khẩu'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              secureTextEntry={true}
              onSubmitEditing={handleSubmit}
              returnKeyType={'go'}
              blurOnSubmit={false}
              // ref={passwordRef}
            />
            <Button
              onPress={handleSubmit}
              styleTextButton={styles.styleTextButton}
              text={'Đăng ký'}
              styleButon={styles.styleButton}
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
          <View>
            <Text style={styles.textQuestion}>
              {'Bằng việc chọn vào nút Đăng ký, bạn đã đồng ý với '}
              <Text style={styles.textQuestion2}>{'Điều khoản sử dụng'}</Text>
              <Text>{' Và '}</Text>
              <Text style={styles.textQuestion2}>{'Quy trình bảo mật '}</Text>
              <Text>{'của HFilm'}</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableNativeFeedback>
  );
};

export default RegisterScreen;

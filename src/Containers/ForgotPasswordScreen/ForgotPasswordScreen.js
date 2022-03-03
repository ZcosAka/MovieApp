import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { styles } from './style/ForgotPasswordScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InputCustom as Input, ButtonCustom as Button } from '../../Components';
import { color } from '../../Contains/Colors';
import { useFormik } from 'formik';
import { validationSchema } from '../../Contains/validateSchema';
import { ForgotPasswordService } from '../../Services/Api/ForgotPassword/forgotPassword';
import { IMAGE } from '../../Contains/images';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
  } = useFormik({
    validationSchema: () => validationSchema,
    initialValues: {
      email: '',
    },
  });

  const handleForgotPassword = async () => {
    try {
      const res = await ForgotPasswordService.getForgotPassword(values.email);
      console.log(res);
      if (res.status === 200 && res.data.error === true) {
        Alert.alert(res.data.message);
      } else {
        Alert.alert(res.data);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground source={IMAGE.BACKGROUND} style={styles.imageBackground}>
        <View style={styles.loginWrapper}>
          <Text style={styles.textLogin}>Quên mật khẩu</Text>
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={{ height: '20%' }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.title}>
              Hãy nhập email bạn đã dùng để tạo tài khoản
            </Text>
            {touched.email && errors.email && (
              <Text
                style={{
                  ...styles.title,
                  color: color.errorField,
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
              placeholder={'Nhập Email'}
              styleInput={styles.input}
              placeholderTextColor={color.textHeaderColor}
              returnKeyType={'go'}
              onSubmitEditing={handleForgotPassword}
            />
            <Button
              onPress={handleForgotPassword}
              styleTextButton={styles.styleTextButton}
              text={'Gửi mật khẩu'}
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
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

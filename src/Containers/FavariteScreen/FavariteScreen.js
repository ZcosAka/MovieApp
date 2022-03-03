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
const FavariteScreen = () => {
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
      ></ImageBackground>
    </View>
  );
};

export default FavariteScreen;
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

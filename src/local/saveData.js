import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoriteLocal = async (id, isLike) => {
  try {
    const item = { id, isLike };
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(`@storage_Like`, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getFavariteLocal = async (callBack) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@storage_Like`);
    const value = JSON.parse(jsonValue);
    callBack(value);
  } catch (e) {
    console.log(e);
  }
};

export const saveUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_User', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const removeUser = async () => {
  try {
    const jsonValue = await AsyncStorage.removeItem('@storage_User');
    return jsonValue;
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_User');
    return jsonValue;
  } catch (e) {
    console.log(e);
  }
};

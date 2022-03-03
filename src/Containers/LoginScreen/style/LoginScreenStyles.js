import { StyleSheet } from 'react-native';
import { color } from '../../../Contains/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  loginWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: color.textHeaderColor,
  },
  textLogin: {
    color: color.textHeaderColor,
    fontSize: 26,
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 0.5,
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: color.textHeaderColor,
    color: color.textHeaderColor,
  },
  styleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: color.headerColor,
    borderRadius: 5,
  },
  styleButtonIsValid: {
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: color.textHeaderColor,
    borderRadius: 5,
  },
  styleButonForgot: {
    opacity: 0.3,
    backgroundColor: color.textHeaderColor,
  },
  styleTextButton: {
    fontSize: 15,
    color: color.textHeaderColor,
    fontWeight: 'bold',
  },
  textGG: {
    color: color.headerColor,
  },
  styleButtonFB: {
    opacity: 0.9,
    backgroundColor: color.facebook,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  styleButtonGG: {
    backgroundColor: color.textHeaderColor,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageButtonFB: {
    tintColor: color.textHeaderColor,
  },
  imageButtonGG: {
    marginRight: 15,
  },
  imageClose: {
    height: 48,
    width: 48,
  },
  imageButton: {
    marginBottom: 0,
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: color.textHeaderColor,
  },
  textQuestion: {
    color: color.textHeaderColor,
    fontSize: 15,
    marginBottom: 15,
  },
  textQuestion2: {
    fontWeight: 'bold',
    color: color.headerColor,
    textDecorationLine: 'underline',
  },
});

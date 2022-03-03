import {StyleSheet} from 'react-native';
import {color} from '../../../Contains/Colors';

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
    height: 60,
    backgroundColor: color.headerColor,
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
  imageClose: {
    height: 48,
    width: 48,
  },
  imageButton: {
    marginTop: 20,
  },
  questionWrapper: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: color.textHeaderColor,
  },
  textQuestion: {
    margin: 10,
    textAlign: 'center',
    fontWeight: '300',
    color: color.textHeaderColor,
  },
  textQuestion2: {
    textDecorationLine:'underline',
    color: color.headerColor,
    fontWeight: 'bold',
  },
});

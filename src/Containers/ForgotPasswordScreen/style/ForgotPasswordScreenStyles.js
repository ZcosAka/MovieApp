import {StyleSheet} from 'react-native';
import {color} from '../../../Contains/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    height:'100%',
    width:'100%'
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

  styleButton: {
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
    height: 60,
    backgroundColor: color.headerColor,
    borderRadius: 5,
  },
  title: {
    marginLeft: 40,
    marginRight: 40,
    color: color.textHeaderColor,
    marginTop: 10,
    fontWeight: '300',
  },
  input: {
    borderBottomWidth: 0.5,
    margin: 40,
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: color.textHeaderColor,
    color: color.textHeaderColor,
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: color.textHeaderColor,
  },
});

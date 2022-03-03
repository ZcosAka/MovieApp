import {StyleSheet} from 'react-native';
import {color} from '../../../Contains/Colors';

export const styles = StyleSheet.create({
  renderContainer: {
    flex: 1,
  },
  renderWrapper: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: color.textHeaderColor,
  },
  renderContent: {
    flex: 1,
    margin: 5,
    marginLeft: 10,
  },
  imageRender: {
    marginTop: 10,
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonLikeWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSeeWrapper: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: color.headerColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
  },
  title1: {
    color: color.headerColor,
    fontSize: 13,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: 5,
    color: color.textHeaderColor,
    fontSize: 13,
    fontWeight: 'bold',
  },
  textView: {
    color: color.viewsColor,
    fontStyle: 'italic',
    marginTop: 5,
    fontSize: 12,
  },
  textDescription: {
    color: color.textHeaderColor,
    fontSize: 13,
    fontWeight: '300',
    marginTop: 20,
  },
  icon: {
    height: 22,
    width: 25,
    resizeMode: 'cover',
  },
  textLike: {
    color: color.textHeaderColor,
    fontSize: 15,
    marginLeft: 5,
  },
  textLikeColor:{
    color:color.headerColor
  },
  textSeeBtn: {
    color: color.textHeaderColor,
    fontSize: 15,
  },
});

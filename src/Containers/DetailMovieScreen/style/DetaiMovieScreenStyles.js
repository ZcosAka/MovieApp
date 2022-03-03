import {StyleSheet} from 'react-native';
import {color} from '../../../Contains/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.headerColor
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  contentWrapper: {
    flex: 2,
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: color.textHeaderColor,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    flex: 0.7,
    resizeMode: 'cover',
  },
  textTitle: {
    color: color.textHeaderColor,
    fontWeight: '600',
  },
  textViews: {
    color: color.headerColor,
    fontStyle: 'italic',
  },
  textWrapper: {
    fontWeight: '200',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  descriptionWrapper: {
    marginBottom: 20,
    marginTop:20,
  },
  seeMoreWrapper: {
    borderBottomWidth: 0.5,
    alignSelf: 'flex-end',
    borderBottomColor: color.headerColor,
  },
  seeMore:{
    color:color.headerColor,
    fontStyle:'italic',
    fontWeight:'200'
  },
  trailerWrapper: {
    flex: 1,
    margin:10,
  },
  seeTrailerWrapper:{
    fontWeight:'bold',
    fontSize:18,
    color:color.headerColor
  }
});

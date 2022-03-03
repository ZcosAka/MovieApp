import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { styles } from './style/CardFilmStyles';
import { useNavigation } from '@react-navigation/native';
import {
  saveFavoriteLocal,
  getFavariteLocal,
  getUser,
} from '../../local/saveData';
import { IMAGE } from '../../Contains/images';
import { useSelector } from 'react-redux';

const CardFilm = ({
  image,
  title,
  views,
  description,
  actor,
  director,
  manufacturer,
  link,
  duration,
  category,
  idFilm,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);

  const userData = useSelector((state) => state.login.data);
  const { id } = userData;

  const navigation = useNavigation();

  const sliceTitle = (title) => {
    if (title.indexOf('/') === -1) {
      return title.split('/')[0];
    } else {
      return title.split('/ ')[1];
    }
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleDetail = async () => {
    if ((await getUser()) != null) {
      navigation.push('Detail', {
        title: title.split('/')[0].trim(),
        actor,
        director,
        manufacturer,
        description,
        link,
        image,
        id: id,
        duration,
        views: count,
        category,
      });
    } else {
      navigation.navigate('LoginStack');
    }
  };

  const saveFavarite = async (id, isLike) => {
    await saveFavoriteLocal(id, isLike);
  };

  const getFavarite = async (id) => {
    await getFavariteLocal((value) => {
      if (value.id === id) {
        setIsLike(value.isLike);
      }
    });
  };

  useEffect(() => {
    setCount(views + 1);
  }, [count]);

  useEffect(() => {
    saveFavarite(id, isLike);
  }, [isLike]);

  useEffect(() => {
    getFavarite(id);
  }, [id]);

  return (
    <View style={styles.renderContainer}>
      <View style={styles.renderWrapper}>
        <Image source={{ uri: image }} style={styles.imageRender} />
        <View style={styles.renderContent}>
          <View style={styles.renderContentWrapper}>
            <Text style={styles.title1}>{title.split('/')[0]}</Text>
            <Text style={styles.title2}>{sliceTitle(title)}</Text>
            <Text style={styles.textView}>Lượt xem:{count}</Text>
            <Text style={styles.textDescription} numberOfLines={5}>
              {description}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.buttonLikeWrapper}
              onPress={handleLike}
            >
              <Image
                source={!isLike ? IMAGE.ICON_LIKE : IMAGE.ICON_LIKE_ORANGE}
                style={styles.icon}
              />
              <Text
                style={
                  !isLike
                    ? styles.textLike
                    : { ...styles.textLike, ...styles.textLikeColor }
                }
              >
                {!isLike ? 'Thích' : 'Đã thích'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSeeWrapper}
              onPress={handleDetail}
            >
              <Text style={styles.textSeeBtn}>Xem phim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardFilm;

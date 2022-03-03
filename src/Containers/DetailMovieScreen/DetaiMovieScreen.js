import React, { useCallback, useState, useEffect } from 'react';
import {
  ImageBackground,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { color } from '../../Contains/Colors';
import { styles } from './style/DetaiMovieScreenStyles';
import YoutubePlayer from 'react-native-youtube-iframe';
import { getFavariteLocal } from '../../local/saveData';
import { IMAGE } from '../../Contains/images';
import { useSelector } from 'react-redux';

const DetaiMovieScreen = ({ route }) => {
  const {
    title,
    actor,
    director,
    manufacturer,
    description,
    link,
    image,
    id,
    duration,
    views,
    category,
  } = route.params;

  const [playing, setPlaying] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [isLike, setIsLike] = useState(false);
  // const [userId, setUserId] = useState('');

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const getFavarit = async (id) => {
    await getFavariteLocal((value) => {
      if (value.id === id) {
        setIsLike(value.isLike);
      }
    });
  };

  useEffect(() => {
    getFavarit(id);
  }, [id]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        animated={true}
        backgroundColor={color.headerColor}
        hidden={false}
      />
      <ScrollView>
        <ImageBackground
          source={IMAGE.BACKGROUND}
          resizeMode='cover'
          style={styles.backgroundImage}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
              <View style={styles.titleWrapper}>
                <Text style={styles.textTitle}>{title.split('/')[0]}</Text>
                <Text style={styles.textViews}>Lượt xem: {views}</Text>
                <Text style={[styles.textTitle, { marginTop: 10 }]}>
                  Genres: <Text style={styles.textWrapper}>{category}</Text>
                </Text>
                <Text style={styles.textTitle}>
                  Actor: <Text style={styles.textWrapper}>{actor}</Text>
                </Text>
                <Text style={styles.textTitle}>
                  Director: <Text style={styles.textWrapper}>{director}</Text>
                </Text>
                <Text style={styles.textTitle}>
                  Manufacturer:{' '}
                  <Text style={styles.textWrapper}>{manufacturer}</Text>
                </Text>
                <Text style={styles.textTitle}>
                  Thời lượng phim:{' '}
                  <Text style={styles.textWrapper}>{duration} minute</Text>
                </Text>
                {/* <TouchableOpacity
                  style={styles.btnWrapper}
                  onPress={handleIsLike}> */}
                <View style={styles.btnWrapper}>
                  <Image
                    source={!isLike ? IMAGE.ICON_LIKE : IMAGE.ICON_LIKE_ORANGE}
                  />
                  <Text
                    style={{
                      color: '#FFF',
                      fontWeight: '200',
                      margin: 10,
                      marginLeft: 5,
                    }}
                  >
                    {!isLike ? 'Thích' : 'Đã thích'}
                  </Text>
                </View>
                {/* </TouchableOpacity> */}
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text
                style={[styles.textTitle, styles.textWrapper]}
                numberOfLines={!seeMore ? 3 : 100}
              >
                {description}
              </Text>
              <TouchableOpacity
                style={styles.seeMoreWrapper}
                onPress={handleSeeMore}
              >
                <Text style={styles.seeMore}>
                  {!seeMore ? 'Xem thêm' : 'Thu gọn'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.trailerWrapper}>
            <Text style={styles.seeTrailerWrapper}>XEM TRAILER</Text>
            <View style={{ flex: 1, marginTop: 10 }}>
              <YoutubePlayer
                height={300}
                play={!playing}
                videoId={link.split('?v=')[1]}
                onChangeState={onStateChange}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default DetaiMovieScreen;

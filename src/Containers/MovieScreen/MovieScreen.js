import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { color } from '../../Contains/Colors';
import { CardFilm } from '../../Components';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../../redux/reducers/movieSlice';
import { IMAGE } from '../../Contains/images';

const MovieScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getMovieList = useSelector((state) => state.movies.movieList);
  const getPaging = useSelector((state) => state.movies.paging);
  const { total_pages } = getPaging;

  const isLoading = useSelector((state) => state.movies.loading);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRefeshing, setRefeshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [per_page, setPerPage] = useState(3);
  const [totalPage, setTotalPage] = useState(total_pages);

  useEffect(() => {
    dispatch(fetchMovie({ currentPage, per_page }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setLoading(true);
    if (!loading) {
      setData(getMovieList);
    } else {
      setData((prev) => prev.concat(getMovieList));
    }
    return () => {
      setLoading(false);
      setRefeshing(false);
    };
  }, [getMovieList]);

  const onEndReached = () => {
    if (currentPage > totalPage) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onRefresh = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage > totalPage) {
      setCurrentPage(1);
    }
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color={color.headerColor} />
      </View>
    ) : null;
  };

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
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => item.id.toString() + index.toString()}
          renderItem={({ item }) => (
            <CardFilm
              image={item.image}
              title={item.title}
              description={item.description}
              views={item.views}
              actor={item.actor}
              idFilm={item.id}
              link={item.link}
              category={item.category}
              manufacturer={item.manufacturer}
              duration={item.duration}
              director={item.director}
            />
          )}
          refreshing={isRefeshing}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      </ImageBackground>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.headerColor,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  styleImage: {
    height: 16,
    width: 16,
    resizeMode: 'cover',
    marginRight: 5,
    tintColor: color.textHeaderColor,
  },
  styleButon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleTextButton: {
    color: color.textHeaderColor,
    fontWeight: 'bold',
  },
});

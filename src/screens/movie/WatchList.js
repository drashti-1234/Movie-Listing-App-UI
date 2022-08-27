import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import BookMarkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const bookmarkcheckIcon = (
  <BookMarkIcon name="bookmark-check" size={35} color="#4FCCA3" />
);
export const bookmarkIcon = (
  <BookMarkIcon name="bookmark" size={35} color="white" />
);
const DATA = [
  {
    title: 'Avangers End Game',
    ReleaseDate: '2019-08-03',
    AverageRating: '9.2',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    icon: bookmarkcheckIcon,
  },

  {
    title: 'Spiderman No Way Home',
    ReleaseDate: '2021-12-17',
    AverageRating: '9.5',
    image: 'https://pbs.twimg.com/media/FEQCEamUcAEnGo-?format=jpg&name=small',
    icon: bookmarkIcon,
  },
  {
    title: 'Avangers End Game',
    ReleaseDate: '2019-08-03',
    AverageRating: '9.2',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    icon: bookmarkcheckIcon,
  },
  {
    title: 'Spiderman No Way Home',
    ReleaseDate: '2021-12-17',
    AverageRating: '9.5',
    image: 'https://pbs.twimg.com/media/FEQCEamUcAEnGo-?format=jpg&name=small',
    icon: bookmarkIcon,
  },
];
const Item = ({title, ReleaseDate, AverageRating, image, icon}) => (
  <View>
    <View style={styles.item}>
      <View>
        <Image
          style={{
            height: 130,
            width: 100,
            borderRadius: 30,
            marginHorizontal: 10,
          }}
          source={{uri: image}}
        />
      </View>

      <View>
        <Text style={styles.text}>Title:</Text>
        <Text style={styles.detail}> {title}</Text>

        <Text style={styles.text}>Release Date: </Text>
        <Text style={styles.detail}> {ReleaseDate}</Text>

        <Text style={styles.text}>Average Rating: </Text>
        <Text style={styles.detail}> {AverageRating}</Text>
        <View style={{marginHorizontal: 180, marginTop: -130}}>
          <Text>{icon}</Text>
        </View>
        <View style={{marginHorizontal: 150, marginTop: -75}}>
          <Text style={{color: '#4FCCA3'}}>Read More</Text>
        </View>
      </View>
    </View>
  </View>
);
const WatchList = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      ReleaseDate={item.ReleaseDate}
      AverageRating={item.AverageRating}
      image={item.image}
      icon={item.icon}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Movies App</Text>
        <Text style={styles.bottomText}>Your Watch List</Text>
      </View>
      <SafeAreaView style={styles.itemContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MovieDetail')}>
            <Ionicons name="arrow-back" size={20} color="white" />

            <Text
              style={{
                color: 'white',
                marginHorizontal: 10,
                fontWeight: '600',
                fontSize: 16,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#152238',
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    fontSize: 13,
    color: 'white',
    marginHorizontal: 10,
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 105,
    height: 50,
    marginHorizontal: 280,
    marginTop: -60,
    borderRadius: 30,
    backgroundColor: '#3A3F47',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  detail: {
    fontSize: 13,
    color: 'white',
    padding: 5,
    marginHorizontal: 5,
    fontWeight: '400',
  },
  title: {
    marginTop: 50,
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 36,
    color: '#ffffff',
    marginHorizontal: 25,
    fontWeight: '700',
  },
  bottomText: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 18,
    color: '#ffffff',
    marginHorizontal: 29,
    fontWeight: '700',
  },
});

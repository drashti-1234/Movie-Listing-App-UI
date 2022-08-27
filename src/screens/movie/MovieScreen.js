import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import BookMarkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    icon: bookmarkcheckIcon,
  },
  {
    title: 'Spiderman No Way Home',
    ReleaseDate: '2021-12-17',
    AverageRating: '9.5',
  },
];

const Item = ({title, AvangerRating, ReleaseDate, icon}) => (
  <View style={styles.item}>
    <Text style={styles.titleone}>Title: {title}</Text>
    <Text style={styles.titleone}>Release Date:{ReleaseDate}</Text>
    <Text style={styles.titleone}>Average Rating: {AvangerRating}</Text>
  </View>
);
const MovieScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      AvangerRating={item.AverageRating}
      ReleaseDate={item.ReleaseDate}
      icon={item.icon}
    />
  );

  const [isActive, setIsActive] = useState(true);
  const [btn, setBtn] = useState(false);
  const [btnactive, setbtnactive] = useState(false);
  const [lastBtn, setlastBtn] = useState(false);

  const handleClick = () => {
    setBtn(false);
    setbtnactive(false);
    setlastBtn(false);
    setIsActive(current => !current);
  };
  const handlebtn = () => {
    setbtnactive(false);
    setBtn(current => !current);
    setIsActive(false);
    setlastBtn(false);
  };
  const handlebtnActive = () => {
    setBtn(false);
    setbtnactive(current => !current);
    setIsActive(false);
    setlastBtn(false);
  };
  const handlelastBtn = () => {
    setBtn(false);
    setlastBtn(current => !current);
    setIsActive(false);
    setbtnactive(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Movies App</Text>
        <Text style={styles.bottomText}>Find your movies</Text>
        <Text style={styles.categories}>Categories</Text>
      </View>
      <View style={{marginTop: 20}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={isActive ? styles.button : styles.Availability}
            onPress={handleClick}>
            <Text style={{color: isActive ? 'black' : 'white'}}>Top Rated</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btn ? styles.button : styles.Availability}
            onPress={handlebtn}>
            <Text style={{color: btn ? 'black' : 'white'}}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btnactive ? styles.button : styles.Availability}
            onPress={handlebtnActive}>
            <Text style={{color: btnactive ? 'black' : 'white'}}>Action</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={lastBtn ? styles.button : styles.Availability}
            onPress={handlelastBtn}>
            <Text style={{color: lastBtn ? 'black' : 'white'}}>Action</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View>
        <Image
          style={{marginTop: -300, marginHorizontal: 10}}
          source={require('../../../assets/images/Rectangle.png')}
        />
      </View>

      <View>
        <Image
          style={{marginTop: -140, marginHorizontal: 10}}
          source={require('../../../assets/images/spiderman.png')}
        />
      </View>
      <View style={{position: 'absolute', marginTop: 300, marginLeft: 340}}>
        <BookMarkIcon name="bookmark-check" size={35} color="#4FCCA3" />
        <BookMarkIcon name="star" size={35} color="#4FCCA3" />
        <Text
          style={{
            color: 'white',
            color: '#4FCCA3',
            marginLeft: 7,
            fontSize: 15,
            fontWeight: '500',
          }}>
          9.2
        </Text>
        <View style={{marginTop: 70}}>
          <BookMarkIcon name="bookmark" size={35} color="white" />
          <BookMarkIcon name="star" size={35} color="white" />
          <Text
            style={{
              color: 'white',
              color: '#EEEEEE',
              marginLeft: 10,
              fontSize: 15,
              fontWeight: '500',
            }}>
            na
          </Text>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.listbutton}
          onPress={() =>
            navigation.navigate('WatchList', {
              DATA,
            })
          }>
          <Text style={styles.text}>Watch List</Text>
          <Image
            style={{
              marginTop: 7,
              marginHorizontal: 10,
            }}
            source={require('../../../assets/images/Vector.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#152238',
  },
  item_style: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: '#242A32',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 20,
    paddingTop: 8,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
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
  categories: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 18,
    color: '#ffffff',
    marginHorizontal: 29,
    fontWeight: '700',
  },
  categoriesList: {
    marginTop: 20,
    justifyContent: 'space-between',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4FCCA3',
    borderRadius: 50,
    fontSize: 12,
    borderColor: 'grey',
    width: 106,
    height: 36,
    color: 'black',
    fontWeight: '600',

    marginHorizontal: 10,
  },
  listbutton: {
    backgroundColor: '#4FCCA3',
    borderRadius: 10,
    fontSize: 15,
    borderColor: 'grey',
    width: 136,
    height: 36,
    color: 'black',
    fontWeight: '900',
    flexDirection: 'row',
    marginTop: 60,
    marginHorizontal: 240,
  },
  Availability: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#3A3F47',
    fontSize: 12,
    borderColor: 'grey',
    width: 87,
    height: 36,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  item_style: {
    fontWeight: '700',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 140,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 140,
  },
  containerone: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleone: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '400',
    marginVertical: 3,
    marginHorizontal: -30,
  },
});

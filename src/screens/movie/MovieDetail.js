import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookMarkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const MovieDetail = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View>
        <Image
          source={require('../../../assets/images/cover.png')}
          style={{width: '100%'}}
        />
        <Image
          source={require('../../../assets/images/profile.png')}
          resizeMethod="resize"
          style={{
            width: 100,
            height: 120,
            marginLeft: 29,
            backgroundColor: '#F5F5F5',
            marginTop: 151,
            position: 'absolute',
            borderRadius: 16,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            height: 48,
            marginLeft: 136,
            marginRight: 29,
            top: 223,
            color: 'white',
            fontFamily: 'poppins',
            fontWeight: 'bold',
          }}>
          Spiderman No Way Home
        </Text>
        <View style={{flexDirection: 'row', marginTop: -210}}>
          <View>
            <Text
              style={{
                position: 'absolute',
                height: 29,
                marginLeft: 28,
                marginRight: 268,
                marginTop: 289,
                backgroundColor: '#3A3F47',
                borderRadius: 16,
                color: 'white',
                width: 70,
                paddingLeft: 10,
                paddingTop: 4,
              }}>
              Action
            </Text>
          </View>
          <View>
            <Text
              style={{
                position: 'absolute',
                height: 29,
                marginLeft: 119,
                marginRight: 177,
                marginTop: 289,
                backgroundColor: '#3A3F47',
                borderRadius: 16,
                color: 'white',
                width: 70,
                paddingLeft: 10,
                paddingTop: 4,
              }}>
              Drama
            </Text>
          </View>
          <View>
            <Text
              style={{
                position: 'absolute',
                height: 29,
                marginLeft: 210,
                marginRight: 86,
                marginTop: 289,
                backgroundColor: '#3A3F47',
                borderRadius: 16,
                color: 'white',
                width: 70,
                paddingLeft: 10,
                paddingTop: 4,
              }}>
              Thriller
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              height: 26,
              marginLeft: 300,
              marginRight: -5,
              marginTop: 289,
              backgroundColor: '#3A3F47',
              borderRadius: 16,
              color: 'white',
              width: 70,
            }}>
            <Text style={{marginHorizontal: 13, color: 'white', marginTop: 2}}>
              Action
            </Text>
          </View>

          <View>
            <Text
              style={{
                position: 'absolute',
                width: 92,
                height: 33,
                marginLeft: 27,
                marginTop: 331,
                fontWeight: 'bold',
                borderBottomWidth: 5,
                borderBottomColor: '#3A3F47',
                color: 'white',
              }}>
              About Movie
            </Text>
            <Text
              style={{
                height: 18,
                marginLeft: 29,
                marginRight: 29,
                marginTop: 390,
                fontWeight: '500',
                color: 'white',
              }}>
              Overviews:
            </Text>
            <Text
              style={{
                height: 87,
                marginLeft: 29,
                marginRight: 29,
                marginTop: 10,
                color: 'white',
              }}>
              From DC Comics comes the Suicide Squad, an antihero team of
              incarcerated supervillains who act as deniable assets for the
              United States government, undertaking high-risk
            </Text>
            <Text style={{marginLeft: 30, fontWeight: '500', color: 'white'}}>
              Release Date:
            </Text>
            <Text style={{marginLeft: 30, top: 6, color: 'white'}}>
              2019-08-03
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 20, marginLeft: 30}}>
                <Text style={{fontWeight: '500', color: 'white'}}>
                  Average Rating:
                </Text>
                <Text style={{marginTop: 6, color: 'white'}}>9.2</Text>
              </View>
              <View style={{marginTop: 20, marginLeft: 50}}>
                <Text style={{fontWeight: '500', color: 'white'}}>
                  Rate Count:
                </Text>
                <Text style={{marginTop: 6, color: 'white'}}>1466</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MovieScreen')}>
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
              <View
                style={{
                  backgroundColor: '#4FCCA3',
                  borderRadius: 16,
                  marginTop: 40,
                  marginBottom: 30,
                  marginLeft: 180,
                  height: 53,
                  width: 50,
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Text>
                  <BookMarkIcon
                    name="bookmark-check"
                    size={30}
                    color="#242A32"
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#152238',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3A3F47',
    padding: 10,
    width: 105,
    height: 50,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

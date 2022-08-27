import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from '../screens/movie/MovieScreen';
import MovieDetail from '../screens/movie/MovieDetail';
import WatchList from '../screens/movie/WatchList';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieScreen">
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          headershow
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          headershow
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WatchList"
          component={WatchList}
          headershow
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

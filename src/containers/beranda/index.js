import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from './homeScreen';
const Stack = createStackNavigator();

export default function berandaScreen({ state, route, navigation }) {
    let tabBarVisible =  true;
    try {
      tabBarVisible = route.state ? route.state.routes[0].params.isHide : true;
    } catch (error) {
      console.log(error)
    }

    navigation.setOptions({ tabBarVisible })
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" 
        options={({ route }) => ({
            headerShown:false
          })}
          component={homeScreen} />
      </Stack.Navigator>
    );
  }
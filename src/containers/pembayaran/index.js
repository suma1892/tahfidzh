import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import paymentScreen from './paymentScreen';
const Stack = createStackNavigator();

export default function index({ state, route, navigation }) {
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
          component={paymentScreen} />
      </Stack.Navigator>
    );
  }
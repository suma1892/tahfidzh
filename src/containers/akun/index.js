import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import akunScreen from './akunScreen';
const Stack = createStackNavigator();

export default function index({ state, route, navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" 
        options={({ route }) => ({
            headerShown:false
          })}
          component={akunScreen} />
      </Stack.Navigator>
    );
  }
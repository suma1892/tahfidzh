
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { enableScreens } from 'react-native-screens';
import AppScreen from '../../App';
import Beranda from '../containers/beranda';
import Pembayaran from '../containers/pembayaran';
import akun from '../containers/akun';
import aktivitas from '../containers/aktivitas';
import messages from '../containers/messages';
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if(focused){
            if (route.name === 'Beranda') {
                iconName = 'ios-compass-sharp';
            } else if (route.name === 'Aktivitas') {
                iconName = 'newspaper-sharp';
            }else if (route.name === 'Pembayaran') {
                iconName = 'ios-wallet-sharp';
            }else if (route.name === 'Kotak Masuk') {
                iconName = 'chatbox-ellipses-sharp';
            }
            else if (route.name === 'Akun') {
                iconName = 'person-circle-sharp';
            }
          }else{
            if (route.name === 'Beranda') {
                iconName = 'ios-compass-outline';
            } else if (route.name === 'Aktivitas') {
                iconName = 'newspaper';
            }else if (route.name === 'Pembayaran') {
                iconName = 'ios-wallet-outline';
            }else if (route.name === 'Kotak Masuk') {
                iconName = 'chatbox-ellipses-outline';
            }
            else if (route.name === 'Akun') {
                iconName = 'person-circle-outline';
            }
          }
        // iconName = route.name === 'Akun'&& focused ?'ios-person-circle-sharp':  'person-circle-outline';
          return <Icon name={iconName} size={20} color={color} />;
        },
      backBehavior: 'none'
      })}
      tabBarOptions={
        {
          activeTintColor: 'green',
          inactiveTintColor: 'grey',
          showLabel: true,
          labelStyle:{
            fontSize: 9,
            marginBottom:7
          },
        
        }
      }
        >
          <Tab.Screen name="Beranda" component={Beranda} />
          <Tab.Screen name="Aktivitas" component={aktivitas} />
          <Tab.Screen name="Pembayaran" component={Pembayaran} />
          <Tab.Screen name="Kotak Masuk" component={messages} />
          <Tab.Screen name="Akun" component={akun} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

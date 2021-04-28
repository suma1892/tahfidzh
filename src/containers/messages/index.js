import * as React from 'react';
import {Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import chatScreen from './chatScreen';
import notifScreen from './notifScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
function TopTabBar({ state, route, navigation }) {
    return (
      <TopTab.Navigator 
  //     tabBarOptions= {{
  //       style: {
  //           backgroundColor: 'white',
  //       },
  //       scrollEnabled: true,
  //       activeTintColor: '#ffffff',
  //       inactiveTintColor: '#ffffff',
  //       inactiveBackgroundColor: 'blue',
  //       activeBackgroundColor: 'blue',
  //       showIcon: true,
  //       upperCaseLabel: false,
  //       indicatorStyle: {
  //           borderBottomColor: 'blue',
  //           borderBottomWidth: 3,
  //       },
        
  //   labelStyle:{
  //       fontSize: 15,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       color : 'blue'
  //   },
  //   tabStyle: {
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       width :20*2.5,
  //       height : 20*1.1
  //   },
  // }}
  >
      <TopTab.Screen name="Chat" component={chatScreen} />
      <TopTab.Screen name="Notifikasi" component={notifScreen} />
    </TopTab.Navigator>
    );
  }

export default function index({route}){
  const tampId = route.state?route.state.routes[0].state.index:0;
  return(
    <Stack.Navigator >
      <Stack.Screen 
      options={{
        headerStyle: {
            
          },
          headerTitleAlign: 'center',
          headerRight: (props) => {
            if (tampId==0){
              return <View/>
            }else 
            return(
            <View style={{padding: 10}}>
                <Icon name={'trash-can-outline'} size={20} />
            </View>
          )}
        }} name={'Kotak Masuk'} component={TopTabBar} />
    </Stack.Navigator>
  )
}
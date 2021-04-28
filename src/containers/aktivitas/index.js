import * as React from 'react';
import {Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import chatScreen from './aktivitasScreen';
import notifScreen from './pengantaranScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
function TopTabBar({ state, route, navigation }) {
    return (
      <TopTab.Navigator 
      tabBarOptions= {{
        style: {
            elevation: 0,
            shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
        scrollEnabled: true,
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        showIcon: true,
        
        indicatorStyle: {
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            
            borderRadius:20,
            height:40,
            backgroundColor:'#dedede'
            
        },
        
    labelStyle:{
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        // margin: 10
    },
    tabStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 25,
        // padding: 10,
        marginHorizontal: 5,
        height : 20,
        
    },
  }}
  >
      <TopTab.Screen name="Aktivitas" component={chatScreen} />
      <TopTab.Screen name="pengantaran" component={notifScreen} />
    </TopTab.Navigator>
    );
  }

export default function index({route}){
  
  return(
    <Stack.Navigator screenOptions={{
      
      style: {
        elevation: 0,
        shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
      },
    }}>
      <Stack.Screen 
      options={{
        headerStyle: {
          },
          headerTitleAlign: 'left',
          headerRight: (props) => {
            return(
            <View style={{padding: 10}}>
                <Text style={{fontSize: 13, fontWeight:"bold", color:'#35afd4'}}>Riwayat</Text>
            </View>
          )}
        }} name={'Aktivitas Saya'} component={TopTabBar} />
    </Stack.Navigator>
  )
}
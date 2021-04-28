
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {s} from './styles';
export default function chatScreen({navigation, route, state}) {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex : 1, backgroundColor:"white", padding:10}}>
        <ScrollView>
          <View style={{alignItems:"center", paddingTop: 50}}>
              <Image
                source={require('../../assets/empty.png')}
                style={{height:200, width: 200}}
              />
              <Text style={{fontSize:20, fontWeight:'bold'}}>Kamu bisa melihat semua chat kamu di sini</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



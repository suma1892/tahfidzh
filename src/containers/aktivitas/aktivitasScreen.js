
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
      <SafeAreaView style={{flex : 1, backgroundColor:"white", padding:5}}>
        <ScrollView>
          <View style={{ backgroundColor:"#e0e0e0", padding: 10,margin: 10, borderRadius: 5}}>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Lagi nggak ada apa-apa, nih</Text>
              <Text style={{fontSize:14}}>Disini kamu bisa lihat layanan yang kamu pakai.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};




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
export default function akunScreen({navigation, route, state}) {
  const newActivity=[
    {
      desc: 'Dijadwalkan',
    },
    {
      desc: 'Lagi ke pengirim',
    },
    {
      desc: 'Barang udah diambil',
    },
    {
      desc: 'Lagi ke penerima',
    },
    {
      desc: 'Yang sudah lewat',
    },
  ]
  const RenderActivity=({item, index})=>(
    <View style={{padding:5}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:10}}>
              <Text>{item.desc}</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Icon name={'chevron-down'} size={17} />
              </View>
            </View>
          {<View
          style={[s.View8a]}/>}
    </View>
  )
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex : 1, backgroundColor:"white", padding:10}}>
        <ScrollView>
          <View style={{margin:10}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Lagi berjalan</Text>
            {newActivity.map((res, index)=>(
              <RenderActivity
                item={res}
                index={index}
              />
            ))}
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



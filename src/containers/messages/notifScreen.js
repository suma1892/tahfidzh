
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
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
    {
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
    {
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
    {
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
    {
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
    {
      desc: 'Kirim instant,goceng aja',
      charge: 'Buruan, cuma sampe akhir bulan'
    },
  ]
  const RenderActivity=({item, index})=>(
    <View style={{padding:5, padding:1}}>
        <View style={{flexDirection:"row", padding:10}}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Icon name={'email-outline'} size={17} color={'green'} />
              </View>
              <View style={{flexDirection:'column', paddingHorizontal: 10}}>
                <Text style={{fontSize:15}}>{item.desc}</Text>
                <Text style={{fontSize:13, paddingTop: 5}}>{item.charge}</Text>
              </View>
            </View>
          {<View
          style={[s.View8,{width:Platform.OS === 'ios'?350: 330}]}/>}
    </View>
  )
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex : 1, backgroundColor:"white", padding:10}}>
        <ScrollView>
          <View style={{padding:20}}>
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



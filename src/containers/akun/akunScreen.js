
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
      desc: 'Keanggotaan Rewards',
      charge: '18,912 OVO Points'
    },
    {
      desc: 'rewards',
    },
    {
      desc: 'Profil Bisnis',
    },
    {
      desc: 'Terjadwal',
    },
    {
      desc: 'Kartu Nama',
    },
    {
      desc: 'Langganan',
    },
    {
      desc: 'Tantangan',
    },
    {
      desc: 'Saved Places',
    },
    {
      desc: 'Pusat Bantuan',
    },
    {
      desc: 'Mengemudi Bareng Grab',
    },
    {
      desc: 'Kontak Darurat',
    },
    {
      desc: 'Pengaturan',
    },
    {
      desc: 'Kasih Masukkan',
    },
  ]
  const RenderActivity=({item, index})=>(
    <View style={{padding:5}}>
        
        <View style={{flexDirection:"row", justifyContent:"space-between", padding:10,}}>
              <Text>{item.desc}</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                {item.charge&&<Text>{item.charge}</Text>}
                <Icon name={'chevron-right'} size={17} />
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
          <View style={{flexDirection:"row"}}> 
            <Icon name={'account-circle-outline'} size={90} color={'#42c966'} />
            <View style={{alignSelf:"center"}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>suma albaroh</Text>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={{fontSize:14}}>edit profil</Text>
                  <Icon name={'chevron-right'} size={17} />
                </View>
            </View>
            </View>
            {newActivity.map((res, index)=>(
              <RenderActivity
                item={res}
                index={index}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



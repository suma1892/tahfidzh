
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
export default function paymentScreen({navigation, route, state}) {
  const newActivity=[
    {
      company: 'PT SOLUSI TRANSPORTASI INDONESIA',
      charge: '44.000'
    },
    {
      company: 'PT SOLUSI TRANSPORTASI INDONESIA',
      charge: '44.000'
    },
    {
      company: 'PT SOLUSI TRANSPORTASI INDONESIA',
      charge: '44.000'
    },
    {
      company: 'PT SOLUSI TRANSPORTASI INDONESIA',
      charge: '44.000'
    }
  ]
  const RenderActivity=({item, index})=>(
    <View style={{padding:5}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 11}}>Payment</Text>
            <Text style={{fontSize: 12, color:"grey"}}>to PT SOLUSI TRANSPORTASI INDONESIA</Text>
          </View>
          <Text style={{fontSize: 17, fontWeight:"bold"}}>-44.000</Text>
          <Icon name={'chevron-right'} size={17} />
        </View>
        
        <View
          style={[s.View8,{width:Platform.OS === 'ios'?340: 320}]}/>
          {index+1==newActivity.length&&<Text style={[s.Text8,{alignSelf:"center"}]}>View Plans</Text>}
    </View>
  )
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex : 1, backgroundColor:"white"}}>
        <Text style={s.Text1}>
          Pembayaran
        </Text>
        <ScrollView>
        <Image source={require('../../assets/bg.jpg')} style={s.img} />
            <View style={s.View1}>
                <Text style={s.Text2}>
                  OVO Cash
                </Text>
                <View style={{flexDirection:"row", paddingVertical:20}}>
                  <Text style={s.Text3}>
                    IDR
                  </Text>
                  <Text style={s.Text4}>
                    36.089
                  </Text>
                </View>

                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Icon name={'crown'} color={'green'} size={17} />
                  <Text style={s.Text5}>
                    18.0129 OVO Points
                  </Text>
                  <Icon name={'chevron-right'} size={17}  />
                </View>

                <View style={s.View6}>
                    <View style={s.View2}>
                      <Icon name={'cellphone-sound'} size={35} />
                      <Text style={s.Text6}>Bayar</Text>
                    </View>

                    <View style={s.View2}>
                      <Icon name={'wallet-outline'} size={35} />
                      <Text style={s.Text6}>Isi Ulang</Text>
                    </View>
                </View>
            </View>

            <View style={s.View10}>
                <Text style={s.Text7}>Langganan</Text>
                <View style={s.View7}>
                    <View style={s.View9}>
                        <Image source={require('../../assets/mail.png')} style={{height: 50, width:50}} />
                        <Text style={{fontSize:15, paddingHorizontal: 7, width: '90%'}}>Choose a subscription plan to save on rides, food, shopping, and more!</Text>
                    </View>
                    <View style={s.View8}>
                    </View>
                    <Text style={s.Text8}>View Plans</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal:20, paddingTop: 40}}>
              <Text style={s.Text7}>Aktivitas Terbaru</Text>
              
            <View style={s.View7}>
              {newActivity.map((res, index)=>(
                <RenderActivity 
                  item={res}
                  index={index}
                />
              ))}
            </View>
              
            </View>    
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



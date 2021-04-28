
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

import Modal, {SlideAnimation, ModalContent,ModalTitle } from 'react-native-modals';

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {s} from './styles';
export default function homeScreen({navigation, route, state}) {
  let [offset, setOffset] = useState(React.useRef(new Animated.ValueXY()));
  const SearchBar=()=>{
      return(
        <View style={s.View1}>
          <View style={s.View2}>
              <Icon name={'scan-helper'} size={15} style={{backgroundColor:"transparent"}} />
          </View>
          <TouchableOpacity style={s.touch}>
              <EntypoIcon name={'magnifying-glass'} size={20} color={'#bdbbbb'} />
              <Text style={{color:'#bdbbbb', fontSize: 14}} >Cari di aplikasi Grab</Text>
          </TouchableOpacity>
      </View>
      )
  }
  route.setParams= 10;
  const Promo=()=>(
    <View style={s.View3}>
      <View style={{}}>
        <Text style={s.Text4}>Murahnya gak kira-kira</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 13}}>Diskon hingga 50% belanja di Grab...</Text>
          <Icon name={'chevron-right'} size={20} />
        </View>
      </View>
      <Image
        style={s.img}
        source={require('../../assets/keranjang.png')}
      />
    </View>
  )

  const Poin=()=>(
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={s.View4}>
          <View style={[s.View5a]}>
            <Text style={s.Text1}>OVO</Text>
          </View>
          <Text style={s.Text2}>IDR</Text>
          <Text style={s.Text3}>300.000</Text>
          <Icon name={'chevron-right'} size={17} style={{ marginVertical: 6}} />
        </View>

        <View style={s.View4}>
          <View style={s.View5}>
            <Icon name={'crown'} size={17} color={'green'} />
          </View>
          
          <Text style={[s.Text3,{paddingLeft: 5}]}>300.000 Poin</Text>
          <Icon name={'chevron-right'} size={17} style={{ marginVertical: 7}} />
        </View>
    </View>
  )

  const Wallet=()=>(
    <View style={s.View7}>
      <View style={s.View6}>
        <Icon name={'wallet-plus-outline'} size={20} />
        <Text style={s.Text4}>Isi Ulang</Text>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 20, fontWeight:"bold"}}>.</Text>
        </View>
        <Text>Wallet</Text>
      </View>
    </View>
  )
  const Menu = [
    {
      title: 'Makanan',
      icon: require('../../assets/food.png')
    },
    {
      title: 'Mart',
      icon: require('../../assets/mart.png')
    },
    {
      title: 'Express',
      icon: require('../../assets/express.png')
    },
    {
      title: 'Pulsa/Token',
      icon: require('../../assets/pulsa.png')
    },
    {
      title: 'Mobil',
      icon: require('../../assets/mobil.png')
    },
    {
      title: 'Motor',
      icon: require('../../assets/motor.png')
    },
    {
      title: 'Kesehatan',
      icon: require('../../assets/health.png')
    },
    {
      title: 'Lainnya',
      icon: require('../../assets/dots.png')
    },
  ]

  const MenuModal = [
    {
      title: 'Makanan',
      icon: require('../../assets/food.png')
    },
    {
      title: 'Mart',
      icon: require('../../assets/mart.png')
    },
    {
      title: 'Express',
      icon: require('../../assets/express.png')
    },
    {
      title: 'Pulsa/Token',
      icon: require('../../assets/pulsa.png')
    },
    {
      title: 'Mobil',
      icon: require('../../assets/mobil.png')
    },
    {
      title: 'Motor',
      icon: require('../../assets/motor.png')
    },
    {
      title: 'Kesehatan',
      icon: require('../../assets/health.png')
    },
    {
      title: 'Makanan',
      icon: require('../../assets/food.png')
    },
    {
      title: 'Mart',
      icon: require('../../assets/mart.png')
    },
    {
      title: 'Express',
      icon: require('../../assets/express.png')
    },
    {
      title: 'Pulsa/Token',
      icon: require('../../assets/pulsa.png')
    },
    {
      title: 'Mobil',
      icon: require('../../assets/mobil.png')
    },
    {
      title: 'Motor',
      icon: require('../../assets/motor.png')
    },
    {
      title: 'Kesehatan',
      icon: require('../../assets/health.png')
    },
    {
      title: 'Makanan',
      icon: require('../../assets/food.png')
    },
    {
      title: 'Mart',
      icon: require('../../assets/mart.png')
    },
    {
      title: 'Express',
      icon: require('../../assets/express.png')
    },
    {
      title: 'Pulsa/Token',
      icon: require('../../assets/pulsa.png')
    },
    
    
  ]

  const ListItem=[
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },

    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
    {
      image:require('../../assets/pizza.jpg'),
      desc: 'Diskonnya bikin tercengang!',
      date: 'sampai 1 oktober',
    },
  ]

  
  const RenderItem = ({ item, index}) => (
    <Item title={item} key={index}  />
  );

  const Item = ({ title, index}) => (
    <TouchableOpacity style={s.View10} onPress={()=>{setVisible(true)}} key={index} >
        <Image
        style={s.img3}
        source={title.icon}
      />
        <Text style={{paddingTop: 5, fontSize: 12}}>{title.title}</Text>
    </TouchableOpacity>
    )

    const RenderItem1 = ({ item }) => (
      <Item1 title={item}  />
    );
  
    const Item1 = ({ title}) => (
      <View style={s.View14}>
          <View  style={{alignItems:"flex-start"}}>
            <Image
              style={s.img4}
              source={title.image}
            />
          </View>
          <View style={s.View11}>
            <Text style={s.Text7}>{title.desc}</Text>
            <View style={{flexDirection:"row", alignItems:"center", width: '90%'}}>
              <Icon name={'calendar'} size={15} color="grey" />
              <Text style={{color:"grey"}}>{title.date}</Text>
            </View>
          </View>
      </View>
      )
      
      const onScroll =async (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif =await currentOffset - (offset || 0);  
        if (dif < 0 && dif !== -49) {
          navigation.setParams({isHide: true});
        } else {
          navigation.setParams({isHide: false});
        }
        console.log(dif)
        setOffset(currentOffset);
      }      

      let [visible, setVisible] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex : 1}}>
      <Modal
          visible={visible}
          onTouchOutside={() => {
            setVisible(false)
          }}
          modalAnimation={new SlideAnimation({
            slideFrom: 'bottom',
            useNativeDriver: true, // optional
          })}
          swipeDirection={['down']} // can be string or an array
          swipeThreshold={200} // default 100
          onSwipeOut={(event) => {
            setVisible(false)
          }}
          modalTitle={
            <>
          <View style={{borderBottomWidth: 2,borderColor:'grey', padding: 5, alignSelf:"center",width: '10%'}} />
          <View style={{padding: 0}}>
                <Text style={{fontWeight:"bold", fontSize: 18, padding: 10, margin: 10}}>Explore Grab</Text>
            </View>
            </>
            }
            modalStyle={{
              // height: 300,
              marginTop: 100
            }}
        >
          <ModalContent>
            <View style={s.View13}>
            
                <View style={s.View15}>
                  {MenuModal.map((res, index)=>(
                    <RenderItem
                      item={res}
                      index={index}
                    />
                  ))}
              </View>
            </View>
          </ModalContent>
        </Modal>
        <ScrollView
          onScroll={(e) => onScroll(e)}
          >
            <View style={{padding: 20}}>
              {<SearchBar/>}
              {<Promo />}
            </View>
            <View style={{backgroundColor:'white', flex: 1}}>
              {<Poin/>}
              {<Wallet/>}
              <View style={{alignItems:'center', backgroundColor:"white",flexDirection:"row", flexWrap: 'wrap'}}>
                  {Menu.map((res, index)=>(
                    <RenderItem
                      item={res}
                      index={index}
                    />
                  ))}
              </View>
            </View>
            <View
                  style={s.View8}
                />
            <View style={{padding: 10, backgroundColor:"white"}}>
                <Image
                      style={s.img2}
                      source={require('../../assets/banner1.jpg')}
                />
                <Text style={s.Text5}>-Chat "SUSUCOKLAT" Menangin Saldo OVOnya Kaka-</Text>
                <Text style={s.Text6}>Disponsori oleh Good Doctor</Text>
                
            </View>
            <View
              style={s.View8}
            />
            <View style={s.View9}>
              <Text style={s.Text4}>Terus Menjelajahi</Text>
            </View>
            <View style={{alignItems:'center', backgroundColor:"white",flexDirection:"row", flexWrap: 'wrap'}}>
            {ListItem.map((res, index)=>(
                    <RenderItem1
                      item={res}
                    />
            ))}
            </View>
            <View style={{backgroundColor:"white", paddingVertical: 10}}>
              <Text style={{fontSize:13,color:'grey',alignSelf:'center'}}>Itu aja untuk sekarang.</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



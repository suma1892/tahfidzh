// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React,{useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   TouchableHighlight,
//   Text,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { FlatList } from 'react-native';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// const datas = [
//   'Simon Mignolet',
//   'Nathaniel Clyne',
//   'Dejan Lovren',
//   'Mama Sakho',
//   'Alberto Moreno',
//   'Emre Can',
//   'Joe Allen',
//   'Phil Coutinho',
// ];
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
// import { SwipeListView } from 'react-native-swipe-list-view';
// import Icon from 'react-native-vector-icons/Entypo';
// export default function loginScreen() {
  
//   return (
//     <>
//       <SwipeListView
//             data={datas}
//             renderItem={ ({item, index}) => (
//                 <View style={{flex:1, backgroundColor:'white', padding: 10, margin: 10, flexDirection:'row', justifyContent:'space-between'}}>
//                     <Text>{item} </Text> 
//                     <View style={{width:50, height: 30, backgroundColor:'#337ff2', borderRadius: 20, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
//                         <Icon name={'pin'} size={14} color={'white'} />
//                         <Text style={{color: 'white', fontWeight:'bold' }}> Izin</Text>
//                     </View>
//                 </View>
//             )}
//             keyExtractor={(item, index) => index.toString()}
//             renderHiddenItem={ (rowData, rowMap)=> {
//               console.log(JSON.stringify(rowMap))
//               return(
//               <View style={{flexDirection:"row", paddingVertical: 10, marginHorizontal: 10, flex: 1, }}>
//                 <TouchableOpacity style={{ backgroundColor:'#36ad3e'}} onPress={ () => rowMap[rowData.index].closeRow() }>
//                 <View style={{paddingHorizontal:15, justifyContent:'center', flex: 1 }}>
//                         <Text style={{color: 'white',fontWeight:'bold',}}>Hadir</Text>
//                     </View>
// 	              </TouchableOpacity>

//                 <TouchableOpacity style={{ backgroundColor:'#337ff2', alignItems:"center"}} >
// 	                  <View style={{paddingHorizontal:15, justifyContent:'center', flex: 1 }}>
//                         <Text style={{color: 'white', fontWeight:'bold' }}>Izin</Text>
//                     </View>
// 	              </TouchableOpacity>

//                 <TouchableOpacity style={{ backgroundColor:'#ff5e5e'}}>
//                 <View style={{paddingHorizontal:15, justifyContent:'center', flex: 1 }}>
//                         <Text style={{color: 'white', fontWeight:'bold'}}>Alfa</Text>
//                     </View>
// 	              </TouchableOpacity>
//               </View>
//             )}}
//             leftOpenValue={180}
//             rightOpenValue={0}
//         />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapboxDirections from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3VtYTE4OTIiLCJhIjoiY2tndTdrMmkwMDNpcjJycXNobGJidWlnYiJ9.3y8ln18igmCkVNIb931BlA',
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [-73.99155, 40.73581],
      myMarker: [0, 0]//intial 0

    };
  }
  updateMyMarker(data){
    this.setState({myMarker: [data.Lng, data.Lat]})
 }
  render() {
    // var directions = new MapboxDirections({
    //     accessToken: 'pk.eyJ1Ijoic3VtYTE4OTIiLCJhIjoiY2tndTdrMmkwMDNpcjJycXNobGJidWlnYiJ9.3y8ln18igmCkVNIb931BlA',
    //     unit: 'metric',
    //     profile: 'mapbox/cycling'
    //   });
      
    //   var map = new MapboxGL.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v9'
    //   });

    //   map.addControl(directions, 'top-left');

    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            {/* <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={this.state.coordinates}
            /> */}
            {/* <MapboxGL.PointAnnotation coordinate={this.state.coordinates} /> */}
            <MapboxGL.PointAnnotation
                key="key1"
                id="id1"
                title="Test"
                coordinate={this.state.myMarker}>
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
});
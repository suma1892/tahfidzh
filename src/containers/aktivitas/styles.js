import { StyleSheet } from 'react-native-auto-stylesheet';
import { Platform } from 'react-native';

export const s = StyleSheet.create({
    View1:{ 
        paddingVertical: 15, 
        position:'absolute', 
        alignItems:"center",
        alignSelf:"center"
    },
    View9:{
        flexDirection:'row', 
        alignItems:'center', 
        width: '90%' 
    },
    Text8:{
        fontSize: 17, 
        paddingTop:10,
        fontWeight:'bold', 
        color:'#358da6'
    },
    View10:{
        paddingTop: Platform.OS === 'ios'?60:90, 
        paddingHorizontal:20
    },
    View2:{
        paddingHorizontal: 40, 
        paddingVertical: 10,
        alignItems:'center'
    },
   Text7:{
       fontWeight:"bold", 
       fontSize: 13, 
       color:"grey"
    },
    img:{
        height:Platform.OS === 'ios'?240: 290,
      width:"100%", 
      marginTop: -25
    },
    
    Text1:{
        fontSize: 18, 
        alignSelf:"center"
    },
    Text2:{
        fontSize: 18, 
        alignSelf:"center", 
        color: 'purple'
    },
    Text3:{
        color:'grey', 
        fontSize: 12
    },
    View6:{
        flexDirection:"row",
        backgroundColor:'white', 
        padding: 5,
        width: 340,
        bottom: -70,
        borderRadius: 7,
        alignItems:"center",
        justifyContent:"space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    View7:{
        backgroundColor:'white', 
        padding: 15,
        marginTop: 10,
        width: 340,
        borderRadius: 7,
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    View8:{
        borderBottomWidth:0.7, 
        borderColor:'#dedede',
        paddingVertical: 6,
        width:'100%'
        // backgroundColor:"white"
    },
    View8a:{
        borderBottomWidth:0.7, 
        borderColor:'#dedede',
        paddingVertical: 6,
        width:Platform.OS === 'ios'?350: 330
        // backgroundColor:"white"
    },
    
    Text4:{
        fontSize: 30, 
        fontWeight:"bold"
    },
    
})
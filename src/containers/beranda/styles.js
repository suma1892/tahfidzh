import { StyleSheet } from 'react-native-auto-stylesheet';
import { Platform } from 'react-native';

export const s = StyleSheet.create({
    View1:{
        flexDirection:'row',
        width:'100%',
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 5,
    },
    View13:{
        flex:1,
        width: 320, 
        borderRadius: 20
    },
    View14:{
        // paddingVertical: 10, 
        marginVertical: 20,
        // paddingHorizontal:2,
        height: 200,
        width: 180,
        alignItems:"center"
    },
    View15:{ 
        flexDirection:"row",
        flexWrap: 'wrap', 
        width:420, 
        marginLeft: -20,
        backgroundColor:"white"
    },
    View2:{
        backgroundColor:'#dedede', 
        width: 30, 
        alignItems:"center", 
        justifyContent:"center"
    },
    touch:{
        marginLeft: -10,
        padding: 5,
        alignItems:"center", 
        flexDirection:"row", 
        width:'100%',
        alignContent:"center", 
        justifyContent:"center"
    },
    View3:{
        paddingTop:10, 
        flexDirection:"row", 
        alignItems:"center"
    },
    img:{
        width:90, 
        height: 70
    },
    View4:{
        flexDirection:'row', 
        borderWidth: 1,
        borderTopWidth:0,
        borderColor:'#dedede',
        padding: 10,
         width:'50%'
    },
    View5:{ 
        padding: 5,
        borderRadius: 100,
        height: Platform=='ios'?26: 32,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 2, 
        borderColor: '#dedede'
    },
    View5a:{ 
        padding: 5,
        borderRadius: 100,
        height: 32,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 2, 
        borderColor: '#dedede'
    },
    Text1:{
        fontSize: 9, 
        color: 'purple'
    },
    Text2:{
        fontSize: 10, 
        margin: 5
    },
    Text3:{
        fontSize: 15, 
        marginVertical: 5
    },
    View6:{
        flexDirection:"row",
        backgroundColor:'#fff',
        backgroundColor:'white', 
        padding: 5,
        borderRadius: 7,
        alignItems:"center",
        justifyContent:"center",
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
        width: '50%', 
        padding: 10,
        margin: 10,
        alignSelf:"center"
    },
    Text4:{
        fontWeight:'bold', 
        fontSize: 15
    },
    View8:{
        borderBottomWidth:1, 
        borderColor:'#dedede', 
        paddingTop: 10,
        backgroundColor:"white"
    },
    img2:{
        width: '100%',
        height: 200,
        borderRadius:10,
    },
    Text5:{
        fontSize: 15, 
        fontWeight:"bold", 
        paddingTop: 10
    },
    Text6:{
        fontSize:13
    },
    View9:{
        paddingHorizontal: 20, 
        paddingTop:10, 
        backgroundColor:"white"
    },
    View10:{
        height: 90, 
        width: 90,
        paddingTop: 5, 
        alignItems:'center'
    },
    img3:{
        height: Platform.OS === 'ios'?40: 50,
        width: Platform.OS === 'ios'?50:55,
        resizeMode: 'stretch',
    },
    img4:{
        height: 140, 
        width: 140, 
        borderRadius: 10
    },
    View11:{
        alignItems:"center", 
        width:'80%'
    },
    Text7: {
        fontWeight:'bold', 
        fontSize: 14, 
        width: '90%', 
        paddingVertical: 5
    },
    View12:{
        alignItems:"center", 
        padding: 10,
        flexDirection:"row",
        flexWrap: 'wrap',
        backgroundColor:"white"
    },
})
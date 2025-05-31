import React, { useState,useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import PushNotification from "react-native-push-notification";

export default function Splash({navigation}) {

   
    useEffect(()=>{
        createChannels()
      },[])

      const  createChannels=()=>{
        PushNotification.createChannel(
          {
            channelId:'task-channel',
            channelName:'Task Channel'
          }
        )
      }
      
    
    return(
        <View style={styles.body}>
          <Image
          />
          <Text style={styles.text}>
            To-Do List
          </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#0080ff',
    },
    image:{

    },
    logo:{
        width:100,
        height:100,
        margin:20,
    },
    text:{
        fontSize:20,
        color:'#ffffff'
    },
    input:{
        width:300,
        borderWidth:1,
        borderColor:'#555',
        borderRadius:10,
        backgroundColor:'#ffffff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
})



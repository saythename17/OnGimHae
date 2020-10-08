import React from 'react'
import {View,Image,StyleSheet, ActivityIndicator} from 'react-native'

export default Intro =()=>{
    return(
        <View style={styles.container}>
            <Image source={require('./img/Logo.png')} style={styles.logo}></Image>
            <ActivityIndicator color='#0055A2' size='large' style={styles.indicator}></ActivityIndicator>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1, justifyContent:'center', alignItems:'center', marginBottom:100
    },
    logo:{
        width:'60%',resizeMode:'contain'
    },
    indicator:{
        marginTop:0
    }
})
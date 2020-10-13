import React, { Component } from 'react'
import {View,Image,StyleSheet, ActivityIndicator} from 'react-native'

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./img/Logo.png')} style={styles.logo}></Image>
            </View>
        )
    }

    componentDidMount(){
        const p=this.props
        setTimeout(()=>p.navigation.navigate('Main'),2500)
    }
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
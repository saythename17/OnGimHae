import React, { Component } from 'react'
import {View,Text, StyleSheet, Image, ActivityIndicator} from 'react-native'
export default class FestivalScreen extends Component{
    state={
        data:[]
    }
    render(){
        return this.state.data.length>7?(
            <View>
                <Text>Festival Screen</Text>
            </View>
        )
        :(
            <View style={styles.loadingContainer}>
                <Image source={require('../img/ic_festival.png')} width='90'></Image>
                <Text></Text>
                <ActivityIndicator color='#d8d8d8' size='large'></ActivityIndicator>
            </View>
        )
    }//render()

    componentDidMount(){
        const festivalUrl='http://www.gimhae.go.kr/openapi/tour/festival.do'

        fetch(festivalUrl).then(res=>res.json()).then(json=>this.setState({data:json.results}))
    }
}

const styles=StyleSheet.create({
    loadingContainer:{
        flex:1,justifyContent:'center',alignItems:'center'
    }
})
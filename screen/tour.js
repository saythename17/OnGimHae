import React, { Component } from 'react'
import {View,Image, FlatList, ScrollView,StyleSheet,ActivityIndicator} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TourComponent from '../components/TourComponent';


export default class TourScreen extends Component{
    state={
        data:[]
    }
    render(){
        return this.state.data.length>5?(
          <View>
          <FlatList
            data={this.state.data}
            renderItem={({item})=>(
              <TourComponent results={item} onPress={item=>this.props.navigation.navigate('TourDetail',{item})}></TourComponent>
              )}
            keyExtractor={(item,index)=>index}>
          </FlatList>
          </View>
        )
        :(
          <View style={styles.loadingContainer}>
              <Image source={require('../img/ic_tour.png')} width='90'></Image>
              <Text></Text>
              <ActivityIndicator color='#d8d8d8' size='large'></ActivityIndicator>
          </View>
        )
    }//render()

    componentDidMount(){
      //tour list infomation url
      const tourUrl='http://www.gimhae.go.kr/openapi/tour/tourinfo.do'//관광지 정보

      //cultural asset infomation url
      const assetUrl='http://www.gimhae.go.kr/openapi/tour/asset.do'

      try {
        fetch(tourUrl).then(response=>response.json()).then(json=>this.setState({data:json.results}))
      } catch (error) {
        console.log(error+'')
      }
      
    }
}

const styles= StyleSheet.create({
  loadingContainer:{
      flex:1,justifyContent:'center',alignItems:'center'
  }
})
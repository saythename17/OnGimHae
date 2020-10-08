import React, { Component } from 'react'
import {View,Image, FlatList, ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TourComponent from '../components/TourComponent';


export default class TourScreen extends Component{
    state={
        data:[]
    }
    render(){
        return(
          <View>
          <FlatList
            data={this.state.data}
            renderItem={(obj)=>(
              <TourComponent results={obj.item} onPress={this.props.onPress}></TourComponent>
              )}
            keyExtractor={(item,index)=>index}>
          </FlatList>
          </View>
        )
    }//render()

    componentDidMount(){
      //tour list infomation url
      const tourUrl='http://www.gimhae.go.kr/openapi/tour/tourinfo.do'//관광지 정보

      //cultural asset infomation url
      const assetUrl='http://www.gimhae.go.kr/openapi/tour/asset.do'

      fetch(tourUrl).then(response=>response.json()).then(json=>this.setState({data:json.results}))
    }
}
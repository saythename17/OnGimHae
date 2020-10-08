import React, { Component } from 'react'
import {View,Image,StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import TourScreen from './screen/tour'
import FestivalScreen from './screen/festival'
import RestScreen from './screen/rest'
import FoodScreen from './screen/food'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Intro from './Intro';
const Tab= createMaterialTopTabNavigator()

export default class Main extends Component{
    state={
        title:'온김해 보고가'
    }
    render(){
        const festivalUrl='http://www.gimhae.go.kr/openapi/tour/festival.do'
        
        const foodUrl='http://www.gimhae.go.kr/openapi/tour/restaurant.do'//맛집 정보
         
        const restUrl='http://www.gimhae.go.kr/openapi/tour/lodging.do'//숙소 정보
        return(
            //<Intro></Intro>
            <Container>
                <Header style={styles.header}>
                    <Body style={{flexDirection:'column', alignItems:'center', marginVertical:4}}>
                        {/* <Image source={require('./img/tourTitle.png')} style={styles.titleImg}></Image> */}
                        <Title style={styles.title}> {this.state.title} </Title>
                    </Body>
                </Header>
                
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name='tour' component={TourScreen} 
                            listeners={{tabPress:()=>this.setState({title:'온김해 보고가'})}}
                            ></Tab.Screen>
                        <Tab.Screen name='festival' component={FestivalScreen}
                            listeners={{tabPress:()=>this.setState({title:'온김해 즐겨'})}}></Tab.Screen>
                        <Tab.Screen name='맛집' component={FoodScreen}
                            listeners={{tabPress:()=>this.setState({title:'온김해 먹고가'})}}></Tab.Screen>
                        <Tab.Screen name='숙소' component={RestScreen}
                            listeners={{tabPress:()=>this.setState({title:'온김해 쉬고가'})}}></Tab.Screen>
                    </Tab.Navigator>               
                </NavigationContainer>
            </Container>
        )
    }//render()
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'white'
    },
    title:{
        width:'100%',textAlign:'center', color:'black',
        fontFamily: 'fantasy'
    },
    titleImg:{
        flex:1,
        resizeMode:'contain'
    }
})




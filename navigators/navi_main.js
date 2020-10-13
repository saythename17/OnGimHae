import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Intro from '../Intro'
import Main from '../MainScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default class MainNav extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{headerShown:false}}>
                    <Stack.Screen name='Intro' component={Intro}></Stack.Screen>
                    <Stack.Screen name='Main' component={Main}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )       
    }
    
}
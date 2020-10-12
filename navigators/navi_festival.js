import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import FestivalScreen from '../screen/festival'
import FestivalDetail from '../screen/festivalDetail'

const Stack = createStackNavigator()

export default function FestivalNavi(){
    return (
        <Stack.Navigator
            screenOptions={{headerShown:false}}>
            <Stack.Screen name='FestivalScreen' component={FestivalScreen}></Stack.Screen>
            <Stack.Screen name='FestivalDetail' component={FestivalDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}
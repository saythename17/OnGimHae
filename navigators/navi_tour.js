import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TourDetail from '../screen/tourDetail'
import TourScreen from '../screen/tour'

const Stack = createStackNavigator()

export default function TourNav(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown:false}}>
            <Stack.Screen name='TourScreen' component={TourScreen}></Stack.Screen>
            <Stack.Screen name='TourDetail' component={TourDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}
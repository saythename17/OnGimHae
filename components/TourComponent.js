import React from 'react'
import {View,Image} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default TourComponent=props=>{

    return(
        <TouchableOpacity
            style={{marginHorizontal:4, marginVertical:8}}
            onPress={()=>props.onPress(props.results.idx)}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9I4-WbTveO8OzDWH09A7UPDyA2B9WM1RJow&usqp=CAU'}} />
                <Body>
                  <Text> {props.results.name} </Text>
                  <Text note> {props.results.category} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: props.results.images[0]}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon type='FontAwesome' name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body style={{flex:1.2}}>
                <Button transparent>
                  <Icon type='FontAwesome' name="comment" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
    )
}
import React,{Component} from 'react'
import {ActivityIndicator, StyleSheet, Image, ScrollView} from 'react-native'
import { Container, Button, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../img/Logo.png'),
    },
    {
        text: 'Card One',
        name: 'One',
        image: require('../img/tourTitle.png'),
      },
      {
        text: 'Card One',
        name: 'One',
        image: require('../img/ic_food.png'),
      }
];

export default class TourDetail extends Component {
    state={
        data:null
    }
    render(){
        return this.state.data? (
            <ScrollView>
            <Container>
                <Text> {this.state.data.idx} </Text>
                {/* <View>
                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={cards}
                    renderEmpty={() =>
                    <View style={{ alignSelf: "center" }}>
                        <Text> {this.props.data.idx} </Text>
                    </View>
                    }
                    renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem cardBody>
                        <Image style={{ height: 300, flex: 1 }} source={item.image} />
                        </CardItem>
                        <CardItem>
                        <Icon name="heart" style={{ color: '#5b86e5' }} />
                        <Text> {this.props.data.idx} </Text>
                        </CardItem>
                    </Card>
                    }
                />
                </View>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", left: 0, right: 0, top:125, justifyContent: 'space-between', padding: 15 }}>
                <Button onPress={() => this._deckSwiper._root.swipeLeft()}>
                    <Icon name="left" />
                </Button>
                <Button onPress={() => this._deckSwiper._root.swipeRight()}>
                    <Icon name="right" />
                </Button>
                </View> */}
            </Container>
            </ScrollView>
        )
        :(
            <View style={styles.loadingContainer}>
                <Image source={require('../img/ic_tour.png')} width='90'></Image>
                <Text> aaaaaaa </Text>
                <ActivityIndicator color='#d8d8d8' size='large'></ActivityIndicator>
            </View>
        )
    }

    componentDidMount=()=>{
        try {
            const item = this.props.route.params.item
            alert(''+item)
            this.setState({data:item}) 
        } catch (error) {
            
        }
        
    }
}

const styles= StyleSheet.create({
    loadingContainer:{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    loadingIcon:{
        width:90,
        height:90
    }
})
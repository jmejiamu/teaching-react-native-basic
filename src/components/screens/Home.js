import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'jose',
            carouselItems: [
                {
                    id: 1,
                    title: "As soon as possible",
                    text: "You see costumer location. We find optimal paths for your deliveries",
                    id: 2,
                    title: "Schedule an order",
                    text: "Enjoy journey with your orders in real time",
                },
                {
                    id: 2,
                    title: "Schedule an order",
                    text: "Enjoy journey with your orders in real time",
                }


            ]
        }
    }

    updateName = () => {
        this.setState({ name: 'JOse Mejia' })
    }

    pressHandlerAbout = () => {
        this.props.navigation.navigate('AboutScreen')
    }
    render() {
        const data = this.state.carouselItems.map((item, index) => {
            return (
                <View key={index}>
                    <Text>Title: {item.title}</Text>
                    <Text>Body: {item.text}</Text>
                </View>
            )
        })
        return (
            <View>
                <Text> textInComponent </Text>
                <Button onPress={this.pressHandlerAbout} title='Go to about' />

                <Text> My name is: {this.state.name} </Text>
                <Button onPress={this.updateName} title='Update name' />

                <Text> Accessing Object </Text>

                <ScrollView>
                    {data}
                </ScrollView>

            </View>
        )
    }
}
export default Home;
const styles = StyleSheet.create({})

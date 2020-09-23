import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, ScrollView, TouchableOpacity } from 'react-native'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'jose',
            carouselItems: [
                {
                    id: 1,
                    title: "Welcome!",
                    text: "You can ask any questions about our products!",
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
                <View key={index} style={styles.container}>
                    <Text style={styles.welcome}>{item.title}</Text>
                    <Text style={styles.body_text} >{item.text}</Text>
                </View>
            )
        })
        return (
            <ScrollView>
                <View style={styles.container}>

                    {data}
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button_style}
                            onPress={this.pressHandlerAbout}
                        >
                            <Text style={styles.btn_text_style}>Continue</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        )
    }
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        color: '#5AC18D',
        textAlign: 'center'
    },
    body_text: {
        color: '#5AC',
        textAlign: 'center'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingBottom: 35,
        alignItems: "center"
    },
    button_style: {
        flex: 1,
        padding: 8,
        width: 100,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#5AC18D',
    },
    btn_text_style: {
        color: 'black',
        textAlign: 'center',
        fontWeight: '900'
    }

})

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Image } from 'react-native'

const About = () => {
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch('http://192.168.1.xx:3001/allproduct')
            const jsonData = await res.json()
            setProduct(jsonData)
            // fetch('http://192.168.1.69:3001/allproduct')
            //     .then((response) => response.json())
            //     .then((data) => { setProduct(data) })

        } catch (error) {
            console.error(error);
        }
    }

    useState(() => {
        getProducts();
    }, [])

    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                horizontal={true}
                data={product}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <View style={styles.card} key={item.id}>
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: item.img_url }}
                                />
                                <Text>{item.product_name}</Text>
                                <Text>{item.description}</Text>
                                <Text>{item.cost}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    imageStyle: {
        width: 250,
        height: 350,
        marginLeft: 15,
        marginRight: 15,
    }
})

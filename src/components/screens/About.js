import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const About = () => {
    const [name, setName] = useState('Jose');
    const [Age, setAge] = useState('50');

    const updateName = () => {
        setName('JOse Mejia')
    }

    return (
        <View>
            <Text>About screen</Text>
            <Text>Hello, my name is: {name}</Text>
            <Button title='Update name' onPress={updateName} />

            <Text>Enter name</Text>
            <TextInput style={styles.input} placeholder='name'
                onChangeText={(val) => setName(val)} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5
    }
})

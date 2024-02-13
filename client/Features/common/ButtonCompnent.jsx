import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Button = ({ text, navigation, name }) => {

    const loginHandler = () => {
        navigation.navigate(name)
    }

    return (
        <TouchableOpacity onPress={loginHandler} style={styles.me}>
            <Text style={styles.buttonText} >{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textTransform: "capitalize"
    },
    me: {
        backgroundColor: "#4DBA79",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 5,
        marginTop: 30
    }

})

export default Button
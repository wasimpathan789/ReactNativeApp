import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const PasswordBox = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [colourChange, setColourChange] = useState(false)

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
        setColourChange(!colourChange)
    }
    return (
        <TouchableOpacity style={{
            borderBottomColor: colourChange ? "red" : "#c2c2c2",
            borderBottomWidth: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 30,
            width: "85%"
        }}>
            <View style={styles.pContainer}>
                <Image style={styles.inputImage} source={require('../../../assets/images2.png')} />
                {/* <Text style={styles.passwordText} >Password</Text> */}
                <TextInput secureTextEntry={showPassword} style={{ fontSize: 16, fontWeight: "500", color: colourChange ? "red" : "green" }} placeholder='Password' />
            </View>
            <Pressable onPress={showPasswordHandler} style={{ marginBottom: 5, marginRight: 10 }}>
                <Image style={{ height: 20, width: 20, resizeMode: "contain", backgroundColor: "yellow" }} source={require('../../../assets/images.png')} />
            </Pressable>
        </TouchableOpacity>



    )
}
const styles = StyleSheet.create({
    // container: {
    //     borderBottomColor: "#c2c2c2",
    //     // borderWidth: 1,
    //     borderBottomWidth: 2,
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "flex-end",
    //     gap: 30,
    //     width: "80%"
    // },
    inputImage: {
        height: 20,
        width: 20,
        marginBottom: 5

    },
    pContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20

    },
    passwordText: {
        color: "lightgray",
        marginBottom: 5,
        fontWeight: "500"
    }
})

export default PasswordBox


{/* <TouchableOpacity style={styles.container}>
<View style={styles.pContainer}>
    <Image style={styles.inputImage} source={require('../../assets/cart.png')} />
    <Text style={styles.passwordText} >Password</Text>
</View>
<View style={{ marginBottom: 5, marginRight: 10 }}>
    <Image style={{ height: 20, width: 20, resizeMode: "contain" }} source={require('../../assets/cart.png')} />
</View>
</TouchableOpacity> */}
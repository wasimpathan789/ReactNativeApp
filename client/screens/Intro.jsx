import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Intro = ({ navigation }) => {
    const loginHandler = () => {
        navigation.navigate("login")
    }
    const signupHandler = () => {
        navigation.navigate("register")
    }
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/d2.png')} />
            </View>
            <View>
                <Text style={styles.heading}>Fast Shipping</Text>
            </View>
            <View>
                <Text style={styles.para}>Set Yours location to start exploring restaauranet around you</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, styles.boxWithShadow, styles.card, styles.shadowProp]}><Text onPress={loginHandler} style={styles.btnText}>Sign In</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.card, styles.shadowProp]}><Text onPress={signupHandler} style={styles.btnText}>Sign Up</Text></TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4DBA79",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingHorizontal: 40,
        // flex: 1
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: "cover",
        marginBottom: 30
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
    },
    para: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 16,
        fontWeight: "400"
    },
    btnContainer: {
        flexDirection: "row",
        gap: 30,
        marginTop: 30
    },
    btn: {
        backgroundColor: "white",
        paddingVertical: 15,
        width: "50%",
        alignItems: "center",
        borderRadius: 5,


    },
    btnText: {
        color: "black",
        fontWeight: "500",
        fontSize: 16
    },
    shadowProp: {
        shadowColor: 'pink',
        shadowOffset: { width: -20, height: 40 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 5,
        width: '50%',
        marginVertical: 10,
    },
    boxWithShadow: {
        // elevation: 5,
        // color: "red"
    }

})

export default Intro
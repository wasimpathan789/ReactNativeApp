import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import NumberComponent from './NumberComponent'

const ResetPassword = ({ navigation }) => {
    const signUpHandler = () => {
        navigation.navigate("login")

    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/cart.png')} />
            <View>
                <Text style={styles.registerHere}>Reset Password</Text>
            </View>
            <View style={styles.mobileNumber}>
                <Text style={styles.mobileNumberText}>Mobile Number</Text>
            </View>
            <View style={{ marginVertical: 30 }}>
                <NumberComponent />
            </View>

            <TouchableOpacity onPress={signUpHandler} style={{
                backgroundColor: "#4DBA79",
                width: "85%",
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                borderRadius: 5,
            }}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
                <Text style={styles.byText}>By continuing  <Text style={{ color: "blue" }}> Terms of services</Text>  and <Text style={{ color: "blue" }}>Privacy</Text></Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    image: {
        height: 100,
        // width: "auto",
        resizeMode: "contain",
        marginBottom: 25,
    },
    registerHere: {
        fontSize: 25,
        color: "gray",
        fontWeight: "700"
    },
    mobileNumber: {
        width: "85%",
        marginTop: 30
    },
    mobileNumberText: {
        color: "#c2c2c2",
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 40,
        marginBottom: -20
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textTransform: "capitalize",
    },
    terms: {
        flexDirection: "row",
        marginTop: 20
    },
    byText: {
        color: "gray",
        fontWeight: "500"
    }

})

export default ResetPassword
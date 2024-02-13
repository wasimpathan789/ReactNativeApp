import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import PasswordBox from "./PasswordBox";
import TouchableOpacit from "../../common/ButtonCompnent";
import NumberComponent from "./NumberComponent";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const loginHandler = () => {
        // e.preventDefault();
        let userCredentials = {
            phoneNumber, password

        }
        console.log(password)
        setPassword('')
        navigation.navigate("home");
    };



    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/cart.png")} />
            <View>
                <Text style={styles.welcomeTo}>Welcome to</Text>
            </View>
            <View>
                <Text style={styles.foodsyText}>Foodsy</Text>
            </View>
            <View>
                <Text style={styles.signInText}>Sign In</Text>
            </View>
            {/* <View style={{ marginVertical: 30 }}>
                <NumberComponent value={"phoneNumber"}
                    setValue={"setPhoneNumber"} />
            </View> */}

            <View>
                <PasswordBox />
            </View>
            <View style={styles.forgot}>
                <Text onPress={() => navigation.navigate("reset")} style={styles.forgotText}>Forgot Password ? </Text>
            </View>

            <TouchableOpacity onPress={loginHandler} style={styles.me}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.dontContainer}>
                <Text style={{ fontWeight: "500", fontSize: 14, color: "gray" }}>
                    Dont have an account ?{" "}
                </Text>
                <Text onPress={() => navigation.navigate("register")} style={{ color: "#4DBA79" }}>Sign Up</Text>
            </Text>

            <Text onPress={() => navigation.navigate("home")}> Click me</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1
    },
    image: {
        height: 100,
        // width: "auto",
        resizeMode: "contain",
        marginBottom: 25,
    },
    welcomeTo: {
        fontSize: 14,
        fontWeight: "500",
    },
    foodsyText: {
        color: "#4DBA79",
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 30,
    },
    signInText: {
        fontSize: 25,
        fontWeight: "900",
        marginBottom: 30,
    },
    forgot: {
        marginTop: 20,
        width: "85%",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "gray",
        fontWeight: "500",
    },
    dontContainer: {
        marginTop: 30,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textTransform: "capitalize",
    },
    me: {
        backgroundColor: "#4DBA79",
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 5,
        marginTop: 30,
    },
});

export default Login;

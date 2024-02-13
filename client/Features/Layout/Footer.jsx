import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
const FooterDAta = [
    {
        _id: 1,
        title: "Home",
        icon: "home"
    },
    {
        _id: 2,
        title: "Notification",
        icon: "notification"
    },
    {
        _id: 3,
        title: "Account",
        icon: "user"
    },
    {
        _id: 4,
        title: "Cart",
        icon: "shoppingcart"
    },
    {
        _id: 5,
        title: "Logout",
        icon: "logout"
    },
]

const Footer = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [value, setValue] = useState('')

    const clickHandler = () => {
        navigation.navigate("")
    }
    return (
        // <View elevation={1} style={styles.container} >
        //     {
        //         FooterDAta?.map(data => (
        //             <TouchableOpacity style={styles.footContainer} onPress={clickHandler}>
        //                 <Icon style={[styles.footIcon, route.name === "home" && styles.active]} name={data.icon} />
        //                 <Text style={[styles.footText, route.name === "home" && styles.active]}>{data.title}</Text>
        //             </TouchableOpacity>
        //         ))
        //     }
        // </View>
        <View elevation={1} style={styles.container} >


            <TouchableOpacity style={styles.footContainer} onPress={() => navigation.navigate("home")}>
                <Icon style={[styles.footIcon, route.name === "home" && styles.active]} name='home' />
                <Text style={[styles.footText, route.name === "home" && styles.active]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footContainer} onPress={() => navigation.navigate("notification")}>
                <Icon style={[styles.footIcon, route.name === "notification" && styles.active]} name='notification' />
                <Text style={[styles.footText, route.name === "notification" && styles.active]}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footContainer} onPress={() => navigation.navigate("account")}>
                <Icon style={[styles.footIcon, route.name === "account" && styles.active]} name='user' />
                <Text style={[styles.footText, route.name === "account" && styles.active]}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footContainer} onPress={() => navigation.navigate("Cart")}>
                <Icon style={[styles.footIcon, route.name === "cart" && styles.active]} name='shoppingcart' />
                <Text style={[styles.footText, route.name === "cart" && styles.active]}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footContainer} onPress={() => navigation.navigate("login")}>
                <Icon style={[styles.footIcon]} name='logout' />
                <Text style={[styles.footText]}>Logout</Text>
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // backgroundColor: "gold",
        justifyContent: "space-between",
        padding: 10,
        borderTopColor: "gray",
        // borderTopWidth: 1

    },
    footContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 5

    }
    , footIcon: {
        fontSize: 20,
        fontWeight: '300'
    },
    footText: {
        fontSize: 12,
        fontWeight: "500",
        color: "gray"
    },
    active: {
        color: "blue",
        // backgroundColor: "red"
    },
}
)

export default Footer
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderComponent = ({ title, path }) => {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name='arrowleft' />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "red",
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
        gap: 20,
        marginTop: 35
    },
    icon: {
        fontSize: 20
    },
    text: {
        fontSize: 18,

    }
})

export default HeaderComponent
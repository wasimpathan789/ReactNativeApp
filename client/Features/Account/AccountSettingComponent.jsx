import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const AccountSettingComponent = ({ icon1, icon2, title, path }) => {
    const navigation = useNavigation()
    return (

        <TouchableOpacity onPress={() => navigation.navigate(path)} style={styles.container}>
            <View style={styles.accountItem}>
                <Icon name={icon1} style={styles.Icon} />
                <Text style={styles.text}>{title}</Text>
            </View>
            <Icon name={icon2} style={styles.Icon} />

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // backgroundColor: "blue",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    accountItem: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    Icon: {
        fontSize: 20
    },
    text: {
        fontSize: 18,
        fontFamily: "PoppinsR",
        fontWeight: "500"
    },
})

export default AccountSettingComponent
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AccountButton = ({ title, path }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(path)} style={styles.btn}>
            <Text style={styles.btnText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "white",
        width: "40%",
        paddingVertical: 16,
        borderRadius: 5,
        textAlign: "center"
    },
    btnText: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Quicksand"
    },
})

export default AccountButton
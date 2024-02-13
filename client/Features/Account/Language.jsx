import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import HeaderComponent from '../common/HeaderComponent'

const Language = () => {
    const languageData = [
        {
            _id: 1,
            "language": "English",
            "name": "English"

        },
        {
            _id: 2,
            "language": "मराठी",
            "name": "Marathi"

        },
        {
            _id: 3,
            "language": "हिन्दी",
            "name": "Hindi"

        },

    ]

    const [selectLanguage, setSelectLanguage] = useState()
    return (
        <Layout>
            <View>
                <HeaderComponent title={"Language"} />
            </View>
            <View style={styles.container} >

                {languageData.map((item, index) => (
                    <TouchableOpacity style={styles.item} onPress={() => setSelectLanguage(item._id)}>
                        <View style={styles.circle} key={index}>
                            {selectLanguage === item._id ? <View style={styles.radioBg}>
                            </View> : null}
                        </View>
                        <View style={styles.languageContainer}>
                            <Text style={styles.text1}>{item.language}</Text>
                            <Text style={styles.text2}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>

                ))}


            </View>

        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20

    },
    item: {
        borderWidth: 2,
        borderColor: "#D5D8DC",
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        marginBottom: 20
    },
    circle: {
        width: 20,
        height: 20,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    radioBg: {
        width: 15,
        height: 15,
        backgroundColor: "blue",
        borderRadius: 10,
    },
    languageContainer: {
        // flexDirection: "row"
    },
    text1: {
        fontSize: 20

    },
    text2: {
        fontSize: 16
    },
})

export default Language
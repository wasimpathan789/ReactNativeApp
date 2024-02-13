import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { CategoryData } from '../../data/CategoryData'


const Categories = () => {
    return (

        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.categories}>
                    {
                        CategoryData?.map(item => (

                            <TouchableOpacity key={item._id} style={styles.catContainer}>
                                <Icon name={item.icon} />

                                <Text>{item.name}</Text>

                            </TouchableOpacity>

                        ))
                    }

                </View>

            </ScrollView>
        </View >



    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    categories: {
        flexDirection: "row",
        // padding: 10,
        backgroundColor: "pink"
    },
    catContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10

    }
})

export default Categories
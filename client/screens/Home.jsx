import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../Features/Layout/Layout'
import Categories from '../Features/common/Categories'
import Banner from '../Features/common/Banner'
import Product from '../Features/product/components/Product'



const Home = () => {

    return (

        <Layout>
            <StatusBar backgroundColor={"#349bdb"}
                barStyle={"light-content"}
                hidden={false}
                showHideTransition={"fade"}
                networkActivityIndicatorVisible={true}
            // translucent={true}
            />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.topHeading}>FahsionStore</Text>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.topInput} placeholder='Search here' />
                        </View>

                    </View>
                    <Categories />
                    <View style={styles.catContainer}>
                        <View style={styles.bannerContainer}>

                            <Banner />
                        </View>
                        <Product />

                    </View>
                </View>
            </ScrollView>

        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,

        // overflow: 'hidden'
        flex: 1
    },
    top: {
        backgroundColor: "red "

    },
    topHeading: {
        fontSize: 30,
        marginLeft: 5,
        fontFamily: "PoppinsR",
        fontWeight: "700",
        color: "blue"
    },
    inputContainer: {
        padding: 10
    },
    topInput: {
        borderWidth: 1,
        padding: 5,
        fontSize: 16,
        fontFamily: "PoppinsR"
    },
    catContainer: {
        // backgroundColor: "yellow",
        padding: 10

    },
    bannerContainer: {
        // backgroundColor: "green",
        // height: 200
    },
}
)
export default Home;
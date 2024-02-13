import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// Components 
import Layout from '../Layout/Layout'
import AccountButton from './AccountButton'
import HeaderComponent from '../common/HeaderComponent'

// Icon 
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/AntDesign';

const Address = () => {
    const [showPopUp, setShowPopUp] = useState(true)
    const navigation = useNavigation()

    const popUpHandler = () => {
        setShowPopUp(!setShowPopUp)
    }
    return (
        <Layout style={styles.container}>
            <View>
                <HeaderComponent title={"My Address"} />
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("newAddress")} style={styles.addContainer} >
                    <Icon3 style={styles.addContainerIcon} name='plus' />
                    <Text style={styles.heading}>Add a new address</Text>
                </TouchableOpacity>
                <View style={styles.addWrapper}>
                    <View style={styles.userAddress}>
                        <View style={styles.threeDot} onPress={popUpHandler} >
                            <Icon style={styles.threeDotIcon} name="dots-three-vertical" />

                        </View>
                        {/* pop up  */}
                        {showPopUp ? null : <View style={styles.popUp}>
                            <Text>Edit</Text>
                            <Text>DElet</Text>
                        </View>}

                        <View style={styles.nameContainer}>
                            <Text style={styles.userText}>Pathan Wasim</Text>
                            <View style={styles.homeBtn}><Text style={styles.homeBtnText}>Home</Text></View>
                        </View>
                        <Text style={styles.addressText}> Pathan Mohalla, Basmat Nagar</Text>
                        <Text style={styles.mobileNumber}> +91 9921313701</Text>

                    </View>
                    <View style={styles.userAddress}>
                        <View style={styles.threeDot}>
                            <Icon style={styles.threeDotIcon} name="dots-three-vertical" />

                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.userText}>Pathan Wasim</Text>
                            <View style={styles.homeBtn}><Text style={styles.homeBtnText}>Home</Text></View>
                        </View>
                        <Text style={styles.addressText}> Pathan Mohalla, Basmat Nagar</Text>
                        <Text style={styles.mobileNumber}> +91 9921313701</Text>

                    </View>
                    <View style={styles.userAddress}>
                        <View style={styles.threeDot}>
                            <Icon style={styles.threeDotIcon} name="dots-three-vertical" />

                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.userText}>Pathan Wasim</Text>
                            <View style={styles.homeBtn}><Text style={styles.homeBtnText}>Home</Text></View>
                        </View>
                        <Text style={styles.addressText}> Pathan Mohalla, Basmat Nagar</Text>
                        <Text style={styles.mobileNumber}> +91 9921313701</Text>

                    </View>


                </View>

            </ScrollView>


        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "red",
        width: '100%'
    },
    addContainer: {
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#E5E7E9",
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    addContainerIcon: {
        fontSize: 18,
        fontWeight: "900"
    },
    heading: {
        fontFamily: "PoppinsR",
        fontSize: 16,
        fontWeight: "600"
    },
    addWrapper: {
        // backgroundColor: "red",
    },
    userAddress: {
        backgroundColor: "#E5E7E9",
        // borderColor: "red",
        height: 150,
        marginBottom: 20,
        // borderWidth: 1,
        paddingHorizontal: 10
    },
    threeDot: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginVertical: 6,
    },
    threeDotIcon: {
        fontSize: 16
    },
    popUp: {
        backgroundColor: "red",
        width: 80,
        height: 80,
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: "absolute",
        left: "70%",
        top: "10%"
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        marginBottom: 20
    },
    userText: {
        fontSize: 18
    },
    homeBtn: {
        width: 50,
        backgroundColor: "lightgray",
        borderRadius: 5,
        paddingVertical: 5,

    },
    homeBtnText: {
        textAlign: "center"
    },
    addressText: {
        fontSize: 17,
        marginBottom: 10
    },
    mobileNumber: {
        fontWeight: "600"
    }

})

export default Address
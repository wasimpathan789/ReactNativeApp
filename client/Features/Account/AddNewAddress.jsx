import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';

import ButtonCompnent from '../common/ButtonCompnent'
import HeaderComponent from '../common/HeaderComponent';

const AddNewAddress = () => {
    const [name, setName] = useState('');
    const [mobileNumer, setMobileNumer] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setLandmark] = useState('');
    const [state, setState] = useState('');
    const [selectType, setSelectType] = useState(1)

    const formHandler = () => {
        console.log("name" + name)
    }




    return (
        <Layout>
            <HeaderComponent title={"My Address"} />
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.heading}>Add new address</Text>
                    <TouchableOpacity style={styles.inputBox}>
                        <TextInput onChangeText={(item) => setName(item)} value={name} style={styles.inputText} placeholder='Full name (Required)' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputBox}>
                        <TextInput onChangeText={(item) => setMobileNumer(item)} keyboardType='numeric' value={mobileNumer} style={styles.inputText} placeholder='Mobile Number (Required)' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputBox}>
                        <TextInput onChangeText={(item) => setAddress(item)} value={address} style={styles.inputText} placeholder='Your Address' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputBox}>
                        <TextInput onChangeText={(item) => setPincode(item)} keyboardType='numeric' value={pincode} style={styles.inputText} placeholder='Pin Code' />
                    </TouchableOpacity>

                    <View style={styles.state}>
                        <TouchableOpacity style={styles.inputBox2}>
                            <TextInput onChangeText={(item) => setState(item)} value={state} style={styles.inputText} placeholder='State' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inputBox2}>
                            <TextInput onChangeText={(item) => setCity(item)} value={city} style={styles.inputText} placeholder='City' />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.inputBox}>
                        <TextInput onChangeText={(item) => setLandmark(item)} value={landmark} style={styles.inputText} placeholder='Landmark' />
                    </TouchableOpacity>

                    {/* type of address  */}
                    <View>
                        <Text>Type of address</Text>
                        <View style={styles.typesContainer}>
                            {
                                selectType === 1 ?
                                    <TouchableOpacity style={styles.typeBtn} >
                                        <Icon style={styles.typeBtnIcon} name='home' />
                                        <Text style={styles.typeBtnText}>Home</Text>
                                    </TouchableOpacity> : null
                            }
                            {
                                selectType === 1 ?
                                    <TouchableOpacity style={styles.typeBtn} >
                                        <Icon2 style={styles.typeBtnIcon} name='workflow' />
                                        <Text style={styles.typeBtnText}>work</Text>
                                    </TouchableOpacity> : null
                            }

                        </View>
                    </View>

                </View>

                <View style={styles.saveContainer} onPress={formHandler} name={name}>
                    <TouchableOpacity style={styles.saveBtn}>
                        <Text style={styles.saveBtnText}>Save Address</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10

    },
    heading: {
        fontFamily: "PoppinsR",
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 8
    },
    inputBox: {
        // backgroundColor: "blue",
        paddingVertical: 12,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 19,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20
    },
    inputBox2: {
        // backgroundColor: "blue",

        paddingVertical: 12,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 19,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        width: "48%"

    },
    inputText: {
        fontSize: 16

    },
    state: {
        paddingHorizontal: 0,
        flexDirection: "row",
        gap: 10

    },
    typesContainer: {

        flexDirection: "row",
        gap: 20,

    },
    typeBtn: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 18,
        paddingVertical: 6,
        marginTop: 10

    },
    typeBtnIcon: {
        fontSize: 17
    },
    typeBtnText: {
        fontSize: 16,
        fontFamily: "PoppinsR"
    },
    saveContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        // backgroundColor: "green",
        paddingVertical: 20
    },
    saveBtn: {
        backgroundColor: "orange",
        width: "90%",
        // paddingVertical: 20
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        borderRadius: 5
    },
    saveBtnText: {
        fontSize: 16,
        fontFamily: "PoppinsR",
        // color: "white",
        // textAlign: "center",
        // textAlignVertical: "center"

    }
})

export default AddNewAddress
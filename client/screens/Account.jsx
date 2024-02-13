import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../Features/Layout/Layout'
import Icon from 'react-native-vector-icons/AntDesign';
import AccountSettingComponent from '../Features/Account/AccountSettingComponent';
import AccountButton from '../Features/Account/AccountButton';


const Account = () => {

    const navigation = useState()

    return (
        <Layout>

            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.btnContainer}>
                        <AccountButton title={"Orders"} />
                        <AccountButton title={"Wishlist"} />
                        <AccountButton title={"Coupons"} />
                        <AccountButton title={"Help Center"} />

                    </View>

                    {/* account setting  */}
                    <View>
                        <Text style={styles.heading}>Account Setting</Text>
                        <AccountSettingComponent title={"Edit Profile"} icon1={"user"} icon2={"right"} path={"address"} />
                        <AccountSettingComponent onPress={() => navigation.navigate('address')} title={"Saved Addressess"} path={"address"} icon1={"user"} icon2={"right"} />
                        <AccountSettingComponent title={"Cards & Wallet"} icon1={"user"} icon2={"right"} />
                        <AccountSettingComponent title={"Select Language"} icon1={"user"} icon2={"right"} path={"language"} />
                    </View>
                    {/* account setting  */}
                    <View>
                        <Text style={styles.heading}>Account Setting</Text>
                        <AccountSettingComponent title={"Edit Profile"} icon1={"user"} icon2={"right"} />
                        <AccountSettingComponent title={"Saved Addressess"} icon1={"user"} icon2={"right"} />
                        <AccountSettingComponent title={"Cards & Wallet"} icon1={"user"} icon2={"right"} />
                        <AccountSettingComponent title={"Select Language"} icon1={"user"} icon2={"right"} />
                    </View>
                </View>

            </ScrollView>



        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: '100%',
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "blue",
        paddingHorizontal: 10,
        // backgroundColor: "yellow"
    },
    btnContainer: {
        // flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 20,
        paddingVertical: 20,
        justifyContent: "center",

    },
    heading: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10,
        fontFamily: "Quicksand"
    },


})

export default Account
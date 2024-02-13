import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Header />

            </View> */}

            <View style={styles.children}>
                {children}
            </View>
            <View style={styles.footer} >
                <Footer />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        height: "100%"
    },
    header: {
        height: "10%",
        // backgroundColor: 'red'
    },
    children: {
        height: "90%",
        // backgroundColor: "purple",

    },
    footer: {
        // backgroundColor: "red",
        justifyContent: "flex-end",
        // alignItems: "flex-end"
        height: "10%"
    },
}
)
export default Layout
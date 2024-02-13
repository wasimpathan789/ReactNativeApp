import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../Features/Layout/Layout'

const Product = ({ route }) => {
    console.log(route)
    const API = `https://fakestoreapi.com/products`

    const [singleProduct, setSingleProduct] = useState({})

    // useEffect(() => {
    //     // find product 
    //     const result = API.find((p) => {
    //         return p.id === params.id
    //     })
    //     setSingleProduct(result)
    //     console.log(result)
    // }, [])

    const [data, setData] = useState({})

    const getProduct = API.find((el) => {
        return el.id === params.id
    })
    setData(getProduct)

    const { params } = route
    return (
        <Layout style={styles.container}>
            <ScrollView>

                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>
                <Text>Betlow</Text>

                <View>
                    {/* image  */}
                    <View>
                        <Image />

                    </View>
                    <View>
                        {/* <Text> {JSON.stringify(singleProduct, null, 4)}</Text> */}
                        <Text>{JSON.stringify(params)}</Text>
                        <Text>{route.price}</Text>
                        <Text>{JSON.stringify(params)}</Text>
                        <Text>{JSON.stringify(params)}</Text>




                    </View>
                </View>

            </ScrollView>
            <Text>Product</Text>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "red",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Product
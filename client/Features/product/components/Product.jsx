import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../productSlice'
import { sendProductDetails } from '../productInfoSlice'
import { addToCart } from '../../Cart/CartSlice'
import { useNavigation } from '@react-navigation/native'

const Product = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const allProducts = useSelector((state) => state.product.data)


    const addHandler = (item) => {
        dispatch(addToCart(item))

    }
    const productInfoHandler = (item) => {
        dispatch(sendProductDetails(item))
        navigation.navigate("productDescription")
        console.log(item)

    }

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    return (
        <View>
            {/* {allProducts.map((item, index) => (
                <View style={{ borderWidth: 1, marginBottom: 10 }}>
                    <Text>{item.title}</Text>
                    <Text>{item.category}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.description}</Text>
                    <Image style={styles.productImage}
                        source={{ uri: `${item.image}` }} />

                </View>
            ))} */}
            <FlatList data={allProducts} renderItem={({ item, index }) => (
                <View style={styles.productCard} key={item.id}>
                    <Image style={styles.productImage}
                        source={{ uri: `${item.image}` }} />
                    <View style={styles.productCardContent}>
                        <Text style={styles.heading1}>{item.title.slice(0, 30)}...</Text>
                        <Text style={styles.heading2}>{item.category}</Text>
                        <Text style={styles.heading3}>₹ {item.price}</Text>
                        {/* <Text style={styles.heading3}>₹ {item.name}</Text> */}
                        <View style={styles.addBtnContainer}>
                            <TouchableOpacity onPress={() => addHandler(item)} style={styles.addBtn}><Text>Add to Cart</Text></TouchableOpacity>

                        </View>
                        {/* <TouchableOpacity style={styles.details} onPress={() => productInfoHandler(item)}>
                            <Text>Details</Text>
                        </TouchableOpacity> */}

                    </View>




                </View>
            )}
                keyExtractor={(item, id) => item.id}
                numColumns={2} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,

        // overflow: 'hidden'
        flexDirection: "row",
        flexWrap: "wrap",
        // gap: 20,
        marginBottom: 20,
        marginTop: 20
    },

    productCard: {

        elevation: 1,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: "lightgray",
        width: "48%",
        margin: 5,
        borderRadius: 10,
        height: 320
    },
    productImage: {
        height: 150,
        width: "100%",
        resizeMode: 'stretch',
        borderRadius: 10,

    },
    productCardContent: {
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        // backgroundColor: "red",
        height: 150,
        paddingHorizontal: 7
    },
    textContainer: {
        marginTop: 10,
        padding: 5
    },
    heading1: {
        fontSize: 16,
        fontWeight: "500",
        // marginTop: 10,
        height: 55,

    },
    heading2: {
        fontStyle: "italic",
        fontSize: 14,
        // marginTop: 5,
        height: 35,
    },
    heading3: {
        fontSize: 16,
        // marginTop: 10,
        color: "red",
        fontWeight: "600",
        height: 30,

    },
    addBtnContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    addBtn: {
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 5,



    },

})

export default Product
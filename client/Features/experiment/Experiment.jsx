import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newProducts } from './ExperimentSlice'
import { addToCart } from '../Cart/CartSlice'

const Experiment = () => {

    const allProduct = useSelector((state) => state.experiment.data)
    const dispatch = useDispatch()

    console.log("q" + allProduct)
    console.log("r" + allProduct.length)
    const handleAdd = (item) => {
        dispatch(addToCart(item))
    }


    useEffect(() => {
        dispatch(newProducts())
    }, [])
    return (
        <View>
            <Text>Experiment no</Text>
            {/* {
                allProduct.map((item) => (
                    <View style={styles.new}>
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>

                        <Image style={styles.productImage}
                            source={{ uri: `${item.image}` }} />

                        <TouchableOpacity onPress={() => handleAdd(item)}>
                            <Text>Add to Cart</Text>
                        </TouchableOpacity>

                    </View>
                ))
            } */}

            <FlatList data={allProduct}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.new}>
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>

                        <Image style={styles.productImage}
                            source={{ uri: `${item.image}` }} />

                        <TouchableOpacity onPress={() => handleAdd(item)}>
                            <Text>Add to Cart</Text>
                        </TouchableOpacity>

                    </View>

                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    new: {
        borderColor: "red",
        borderWidth: 2,
        marginBottom: 30
    },
    productImage: {
        height: 150,
        width: "100%",
        resizeMode: 'stretch',
        borderRadius: 10,

    },

})

export default Experiment
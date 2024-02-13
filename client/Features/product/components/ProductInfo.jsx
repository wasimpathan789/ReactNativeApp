import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductInfo = (match) => {
    const singleItem = useSelector((state) => state.productInfo.singleProduct)
    console.log("washu" + singleItem)

    const [data, setData] = useState([]);

    useEffect(() => {
        const getSingleProduct = fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                const result = response.JSON
                setData(result)
            }).catch((error) => console.log("single" + error))
    }, [])
    return (
        <View>
            {data.map((el, index) => (
                <View key={index}>
                    <Text>{el.title}</Text>
                    <Text>Hi there</Text>
                    <Text>{el.price}</Text>
                    <Text>{el.description}</Text>
                </View>
            ))}
        </View>
    )
}

export default ProductInfo
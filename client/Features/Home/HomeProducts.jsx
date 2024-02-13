import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import { CategoryData } from '../../data/CategoryData';
import { Users } from '../../db.json'
import axios from 'axios'


const HomeProducts = () => {
    const [item, setItem] = useState([])
    const [data, setData] = useState([])



    const navigation = useNavigation()

    const handleProduct = (id) => {
        navigation.navigate("productDescription", { id: id })
        console.log(id)
    }

    useEffect(() => {
        // fetch('http://localhost:8000/users')
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setItem(data);
        //     });

        axios.get('https://fakestoreapi.com/products').then(res => setData(res.data))
    }, []);
    return (
        // <View style={styles.container}>


        //     {CategoryData.map((data) => (
        //         <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(data.id)} key={data.id}>
        //             <Image style={styles.productImage}
        //                 source={{ uri: `${data.image}` }} />

        //             <Text style={styles.heading1}>{data.title.slice(0, 30)}</Text>
        //             <Text style={styles.heading2}>{data.category}</Text>
        //             <Text style={styles.heading3}>₹ {data.price}</Text>
        //             <Text style={styles.heading3}>₹ {data.name}</Text>




        //         </TouchableOpacity>



        //     ))}
        // </View>
        <View>

            {/* <FlatList data={item}
                renderItem={(item) => (
                    <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(item.id)} key={item.id}>
                        <Image style={styles.productImage}
                            source={{ uri: `${item.image}` }} />

                        <Text style={styles.heading1}>{data.title.slice(0, 30)}</Text>
                        <Text style={styles.heading2}>{data.category}</Text>
                        <Text style={styles.heading3}>₹ {data.price}</Text>
                        <Text style={styles.heading3}>₹ {item.name}</Text>




                    </TouchableOpacity>

                )}
                keyExtractor={(data, index) => data.id} /> */}

            <Text>Hi wasim</Text>

            <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(item.id)}>
                    {/* <Image source={{ uri: `${item.image}` }} /> */}
                    <Image style={styles.productImage}
                        source={{ uri: `${item.image}` }} />

                    <View style={styles.textContainer}>
                        <Text style={styles.heading1}>{item.title.slice(0, 20)}</Text>
                        <Text style={styles.heading3}>{item.price} ₹</Text>
                        <Text style={styles.heading2}>{item.rating.rate} rating</Text>

                    </View>



                </TouchableOpacity>
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
        gap: 20,
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
    },
    productImage: {
        height: 150,
        width: "100%",
        resizeMode: 'stretch',
        borderRadius: 10,

    },
    textContainer: {
        marginTop: 10,
        padding: 5
    },
    heading1: {
        fontSize: 16,
        fontWeight: "500"
    },
    heading2: {
        fontStyle: "italic",
        fontSize: 14
    },
    heading3: {
        fontSize: 16,
        marginTop: 10,
        color: "red",
        fontWeight: "600"
    }
})

export default HomeProducts

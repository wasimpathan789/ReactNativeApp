import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import Layout from "../Features/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

// Icon
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import CartCard from "../Features/Cart/components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    removeFromCart,
} from "../Features/Cart/CartSlice";
import Cart from "../Features/Cart/components/Cart";

const CartPage = () => {
    const navigation = useNavigation();
    const cartItems = useSelector((state) => state.cart.cartList);
    const itemQuantity = useSelector((state) => state.cart.quantity);

    const dispatch = useDispatch();

    const removeProductHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    // const getTotal = cartItems.map()

    return (
        <Layout style={styles.container}>
            <Cart />
        </Layout>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "red",
        width: "100%",
    },
    cartContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    cartTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    cartTopText: {
        fontSize: 20,
    },
    cartTopText2: {
        fontSize: 16,
    },
    cartIcon: {
        fontSize: 100,
        color: "gray",
    },
    cartEmptyText: {
        fontSize: 20,
        fontWeight: "600",
    },
    shopNow: {
        backgroundColor: "green",
        width: "fit",
        paddingVertical: 10,
        borderRadius: 5,
        width: 120,
        marginBottom: 20,
    },
    shopNowText: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
    },
    itemContainer: {
        paddingHorizontal: 10,
    },
    item: {
        backgroundColor: "#E5E7E9",
        paddingVertical: 20,
        borderRadius: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        flexDirection: "row",
        gap: 20,
        marginBottom: 20,
    },
    itemImageContainer: {},
    itemImage: {
        width: 100,
        height: 100,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
    },
    itemDescripContainer: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: 100,
        width: "65%",
    },
    itemText: {
        fontSize: 16,
        fontWeight: "600",
    },
    itemPrice: {
        fontSize: 14,
        color: "red",
        fontWeight: "600",
        fontStyle: "italic",
    },
    quantityAdder: {
        borderColor: "white",
        borderWidth: 1,
        flexDirection: "row",
        height: 30,
        borderRadius: 5,
    },
    addIconContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
    },
    addText: {
        fontSize: 15,
        width: 30,
        textAlign: "center",
        textAlignVertical: "center",
    },
    delete: {
        position: "absolute",
        backgroundColor: "white",
        left: "82%",
        top: "35%",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    deleteIcon: {
        fontSize: 30,
    },
    totalContainer: {
        flexDirection: "row",
        // backgroundColor: "pink",
        gap: 20,
        marginBottom: 20,
    },
    total: {
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "47%",
        paddingVertical: 5,
    },
    totalText: {
        fontSize: 12,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: "700",
        color: "green",
    },
    proceed: {
        backgroundColor: "green",
        borderRadius: 10,
        width: "47%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
    proceedText: {
        fontSize: 17,
        color: "white",
        fontWeight: "500",
    },
});

export default CartPage;

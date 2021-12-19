import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CheckoutItemRow from './CheckoutItemRow';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    transparentContainer: {
        flex: 1,
        backgroundColor: "black",
        opacity: 0.7
    },
    contentContainer: {
        flex: 1.5,
        backgroundColor: "white",
        alignItems: "center",
        width: "100%"
    },
    modalTitle: {
        color: "black",
        fontSize: 17,
        fontWeight: "600",
        marginVertical: 12
    },
    scrollView: {
        width: "100%",
        flexDirection:"column"
    },
    buttonContainer: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row"
    },
    buttonContent: {
        backgroundColor: "black",
        width: "75%",
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row"
    },
    buttonTitle: {
        color: "white",
        fontSize: 18
    },
    rightAccessoryView: {
        color: "white",
        marginRight: 15
    },
    leftAccessoryView: {
        opacity: 0,
        marginLeft: 15
    },
    subtotalContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 15,
        width: "100%"
    },
    subtotalTitle: {
        marginLeft: 15,
        fontWeight: "600"
    },
    subtotalPrice: {
        marginRight: 15
    }
})

export default function CheckoutModal(props) {
    /*
        contains all the items selected per restaurant
    */
    
    const selectedItemsPerRestaurant = useSelector((state) => state.cartReducer.selectedItems)
    var selectedRestaurantItems = []
    if (selectedItemsPerRestaurant.restaurantName == props.restaurantName) {
        selectedRestaurantItems = selectedItemsPerRestaurant.items
    }
    return (
        <View style={styles.screenContainer}>
            <View style={styles.transparentContainer}></View>
            <View style={styles.contentContainer}>
                <Text style={styles.modalTitle}>{props.restaurantName}</Text>
                <View style={styles.scrollView}>
                    {selectedRestaurantItems.map((item, index) => (
                        <CheckoutItemRow 
                        title={item.title} 
                        price={item.price} 
                        key={index}
                        />
                        ))}
                </View>
                <View style={styles.subtotalContainer}>
                    <Text style={styles.subtotalTitle}>Subtotal</Text>
                    <Text style={styles.subtotalPrice}>{props.orderTotal}</Text>
                </View>
                <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => {
                    props.setModalVisible(false)
                    props.setLoading(true)
                    setTimeout(() => {
                        props.navigation.navigate("OrderConfirmation", {
                        restaurantName: props.restaurantName,
                        totalUSD: props.orderTotal,
                        foodItems: selectedRestaurantItems
                    })
                    props.setLoading(false)
                    }, 2500)
                }}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.leftAccessoryView}>{props.orderTotal}</Text>
                        <Text style={styles.buttonTitle}>Checkout</Text>
                        <Text style={styles.rightAccessoryView}>{props.orderTotal}</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
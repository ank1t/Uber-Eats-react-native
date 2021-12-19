import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "white",
        padding: 15
    },
    checkMarkContainer: {
        height: 100,
        alignSelf: "center",
        marginBottom: 30
    },
    cookingContainer: {
        height: 200,
        alignSelf: "center"
    },
    confirmationText: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 30
    },
    orderItems: {
        marginHorizontal: 20,
        marginTop: 20
    }
})

export default function OrderConfirmation({ route, navigation }) {
    console.log(route.params.foodItems)
    return(
        <SafeAreaView style={styles.screenContainer}>
            <LottieView style={styles.checkMarkContainer}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <Text style={styles.confirmationText}>Your order from {route.params.restaurantName} worth {route.params.totalUSD} has been placed</Text>
            <ScrollView style={styles.orderItems}>
                <MenuItems restaurantName={route.params.restaurantName}
                foods={route.params.foodItems}
                showCheckbox={false}
                />
                <LottieView style={styles.cookingContainer}
                    source={require("../assets/animations/cooking.json")}
                    autoPlay
                    speed={0.5}
                    loop={true}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
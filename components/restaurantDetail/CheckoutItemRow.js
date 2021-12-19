import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';


const style = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "black"
    },
    itemTitle: {
        color: "black",
        fontSize: 15,
        fontWeight: "600",
        marginLeft: 15,
        paddingVertical: 20
    },
    itemPrice: {
        color: "gray",
        fontSize: 13,
        marginRight: 15 
    },
    divider: {
        marginHorizontal: 15
    }
})
export default function CheckoutItemRow(props) {
    return (
        <View style={style.itemContainer}>
            <Text style={style.itemTitle}>{props.title}</Text>
            <Text style={style.itemPrice}>{props.price}</Text>
        </View>
    )
}
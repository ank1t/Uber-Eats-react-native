import React from "react";
import { Image, Text, View } from "react-native";

export default function About(props) {
    const {name, image, price, reviews, rating, categories} = props.route.params
    const formattedCategories = categories.map((cat) => cat.title).join(" • ")
    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫  • ${rating} ⭐️ ${reviews ? reviews : ""}`
    return (
        <View>
           <RestaurantImage image={image} />
           <RestaurantName name={name} />
           <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image 
    source={{uri: props.image}}
    style={{width: "100%", height: 180}}/>
)

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 25,
        fontWeight: "600",
        marginHorizontal: 15,
        marginTop: 10
    }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 15.5,
        fontWeight: "400"
    }}>{props.description}</Text>
)
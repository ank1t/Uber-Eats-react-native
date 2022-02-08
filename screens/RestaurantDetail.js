import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const foods = [
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$11.20",
    image:
      "https://veenaazmanov.com/wp-content/uploads/2012/08/Easy-Indian-Tandoori-Chicken-IMG_3017-500x500.jpg",
  },
  {
    title: "Lasagna",
    description:
      "Lasagne are a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.",
    price: "$9.49",
    image:
      "https://sonomamarket.net/media/images/10/03/beef-lasagna-square.jpg",
  },
  {
    title: "Pizza",
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base.",
    price: "$12.99",
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
  },
  {
    title: "Pancake",
    description:
      "A pancake is a flat cake, often thin and round, prepared from a starch-based batter",
    price: "$4.99",
    image:
      "https://i2.wp.com/recipesbycarina.com/wp-content/uploads/2017/01/Fluffy-Pancakes-Recipe-square-scaled.jpg?resize=720%2C720&ssl=1",
  },
  {
    title: "Falafel",
    description:
      "AmaziFalafel; is a deep-fried ball or patty-shaped fritter made from ground chickpeas, broad beans, or both.",
    price: "$7.29",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/05/baked-falafel-recipe-square-2.jpg",
  },
  {
    title: "Pickles",
    description:
      "A pickled cucumber is a cucumber that has been pickled in a brine, vinegar, or other solution",
    price: "$1.99",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-pickle-how-to-495-1542748711.jpg?crop=0.667xw:1.00xh;0.0948xw,0&resize=480:*",
  },
  {
    title: "Pho",
    description:
      "Phở or pho is a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat. ",
    price: "$13.99",
    image:
      "https://cravingtasty.com/wp-content/uploads/2017/06/Beef-Pho-Vietnamese-Pho-Bo-Best-Recipe-750.jpg",
  },
  {
    title: "Ramen",
    description:
      "Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat or fish-based broth",
    price: "$9.90",
    image:
      "https://pinchofyum.com/wp-content/uploads/Quick-Homemade-Ramen-Square.png",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={style.container}>
      <About route={route} />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <MenuItems
        restaurantName={route.params.name}
        foods={foods}
        showCheckbox={true}
      />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}

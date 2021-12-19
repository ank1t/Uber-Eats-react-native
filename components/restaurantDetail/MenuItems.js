import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    padding: 10,
    paddingBottom: 20
  },
  menuImg: {
    height: 100,
    borderRadius: 10,
  },
  menuImgContainer: {
    width: 100
  },
  menuItemTextContainer: {
    flexShrink: 1,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
  },
  price: {
    fontSize: 13,
  },
  divider: {
    marginHorizontal: 20
  }
});

export default function MenuItems({
  restaurantName,
  foods,
  showCheckbox
  }) {
  const dispatch = useDispatch()
  const selectItem = (item, checkboxValue) => dispatch({
    type: "ADD_TO_CART",
    payload: { ...item,
       restaurantName: restaurantName,
      checkboxValue: checkboxValue }
  })
  const cartState = useSelector((state) => state.cartReducer.selectedItems)
  const foodIsInCart = (food) => {
    return Boolean(cartState.items.find((item) => item.title == food.title)) &&
    cartState.restaurantName == restaurantName
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
      <View key={index}>
        <View style={styles.menuItemContainer}>
          {showCheckbox ? (<BouncyCheckbox 
          fillColor="green"
          iconStyle={{
            borderColor: "lightgray",
            borderRadius: 0
          }}
          onPress={(checkboxValue) => selectItem(food, checkboxValue)}
          isChecked = {foodIsInCart(food)}
            />) : (<></>)}
          <MenuItemText
            title={food.title}
            description={food.description}
            price={food.price}
          />
          <MenuItemImage image={food.image} />
        </View>
        <Divider width={0.5} style={styles.divider}/>
      </View>
      ))}
    </ScrollView>
  );
}

const MenuItemText = (props) => {
  return (
    <View style={styles.menuItemTextContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const MenuItemImage = (props) => (
  <View style={styles.menuImgContainer}>
    <Image source={{ uri: props.image }} style={styles.menuImg} />
  </View>
);

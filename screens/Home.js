import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = "API_KEY";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("Toronto");

  const getRestaurantsFromYelp = async () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    const res = await fetch(yelpURL, apiOptions);
    const json = await res.json();
    console.log(json);
    return setRestaurantData(
      json.businesses.filter((business) => {
        // Due to covid, the API now doesnt return Take out/Delivery in the transactions array. So using this temporary condition.
        const restuarantOffersTakeout = business.transactions.length == 0;
        return activeTab.toLocaleLowerCase() == "delivery"
          ? restuarantOffersTakeout
          : !restuarantOffersTakeout;
      })
    );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab, city]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY = "5WgiRG1a79hIXJiBVabRMNXVDYSGjGYwgK9pbpGpFktCaSE-i78NAnvWodcVGXHA-4LA3kjoL-gk8HDe96262iCYFhRU0fBHFLfefspR6N_Gq-girnkQNe_rP2OtYXYx"

export default function Home( { navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [activeTab, setActiveTab] = useState("Delivery")
    const getRestaurantsFromYelp = async () => {
        const yelpURL = "http://localhost:3000/businesses"
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }
        const res = await fetch(yelpURL, apiOptions);
        const json = await res.json();
        return setRestaurantData(json.businesses.filter((business) => {
            return business.transactions.includes(activeTab.toLowerCase());
        }));
    }
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [activeTab])
    return (
        <SafeAreaView style={{backgroundColor: "#eee",
         flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs/>
        </SafeAreaView>
        
    )
}
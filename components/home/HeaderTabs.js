import React, { useState } from "react";
import { View, Text, TouchableOpacity} from 'react-native'

export default function HeaderTabs(props) {
    return (
        <View style={{ flexDirection: "row",
        alignSelf:"center"}}>
            <HeaderBtn title="Delivery"
             btnColor="black"
             textColor="white"
             activeTab={props.activeTab}
             setActiveTab={props.setActiveTab}
             />
            <HeaderBtn title="Pickup"
             btnColor="white"
             textColor="black"
             activeTab={props.activeTab}
             setActiveTab={props.setActiveTab}
             />
        </View>
    )
}

const HeaderBtn = (props) => {
    return (
        <TouchableOpacity style={{paddingVertical: 6,
         paddingHorizontal: 16,
         borderRadius: 30,
         backgroundColor: props.activeTab== props.title ? "black" : "white"}}>
            <Text style={{color:props.activeTab== props.title ? "white" : "black",
             fontSize: 20,
             fontWeight: "900"}}
             onPress={() => props.setActiveTab(props.title)}>{props.title}</Text>
        </TouchableOpacity>
        
    )
}
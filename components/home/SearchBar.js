import React from "react";
import { View, Text} from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar() {
    return(
        <View style={{
            marginTop: 15,
            flexDirection: "row"
        }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        marginTop: 7,
                        fontWeight: "700"
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                        <View style={{marginLeft: 10}}>
                            <Ionicons name="location-sharp" size={24}/>
                        </View>
                    )
                }
                renderRightButton={ () => (
                        <View style={{flexDirection: "row", 
                        backgroundColor: "white",
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 30,
                        marginRight: 10,
                        alignItems: "center"}}>
                            <AntDesign name="clockcircle" size={14} style={{marginRight: 10}}/>
                            <Text style={{color: "black", fontWeight:"700"}}>Search</Text>
                        </View>
                    )
                }
            />
        </View>
    )
}
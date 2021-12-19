import  React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import CheckoutModal from './CheckoutModal';
import LottieView from 'lottie-react-native';

const style = StyleSheet .create({
    container: {
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 20,
        zIndex: 100
    },
    button: {
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 12,
        width: "75%",
        borderRadius: 25
    },
    title: {
        color: "white",
        fontSize: 18
    },
    total: {
        color: "white",
        paddingTop: 3
    },
    totalBalancer: {
        color: "white",
        opacity: 0
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "black",
        opacity: 0.6
    }
})
export default function ViewCart({navigation, ...props}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: "USD"
    });
    
    const checkoutModalContent = () => {
        return <CheckoutModal 
            setModalVisible={setModalVisible}
            setLoading={setLoading}
            restaurantName={props.restaurantName}
            orderTotal={totalUSD}
            navigation={navigation}
        />
    }

    return (
        <>
        <Modal 
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
            {checkoutModalContent()}
        </Modal>
        {total ? 
        (<View style={style.container}>
            <TouchableOpacity style={style.button}
            onPress={() => setModalVisible(true)}>
                <Text style={style.totalBalancer}>{totalUSD}</Text>
                <Text style={style.title}> View Cart</Text>
                <Text style={style.total}>{totalUSD}</Text>
            </TouchableOpacity>
        </View>) : (<></>)}
        {
            loading ? <>
                <LottieView style={style.loadingContainer}
                    source={require("../../assets/animations/scanner.json")}
                    autoPlay
                    speed={3}
                    loop={true}
                />
            </> : <></>
        }
        </>
    )
}
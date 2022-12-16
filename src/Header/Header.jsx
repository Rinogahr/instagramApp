import React, { } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={myStyles.header}>
            <TouchableOpacity>
                <Image
                    source={require('../img/logo.png')}
                    style={myStyles.logo} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../img/send.png')}
                    style={myStyles.send} />
            </TouchableOpacity>
        </View>
    );
}

const myStyles = StyleSheet.create({
    header: {
        backgroundColor: '#fafafa',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,

        borderBottomWidth: 0.5,
        shadowColor: '#000',
        elevation: 3,

        // shadowColor: '#000',
        // shadowOffset:{width:0, height:1},
        // shadowOpacity: 0.2, 

    },
    logo:{},
    send:{
        width: 23,
        height: 23,

    }
})
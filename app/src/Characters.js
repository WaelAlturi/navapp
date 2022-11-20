import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Charecters = () =>{
    return(
        <View style={myStyles.container}>
            <Text>Charecters</Text>
        </View>
    )
}
const myStyles = StyleSheet.create({
    container: {
      flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#ebebeb',
    },
  });
export default Charecters;
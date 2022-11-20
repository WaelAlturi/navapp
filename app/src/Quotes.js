import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Quotes = () =>{
    return(
        <View style={myStyles.container}>
            <Text>Quotes</Text>
        </View>
    )
}
const myStyles = StyleSheet.create({
    container: {
      flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#ebebeb',
    },
  });
export default Quotes;
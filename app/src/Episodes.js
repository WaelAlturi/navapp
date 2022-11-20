import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Episodes = () =>{
    return(
        <View style={myStyles.container}>
            <Text>Episodes</Text>
        </View>
    )
}
const myStyles = StyleSheet.create({
    container: {
      flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#ebebeb',
    },
  });
export default Episodes;
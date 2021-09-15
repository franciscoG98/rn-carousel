import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Feather } from '@expo/vector-icons'; 


const Loading = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Feather name="loader" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   width: 100,
  //   padding: 30,
  //   backgroundColor: "yellow",
  // },
  // links: {
  //   fontSize: 25,
  //   fontWeight: 600,
  //   padding: 10,
  // }
});

export default Loading;

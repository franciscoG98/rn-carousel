import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <AntDesign name="github" size={24} color="black" />
      <AntDesign name="linkedin-square" size={24} color="black" />
      <AntDesign name="codepen-circle" size={24} color="black" />
      <AntDesign name="link" size={24} color="black" />
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    padding: 30,
    backgroundColor: "yellow",
  },
});

export default Footer;

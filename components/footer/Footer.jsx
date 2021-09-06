import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <AntDesign style={styles.links} name="github" size={24} color="black">Github</AntDesign>
      <AntDesign style={styles.links} name="linkedin-square" size={24} color="black">Linkedin</AntDesign>
      <AntDesign style={styles.links} name="codepen-circle" size={24} color="black">Codepen</AntDesign>
      <AntDesign style={styles.links} name="link" size={24} color="black">Personal Website</AntDesign>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    padding: 30,
    backgroundColor: "yellow",
  },
  links: {
    fontSize: 25,
    fontWeight: 600,
    padding: 10,
  }
});

export default Footer;

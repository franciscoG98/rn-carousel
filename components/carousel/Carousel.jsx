import React, { useState, useEffect } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import slides from "../../helpers/slides";

console.log("slides:\n", slides);

const Carousel = () => {
  const [slider, setSlider] = useState(0);

  const next = () => {
    console.log(`curr state: ${slider}`);
    slider === 0 && setSlider(1);
    slider === 1 && setSlider(2);
    slider === 2 && setSlider(3);
    slider === 3 && setSlider(4);
    slider === 4 && setSlider(5);
    slider === 5 && setSlider(6);
    slider === 6 && setSlider(7);
    slider === 7 && setSlider(0);
  };

  const prev = () => {
    console.log(`curr state: ${slider}`);
    console.log(`prevvvvv`);

    slider === 0 && setSlider(7);
    slider === 1 && setSlider(0);
    slider === 2 && setSlider(1);
    slider === 3 && setSlider(2);
    slider === 4 && setSlider(3);
    slider === 5 && setSlider(4);
    slider === 6 && setSlider(5);
    slider === 7 && setSlider(6);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [slider]);

  const handleSlider = () => {
    console.log("click");
    next();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carousel</Text>
      <Text> some text</Text>

      <AntDesign
        style={styles.arrowR}
        onPress={() => next()}
        name="arrowright"
        size={24}
        color="black"
      />
      <AntDesign
        style={styles.arrowL}
        name="arrowleft"
        onPress={() => prev()}
        size={24}
        color="black"
      />
      {slider === 0 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/arroyo.jpg")}
          />
        </View>
      )}
      {slider === 1 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/arroyo2.jpg")}
          />
        </View>
      )}
      {slider === 2 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/canchita-de-futbol.jpg")}
          />
        </View>
      )}
      {slider === 3 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/jakob.jpg")}
          />
        </View>
      )}
      {slider === 4 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/jakob1.jpg")}
          />
        </View>
      )}
      {slider === 5 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/lago-frey.jpg")}
          />
        </View>
      )}
      {slider === 6 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/mirada-del-doctor.jpg")}
          />
        </View>
      )}
      {slider === 7 && (
        <View>
          <Text>{slider}</Text>
          <Image
            style={styles.image}
            source={require("../../assets/landscapes/paso-de-las-nubes.jpg")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "space-between",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#493d8a",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    height: 500,
    marginTop: 30,
    // margin:'5px',
    resizeMode: "cover",
    // width: Dimensions.get('screen').width,
    // zIndex: 3,
    width: 300,
  },
  arrowR:{
    //
    marginRight: 0
  },
  arrowL: {
    //
    left: 0
  }
});

export default Carousel;

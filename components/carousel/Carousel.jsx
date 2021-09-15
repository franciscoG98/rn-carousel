import React, { useState, useEffect } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import slides from "../../helpers/slides";
import Slider from '../../helpers/slider'

// console.log("slides en carousel:\n", slides);

const Carousel = () => {


  const initialImage = {
    image : require("../../assets/landscapes/arroyo2.jpg"),
    name: 'arroyo',
  }

  const [sliderNumb, setSliderNumb] = useState(0);
  // const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(initialImage)


  const next = () => {
    // setLoading(true)
    console.log(`nexttttt curr state: ${sliderNumb}`);
    sliderNumb === 0 && setSliderNumb(1);
    sliderNumb === 1 && setSliderNumb(2);
    sliderNumb === 2 && setSliderNumb(3);
    sliderNumb === 3 && setSliderNumb(4);
    sliderNumb === 4 && setSliderNumb(5);
    sliderNumb === 5 && setSliderNumb(6);
    sliderNumb === 6 && setSliderNumb(7);
    sliderNumb === 7 && setSliderNumb(0);
    // setLoading(false)
  };

  const prev = () => {
    console.log(`prevvvvv curr state: ${sliderNumb}`);
    sliderNumb === 0 && setSliderNumb(7);
    sliderNumb === 1 && setSliderNumb(0);
    sliderNumb === 2 && setSliderNumb(1);
    sliderNumb === 3 && setSliderNumb(2);
    sliderNumb === 4 && setSliderNumb(3);
    sliderNumb === 5 && setSliderNumb(4);
    sliderNumb === 6 && setSliderNumb(5);
    sliderNumb === 7 && setSliderNumb(6);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [sliderNumb, image]);

  const handleSlider = (e) => {
    e.preventDefault()
    console.log('hanbdle slider', e.target)
    e.target.name === 'next' && next();
    e.target.name === 'prev' && prev();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carousel</Text>
      <Text> some text</Text>

      <AntDesign
        style={styles.arrowR}
        onPress={() => next()}
          // onPress={(e) => handleSlider(e)}
        name="arrowright"
        size={24}
        color="black"
      />
      <AntDesign
        style={styles.arrowL}
        name="arrowleft"
        // onPress={() => prev()}
        // onPress={(e) => handleSlider(e)}
        size={24}
        color="black"
      />
      <Slider slides={slides} slider={sliderNumb} setSliderNumb={setSliderNumb} image={image} setImage={setImage} />
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

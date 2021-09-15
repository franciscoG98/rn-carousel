import React, { useState, useEffect } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";
import Loading from "../components/loader/Loading";

const Slider = ({ slides, slider, image, setImage }) => {
  const initialSlide = slides[0];

  const [currSlide, setCurrSlide] = useState(initialSlide);

  console.log(
    "\n slider componetn\n",
    "\n slides: \n ",
    slides,
    "\n slider: \n ",
    slider
    //   "\n setSliderNumb: \n ", setSliderNumb,
    // "\n initialSlide: \n ",
    // initialSlide,
    // "\n currSlide: \n ",
    // currSlide
  );

  // switch (slider) {
  //   case "0":
  //     console.log("slider en el switch", slider);
  //     setImage({
  //       image: slides[slider].image,
  //       name: slides[slider].name,
  //     });
  //     console.log("image en switch", image);

  //     break;
  //   case "1":
  //     console.log("slider en el switch", slider);
  //     setImage({
  //       image: slides[slider].image,
  //       name: slides[slider].name,
  //     });
  //     console.log("image en switch", image);
  //     break;
  //   case "2":
  //     console.log("slider en el switch", slider);
  //     setImage({
  //       image: slides[slider].image,
  //       name: slides[slider].name,
  //     });
  //     console.log("image en switch", image);
  //     break;
  //   default:
  //     console.log("slider en el switch", slider);
  // }

  return (
    <View>
      

      {slides &&
        slides.map((sl, idx) => (
          <View key={idx}>
            <Text>{sl.title}</Text>
            <Image style={styles.image} source={sl.image} />
            <Text>{sl.description}</Text>
          </View>
        ))}

    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 500,
    marginTop: 30,
    resizeMode: "cover",
    // width: Dimensions.get('screen').width,
    width: 300,
  },
});

export default Slider;

// (slider === 0) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/arroyo.jpg")}
//       />
//     </View>
//   )}
// (slider === 1) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/arroyo2.jpg")}
//       />
//     </View>
//   )}
// (slider === 2) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/canchita-de-futbol.jpg")}
//       />
//     </View>
//   )}
// (slider === 3) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/jakob.jpg")}
//       />
//     </View>
//   )}
// (slider === 4) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/jakob1.jpg")}
//       />
//     </View>
//   )}
// (slider === 5) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/lago-frey.jpg")}
//       />
//     </View>
//   )}
// (slider === 6) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/mirada-del-doctor.jpg")}
//       />
//     </View>
//   )}

//   // loading effect
// (slider === 7) && (
//     <View>
//       <Text> picture numbre:{slider}</Text>
//       <Image
//         style={styles.image}
//         source={require("../../assets/landscapes/paso-de-las-nubes.jpg")}
//       />
//     </View>
//   )}

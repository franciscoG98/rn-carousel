import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/Footer'

const TabOneScreen = () => {

  return (
    <View style={styles.container}>
      <Carousel />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default TabOneScreen;

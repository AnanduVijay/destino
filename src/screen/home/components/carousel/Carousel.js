import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Carousel.styles';

const Carousel = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.placeImage}
          source={require('../../../../assets/images/Kuching.jpg')}
        />
      </TouchableOpacity>
      <Text style={styles.placeText}>Kuching</Text>
      <Text style={styles.countryText}>Malayia</Text>
    </View>
  );
};

export default Carousel;

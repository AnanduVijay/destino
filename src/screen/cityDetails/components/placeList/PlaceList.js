import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './PlaceList.styles';

const PlaceList = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image
          style={styles.placeImage}
          source={require('../../../../assets/images/Kuching.jpg')}
        />
        <View style={styles.placeDetails}>
          <Text style={styles.cityTitle}>Bali,Indonesia</Text>
          <Text style={styles.placeTite}>Uluwatu Temple</Text>
        </View>
      </View>

      <View style={styles.priceDetails}>
        <Text style={styles.cityTitle}>$5-$25</Text>
        <Text style={styles.cityTitle}>⭐4.5</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceList;

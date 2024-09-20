import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './ActivityCarousel.styles';

const ActivityCarousel = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.activityImage}
          source={require('../../../../assets/images/Activity.png')}
        />
      </TouchableOpacity>
      <Text style={styles.activityText}>Yoga</Text>
    </View>
  );
};

export default ActivityCarousel;

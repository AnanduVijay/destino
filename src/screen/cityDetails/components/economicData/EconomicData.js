import {View, Text} from 'react-native';
import React from 'react';
import styles from './EconomicData.styles';
const EconomicData = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>8,035k+</Text>
        <Text style={styles.subText}>Population</Text>
      </View>
      <Text style={styles.dividerText}>|</Text>
      <View>
        <Text style={styles.mainText}>Thai/Sainamese</Text>
        <Text style={styles.subText}>Language</Text>
      </View>
      <Text style={styles.dividerText}>|</Text>

      <View>
        <Text style={styles.mainText}>Thai Baht</Text>
        <Text style={styles.subText}>Currency</Text>
      </View>
    </View>
  );
};

export default EconomicData;

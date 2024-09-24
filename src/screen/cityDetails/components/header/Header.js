import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Header.styles';
import {ArrowLeftIcon, ArrowPathIcon} from 'react-native-heroicons/solid';
const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <ArrowLeftIcon color={'black'} size={20} />
      </TouchableOpacity>
      <Text style={styles.titleText}>City Details</Text>
      <TouchableOpacity style={styles.button}>
        <ArrowPathIcon color={'black'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

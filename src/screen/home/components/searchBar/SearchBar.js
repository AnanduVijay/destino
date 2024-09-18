import {TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  const [text, onChangeText] = useState('search city...');
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="search-outline" size={30} color="#000" />
      <TextInput
        style={styles.inputText}
        value={text}
        onChangeText={onChangeText}
      />
    </TouchableOpacity>
  );
};

export default SearchBar;

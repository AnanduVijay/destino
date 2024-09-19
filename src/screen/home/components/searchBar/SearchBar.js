import {TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchBar.styles';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const SearchBar = () => {
  const [text, onChangeText] = useState('Search city...');
  return (
    <TouchableOpacity style={styles.container}>
      <MagnifyingGlassIcon size={30} color={'#000'} />
      <TextInput
        style={styles.inputText}
        value={text}
        onChangeText={onChangeText}
      />
    </TouchableOpacity>
  );
};

export default SearchBar;

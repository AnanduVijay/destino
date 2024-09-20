import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReadMore = ({text, targetLines = 1}) => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = e => {
    const {lines} = e.nativeEvent;
    setLengthMore(lines.length > targetLines);
  };

  return (
    <View style={styles.container}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : targetLines}
        style={styles.text}>
        {text}
      </Text>
      {lengthMore && (
        <Text onPress={toggleNumberOfLines} style={styles.toggleText}>
          {textShown ? 'Read Less' : 'Read More'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 5},
  text: {
    fontSize: 14,
    color: 'grey',
  },
  toggleText: {
    color: 'black',
    marginTop: 5,
  },
});

export default ReadMore;

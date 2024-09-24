import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './DetailsScreen.styles';
import DetailsCard from './components/detailsCard/DetailsCard';
import ActivityCarousel from './components/carousel/ActivityCarousel';
import PlaceList from './components/placeList/PlaceList';
import Header from './components/header/Header';
const DetailsScreen = ({navigation}) => {
  const handleBackButton = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Header onPress={handleBackButton} />
      <DetailsCard />
      <ScrollView
        style={styles.activityContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Things to do</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ActivityCarousel />
          <ActivityCarousel />
          <ActivityCarousel />
          <ActivityCarousel />
          <ActivityCarousel />
          <ActivityCarousel />
        </ScrollView>
        <Text style={styles.titleText}>Must visit</Text>
        <PlaceList />
        <PlaceList />
        <PlaceList />
        <PlaceList />
        <PlaceList />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

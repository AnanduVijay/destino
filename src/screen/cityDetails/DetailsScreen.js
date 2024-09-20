import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './DetailsScreen.styles';
import DetailsCard from './components/detailsCard/DetailsCard';
import ActivityCarousel from './components/carousel/ActivityCarousel';
import PlaceList from './components/placeList/PlaceList';
const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <DetailsCard />
      <ScrollView style={styles.activityContainer}>
        <Text style={styles.titleText}>Things to do</Text>
        <ScrollView horizontal={true}>
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

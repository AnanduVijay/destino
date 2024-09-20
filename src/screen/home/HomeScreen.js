import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import SearchBar from './components/searchBar/SearchBar';
import Carousel from './components/carousel/Carousel';
import PlaceCard from './components/placeCard/PlaceCard';

const HomeScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('city Details');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hi,Vetrick!</Text>
      <Text style={styles.titleText}>Where do You {'\n'}want to go?</Text>
      <Text style={styles.sloganText}>
        We filter out the a best place for your next vacation
      </Text>
      <SearchBar />

      {/* <View style={styles.carouselContainer}> */}
      <ScrollView horizontal={true} style={styles.carouselContainer}>
        <Carousel onPress={handlePress} />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />

        <Carousel />
        <Carousel />
      </ScrollView>
      {/* </View> */}
      <ScrollView style={styles.placeContainer}>
        <Text style={styles.placeTitle}>You might like!</Text>
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

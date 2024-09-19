import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DetailsCard.styles';
import {MapPinIcon, HeartIcon} from 'react-native-heroicons/solid';
import EconomicData from '../economicData/EconomicData';
import ReadMore from '@fawazahmed/react-native-read-more';
const DetailsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.placeImage}
          source={require('../../../../assets/images/Kuching.jpg')}
        />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.nameCard}>
          <Text style={{color: 'black', fontWeight: '900', fontSize: 20}}>
            Bangkok
          </Text>
          <Text style={{color: 'grey'}}>Thailand</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.mapButton}>
            <MapPinIcon size={25} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <HeartIcon size={20} color={'#fff'} />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                marginRight: 15,
              }}>
              Saved
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.descriptionContainer} seeMoreStyle={{color: '#000'}}>
        <ReadMore numberOfLines={2} style={{color: 'black'}}>
          Bangkok, Thailand's capital, is a large city known for ornate shrines
          and vibrant street life. The boat-filled Chao Phraya River feeds its
          network of canals, flowing past the Rattanakosin royal district, home
          to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is
          Wat Pho Temple with an enormous reclining Buddha and, on the opposite
          shore.
        </ReadMore>
      </View>
      <View>
        <EconomicData />
      </View>
    </View>
  );
};

export default DetailsCard;

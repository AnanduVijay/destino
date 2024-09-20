import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  placeDetails: {
    marginRight: 0,
  },
  placeImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  cityTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  placeTite: {
    color: 'grey',
  },
  priceDetails: {
    alignItems: 'flex-end',
  },
});

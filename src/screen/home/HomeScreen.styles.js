import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E67F5',
    padding: 10,
  },
  welcomeText: {
    color: '#fff',
    marginTop: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  sloganText: {
    color: '#fff',
    marginBottom: 30,
    marginTop: 10,
  },
  carouselContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  placeContainer: {
    width: '100%',
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 20,
    marginTop: 25,
  },
  placeTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

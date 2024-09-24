import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    padding: 20,
    marginTop: 10,
  },
  imageContainer: {
    backgroundColor: '#ffff',
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    marginLeft: 20,
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeImage: {
    width: 70,
    height: 70,
    borderWidth: 4,
    borderColor: '#ffff',
    borderRadius: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  mapButton: {
    backgroundColor: '#FAC82E',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
  },
  favoriteButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  descriptionContainer: {
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderColor: 'grey',
  },
});

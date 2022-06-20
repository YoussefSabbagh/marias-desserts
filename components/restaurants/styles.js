import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    // aspectRatio: 2 / 1,
  },
  like: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  info: {
    marginBottom: 15,
    paddingVertical: 10,
  },
  restauranName: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '900',
  },
  restaurantInfo: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  delivery: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '600',
  },
  data: {
    fontSize: 12,
    color: 'red',
  },
  rating: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#ded',
  },
  ratingData: {
    fontSize: 12,
    fontWeight: '900',
  },
  spiner: {
    marginTop: 30,
  },
  error: {
    fontSize: 42,
    textAlign: 'center',
    color: 'red',
  },
});

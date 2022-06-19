import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { SHADOWS } from '../../../constants';

export const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.imageContainer]}>
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      </View>

      <Text> {restaurant.name}</Text>
      <Text> Address: {restaurant.location.address1}</Text>
      <Text> Rating: {restaurant.rating}</Text>
    </View>
  );
};

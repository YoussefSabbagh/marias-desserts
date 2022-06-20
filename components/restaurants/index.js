import { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

import useRestaurant from '../../hooks/useRestaurant';

export const Restaurant = ({ searchParams }) => {
  const [{ data, error, loading }, searchRestaurant] = useRestaurant();

  useEffect(() => {
    searchRestaurant(searchParams);
  }, [searchParams]);

  if (loading) {
    return (
      <View style={styles.spiner}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.spiner}>
        <Text style={[styles.error]}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <RestaurantImage image={item.image_url} />
              <RestaurantInfo restaurant={item} />
            </>
          );
        }}
      />
    </View>
  );
};

const RestaurantInfo = ({ restaurant }) => {
  return (
    <View style={styles.info}>
      <Text style={styles.restauranName}> {restaurant.name}</Text>
      <View style={styles.restaurantInfo}>
        <View>
          <View style={styles.delivery}>
            <Text style={styles.label}> Phone: </Text>
            <Text style={styles.data}> {restaurant.phone}</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.label}> Price: </Text>
            <Text style={styles.data}>{restaurant.price}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <Text style={styles.label}> {restaurant.review_count} reviews</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingData}> {restaurant.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  const [like, setLike] = useState(false);

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Pressable style={styles.like} onPress={() => setLike(!like)}>
        {like ? (
          <FontAwesome name="heart" size={25} color="red" />
        ) : (
          <FontAwesome name="heart-o" size={25} color="white" />
        )}
      </Pressable>
    </View>
  );
};

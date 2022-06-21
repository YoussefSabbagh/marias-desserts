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

import { useStore } from '../../hooks/contexts/Store';
import useRestaurant from '../../hooks/useRestaurant';

export const Restaurant = () => {
  const { location, activeCategory, activeTab } = useStore();
  const [{ data, error, loading }, searchRestaurant] = useRestaurant();

  const searchParams = {
    term: activeCategory,
    location,
    activeTab,
    limit: 10,
  };

  useEffect(() => {
    searchRestaurant(searchParams);
  }, [location, activeCategory, activeTab]);

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
          {/* <View style={styles.delivery}>
            <Text style={styles.label}> Phone: </Text>
            <Text style={styles.data}> {restaurant.phone}</Text>
          </View> */}
          <View style={styles.delivery}>
            <Text style={styles.label}> Price: </Text>
            <Text style={styles.data}>{restaurant.price}</Text>
          </View>
          {/* <View style={styles.delivery}>
            <Text style={styles.label}> Address: </Text>
            <Text style={styles.data}>{restaurant.location.city}</Text>
          </View> */}
          <View style={styles.delivery}>
            <Text style={styles.label}> Services: </Text>
            <Text style={styles.data}>
              {restaurant.transactions.map((transaction) => {
                return <Text key={transaction}> {transaction} </Text>;
              })}
            </Text>
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

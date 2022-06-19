import { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
// import useRestaurant from '../../hooks/useRestaurant';
// import { COLORS } from '../../../constants';
// import { RestaurantCard } from './restaurantCard';

export const Restaurant = ({ searchParams }) => {
  // const [{ data, error, loading }, searchRestaurant] = useRestaurant();

  // useEffect(() => {
  //   searchRestaurant(searchParams);
  // }, [searchParams]);

  // if (loading) {
  //   return (
  //     <View style={styles.spiner}>
  //       <ActivityIndicator size="large" color={COLORS.blue} />
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={styles.spiner}>
  //       <Text style={[styles.error]}>{error}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Restaurants</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      /> */}
    </View>
  );
};

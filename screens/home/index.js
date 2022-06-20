import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { styles } from './homeStyles';
import HeaderTab from '../../components/headerTab';
import { SearchBar } from '../../components/searchBar'; // busca por localidad
// import { Search } from '../../components/search'; // Busca por categorias
import Categories from '../../components/categories';
import { Restaurant } from '../../components/restaurants';

import { localRestaurants } from '../../assets/data/restaurantData';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Pasta');
  const [location, setLocation] = useState('Austin,TX');

  const searchParams = {
    term: activeCategory,
    location,
    limit: 5,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderTab />
        {/* <Search setActiveCategory={setActiveCategory} /> */}
        <SearchBar setLocation={setLocation} />
      </View>
      <Categories />
      <Restaurant searchParams={searchParams} />
    </SafeAreaView>
  );
};

export default Home;

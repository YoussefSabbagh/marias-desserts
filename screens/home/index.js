import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { styles } from './homeStyles';
import HeaderTab from '../../components/headerTab';
import { SearchBar } from '../../components/searchBar'; // busca por localidad
// import { Search } from '../../components/search'; // Busca por categorias
import Categories from '../../components/categories';
import { Restaurant } from '../../components/restaurants';

import { useStore } from '../../hooks/contexts/Store';

const Home = () => {
  const { activeCategory, location } = useStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderTab />
        {/* <Search setActiveCategory={setActiveCategory} /> */}
        <SearchBar />
      </View>
      <Categories />
      <Restaurant />
    </SafeAreaView>
  );
};

export default Home;

import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { styles } from './homeStyles';
import HeaderTab from '../../components/headerTab';
import SearchBar from '../../components/searchBar';
import Categories from '../../components/categories';
import { Restaurant } from '../../components/restaurants';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurant />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

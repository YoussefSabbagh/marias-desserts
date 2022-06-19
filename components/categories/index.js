import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './categoriesStyles';
import { categoriesData } from '../../assets/data/categories';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}> Categories</Text>
      <ScrollView
        style={styles.banner}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category) => (
          <View key={category.name} style={styles.card}>
            <Image style={styles.image} source={category.image} />
            <Text style={styles.name}> {category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

export const Search = ({ setActiveCategory }) => {
  const [categoryInput, setCategoryInput] = useState('');

  const handleCategory = () => {
    /**
     * TODO: Validar la entrada de texto para que sea una categoria valida
     */
    setActiveCategory((p) => categoryInput);
    setCategoryInput('');
  };

  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        placeholder="Seach ..."
        onChangeText={(text) => setCategoryInput(text)}
        onEndEditing={handleCategory}
        value={categoryInput}
      />
      <Pressable onPress={handleCategory}>
        <FontAwesome name="search" size={20} />
      </Pressable>
    </View>
  );
};

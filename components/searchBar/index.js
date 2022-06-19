import { useState } from 'react';
import { Text, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './searchBarStyles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftIcon}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightIcon}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './homeStyles';
import HeaderTab from '../../components/headerTab';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderTab />
    </SafeAreaView>
  );
};

export default Home;

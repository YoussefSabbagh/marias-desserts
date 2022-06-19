import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#eee',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
});

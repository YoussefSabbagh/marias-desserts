import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerTabContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperCustom: {
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
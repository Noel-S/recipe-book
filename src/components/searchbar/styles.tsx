import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    width: '100%',
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  searchbar: {
    height: '100%',
    padding: 0,
    fontSize: 17,
    lineHeight: 20,
    paddingHorizontal: 8,
    flex: 1,
  },
  dictaionButton: {
    width: 19,
  },
});

export default styles;

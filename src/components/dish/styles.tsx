import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  trendingContainer: {
    width: 110,
  },
  recentContainer: {
    width: 160,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  trendingImage: {
    height: 110,
  },
  recentImage: {
    height: 195,
  },
  title: {
    color: '#fff',
    textTransform: 'capitalize',
    marginVertical: 12,
  },
  trendingTitle: {
    fontSize: 14,
    lineHeight: 17,
  },
  recentTitle: {
    fontSize: 18,
    lineHeight: 22,
  },
  separator: {
    width: 21,
  },
});

export default styles;

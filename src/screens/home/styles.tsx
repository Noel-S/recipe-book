import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282828',
    paddingTop: (StatusBar.currentHeight ?? 0) + 28,
    paddingHorizontal: 16,
  },
  titles: {
    fontSize: 21,
    lineHeight: 25,
    color: '#F91A81',
    textTransform: 'uppercase',
    marginVertical: 15,
  },
  trendingScrollview: {
    height: 168,
  },
  recentScrollview: {
    height: 262,
  },
});

export default styles;

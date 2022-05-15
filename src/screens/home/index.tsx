import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import Dish from '../../components/dish';
import Separator from '../../components/dish/separator';
import SearchBar from '../../components/searchbar';
import styles from './styles';

type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: string;
    type: 'trending' | 'recent';
    title: string;
    image: string;
  };
};

const data = [
  {
    name: 'Peperoni Pizza Pockets',
    key: 'item1',
    image:
      'https://www.readersdigest.ca/wp-content/uploads/2010/12/pepperoni-pizza-scaled.jpg',
  },
  {
    name: 'Chocolate Chip',
    key: 'item2',
    image:
      'https://www.crazyforcrust.com/wp-content/uploads/2019/05/Giant-Chocolate-Chip-Cookies-4-640x960.jpg',
  },
  {
    name: 'Pancake Cups',
    key: 'item3',
    image:
      'https://bakingbites.com/wp-content/uploads/2017/02/pancakecups-1.jpg',
  },
  {
    name: 'Meatball Sub Bake',
    key: 'item4',
    image:
      'https://www.thechunkychef.com/wp-content/uploads/2017/09/Meatball-Sub-Casserole-pan-680x910.jpg',
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.titles}>Trendings</Text>
      <View style={styles.trendingScrollview}>
        <FlatList
          horizontal={true}
          data={data}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <Dish
              key={item.key}
              type="trending"
              imageSource={{uri: item.image}}
              title={item.name}
              onPress={() => {
                navigation.navigate('Detail', {
                  id: 'ID',
                  type: 'recent',
                  title: 'Detail',
                  image:
                    'https://www.readersdigest.ca/wp-content/uploads/2010/12/pepperoni-pizza-scaled.jpg',
                });
              }}
            />
          )}
        />
      </View>
      <Text style={styles.titles}>Recent</Text>
      <View style={styles.recentScrollview}>
        <FlatList
          horizontal={true}
          data={data}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <Dish
              key={item.key}
              type="recent"
              imageSource={{uri: item.image}}
              title={item.name}
              onPress={() => {
                navigation.navigate('Detail', {
                  id: 'ID',
                  type: 'recent',
                  title: 'Detail',
                  image:
                    'https://www.readersdigest.ca/wp-content/uploads/2010/12/pepperoni-pizza-scaled.jpg',
                });
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

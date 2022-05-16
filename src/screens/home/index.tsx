import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import Dish from '../../components/dish';
import Separator from '../../components/dish/separator';
import SearchBar from '../../components/searchbar';
import Props from '../../navigation/types';
import {Item} from '../detail/types';
import styles from './styles';

const data: Array<Item> = [
  {
    id: 'item1',
    name: 'Peperoni Pizza Pockets',
    image:
      'https://www.readersdigest.ca/wp-content/uploads/2010/12/pepperoni-pizza-scaled.jpg',
    ingredients: [{name: 'name', quantity: {value: '1', type: undefined}}],
    servings: 3,
  },
  {
    id: 'item2',
    name: 'Chocolate Chip',
    image:
      'https://www.crazyforcrust.com/wp-content/uploads/2019/05/Giant-Chocolate-Chip-Cookies-4-640x960.jpg',
    ingredients: [{name: 'name', quantity: {value: '1', type: 'cup'}}],
    servings: 3,
  },
  {
    id: 'item3',
    name: 'Pancake Cups',
    image:
      'https://bakingbites.com/wp-content/uploads/2017/02/pancakecups-1.jpg',
    ingredients: [{name: 'name', quantity: {value: '1/2', type: 'cup'}}],
    servings: 3,
  },
  {
    id: 'item4',
    name: 'Meatball Sub Bake',
    image:
      'https://www.thechunkychef.com/wp-content/uploads/2017/09/Meatball-Sub-Casserole-pan-680x910.jpg',
    ingredients: [{name: 'name', quantity: {value: '2', type: 'cup'}}],
    servings: 3,
  },
];

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
              key={item.id}
              type="trending"
              imageSource={{uri: item.image}}
              title={item.name}
              onPress={() => {
                navigation.navigate('Detail', {
                  type: 'trending',
                  item: item,
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
              key={item.id}
              type="recent"
              imageSource={{uri: item.image}}
              title={item.name}
              onPress={() => {
                navigation.navigate('Detail', {
                  type: 'recent',
                  item: item,
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

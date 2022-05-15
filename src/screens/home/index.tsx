import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import SearchBar from '../../components/searchbar';

type RootStackParamList = {
  Home: undefined;
  Detail: {id: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Home = ({navigation}: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#282828',
        paddingHorizontal: 16,
        paddingVertical: 28,
      }}>
      <SearchBar />
      <Text style={{color: '#fff'}}>Detail</Text>
      <Button
        onPress={() => {
          navigation.navigate('Detail', {id: 'ID'});
        }}
        title="Press Me"
      />
    </View>
  );
};

export default Home;

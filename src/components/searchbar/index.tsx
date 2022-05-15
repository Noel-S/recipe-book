import * as React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbar}
        placeholder="What do you want to eat?"
        placeholderTextColor={'#fff'}
      />
    </View>
  );
};

export default SearchBar;

import * as React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SearchSVG from '../../assets/icons/search.svg';
import DictationSVG from '../../assets/icons/dictation.svg';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchSVG />
      <TextInput
        style={styles.searchbar}
        placeholder="What do you want to eat?"
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity style={styles.dictaionButton}>
        <DictationSVG />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

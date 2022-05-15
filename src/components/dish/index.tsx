import * as React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
  type: 'trending' | 'recent';
  onPress: (event: GestureResponderEvent) => void | undefined;
  title: string;
  imageSource: ImageSourcePropType;
};

const Dish = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.type === 'trending'
          ? styles.trendingContainer
          : styles.recentContainer,
      ]}
      onPress={props.onPress}>
      <Image
        source={props.imageSource}
        style={[
          styles.image,
          props.type === 'trending' ? styles.trendingImage : styles.recentImage,
        ]}
      />
      <Text
        style={[
          styles.title,
          props.type === 'trending' ? styles.trendingTitle : styles.recentTitle,
        ]}
        numberOfLines={2}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Dish;

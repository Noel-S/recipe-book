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
  let containerStyle = styles.trendingContainer;
  let imageStyle = styles.trendingImage;
  let titleStyle = styles.trendingTitle;
  if (props.type === 'recent') {
    containerStyle = styles.trendingContainer;
    imageStyle = styles.trendingImage;
    titleStyle = styles.trendingTitle;
  }
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={props.onPress}>
      <Image source={props.imageSource} style={[styles.image, imageStyle]} />
      <Text style={[styles.title, titleStyle]} numberOfLines={2}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Dish;

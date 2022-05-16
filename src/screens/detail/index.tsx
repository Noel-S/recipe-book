import * as React from 'react';
import {
  // ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Animated,
  // Dimensions,
} from 'react-native';
import Props from '../../navigation/types';

import ExitSVG from '../../assets/icons/exit.svg';
import ShareSVG from '../../assets/icons/share.svg';
import HeartSVG from '../../assets/icons/heart.svg';

const MIN_HEIGHT = 160 + (StatusBar.currentHeight ?? 0);

// const Header = ({type, name}: {type: string; name: string}) => {
//   return (
//     <View
//       style={{
//         // backgroundColor: 'red',
//         height: 160 + (StatusBar.currentHeight ?? 0),
//         width: '100%',
//         paddingHorizontal: 26,
//         paddingBottom: 42,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//       }}>
//       <Text style={{fontSize: 18, lineHeight: 22, textTransform: 'uppercase'}}>
//         {type}
//       </Text>
//       <Text style={{fontSize: 25, lineHeight: 30}}>{name}</Text>
//     </View>
//   );
// };

const Detail = (props: Props) => {
  const scrolling = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{height: '100%', backgroundColor: '#252525'}}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y;
          // console.log(y, MIN_HEIGHT);
          if (y <= MIN_HEIGHT) {
            scrolling.setValue(event.nativeEvent.contentOffset.y);
          }
        }}
        contentContainerStyle={{
          padding: 21,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginTop: 385,
            backgroundColor: '#252525',
          }}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 24,
              color: '#fff',
              marginBottom: 6,
            }}>
            Ingredients
          </Text>
          <Text style={{fontSize: 20, lineHeight: 24, color: '#fff'}}>
            for {props.route.params.item.servings} servings
          </Text>

          {props.route.params.item.ingredients.map((ingredient, i) => (
            <View
              key={`ingredient${i}`}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 16,
                borderBottomColor: '#3B3B3B',
                borderBottomWidth:
                  i !== props.route.params.item.ingredients.length - 1 ? 1 : 0,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  color: '#fff',
                }}>
                {ingredient.name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 19,
                  color: '#fff',
                }}>
                {ingredient.quantity.value}{' '}
                {ingredient.quantity.type ? ingredient.quantity.type : ''}
              </Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={{
          height: scrolling.interpolate({
            inputRange: [0, 385 - MIN_HEIGHT],
            outputRange: [385, MIN_HEIGHT],
          }),
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <ImageBackground
          source={{uri: props.route.params.item.image}}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(43, 41, 41, 0.53)',
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 64,
            marginTop: StatusBar.currentHeight,
            paddingStart: 28,
            paddingEnd: 22,
          }}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={props.navigation.goBack}>
            <ExitSVG />
          </TouchableOpacity>

          <View style={{flex: 1}} />

          <TouchableOpacity style={{padding: 5}}>
            <ShareSVG />
          </TouchableOpacity>

          <View style={{width: 15}} />

          <TouchableOpacity style={{padding: 5}}>
            <HeartSVG />
          </TouchableOpacity>
        </View>

        <View style={{paddingBottom: 42, paddingHorizontal: 26}}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 22,
              textTransform: 'uppercase',
              color: '#fff',
            }}>
            {props.route.params.type}
          </Text>
          <Text style={{fontSize: 25, lineHeight: 30, color: '#fff'}}>
            {props.route.params.item.name}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Detail;

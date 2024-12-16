import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Button } from '../components/Onboarding/Button'
import { Pagination } from '../components/Onboarding/Pagination';
import { ThemeContext } from '../theme/ThemeContext';
import { data } from '../data/Data';

const RenderItem = ({ item, index, x }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const theme = useContext(ThemeContext)
 

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );

    return {
      width: SCREEN_WIDTH * 0.8,
      height: SCREEN_WIDTH * 0.8,
      opacity: opacityAnimation,
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );

    return {
      opacity: opacityAnimation,
      transform: [{ translateY: translateYAnimation }],
    };
  });

  return (
    <View style={[styles.itemContainer, {backgroundColor: theme.colors.background, width: SCREEN_WIDTH }]}>
      <Animated.Image source={item.image} style={imageAnimatedStyle} />

      <Animated.View style={textAnimatedStyle}>
        <Text style={[styles.itemTitle,{  color: theme.colors.color,}]}>{item.title}</Text>
        <Text style={[styles.itemText,{  color: theme.colors.color,}]}>{item.text}</Text>
      </Animated.View>
    </View>
  );
};

export default function OnBoardingScreen() {
  const theme = useContext(ThemeContext)

 
  
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const flatListRef = useAnimatedRef();

  const flatListIndex = useSharedValue(0);
  const x = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    flatListIndex.value = viewableItems[0].index ?? 0;
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[styles.container,{backgroundColor: theme.colors.background,}]}>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <RenderItem index={index} item={item} x={x} />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
      />

      <View style={styles.footerContainer}>
        <Pagination data={data} screenWidth={SCREEN_WIDTH} x={x} />

        <Button
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  itemContainer: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemTitle: {
  
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemText: {
  
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 30,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
});

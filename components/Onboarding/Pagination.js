import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ThemeContext } from '../../theme/ThemeContext';

const PaginationComp = ({ index, x, screenWidth }) => {
  const theme = useContext(ThemeContext)


  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [10, 20, 10],
      Extrapolate.CLAMP
    );

    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  return <Animated.View style={[styles.dots, animatedDotStyle,{  backgroundColor: theme.colors.primary,}]} />;
};

export function Pagination({ data, screenWidth, x }) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <PaginationComp
          key={item.id}
          index={index}
          x={x}
          screenWidth={screenWidth}
        />
      ))}
    </View>
  );
}

  
const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
  
    marginHorizontal: 10,
  },
});

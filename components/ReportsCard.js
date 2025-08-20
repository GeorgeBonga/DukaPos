import React, { useContext } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../theme/ThemeContext';
const ReportsCard = ({ features }) => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.backgound }]}>
      {features.map((feature) => {
        const scale = useSharedValue(1);

        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));

        const handlePressIn = () => {
          scale.value = 0.95;
        };

        const handlePressOut = () => {
          scale.value = withSpring(1);
        };

        const handlePress = () => {
          const randomChoice = Math.floor(Math.random() * 3);

          if (randomChoice === 0) {
            navigation.navigate('SalesReport');
          } else if (randomChoice === 1) {
            navigation.navigate('ExpenseReport');
          } else {
            Alert.alert(feature.name, 'Component is coming soon');
          }
        };

        return (
          <TouchableWithoutFeedback
            key={feature.id}
            onPress={handlePress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <Animated.View
              style={[
                styles.card,
                { backgroundColor: theme.colors.minorcolor },
                animatedStyle,
              ]}>
              <Ionicons
                name={feature.icon}
                size={30}
                color={theme.colors.color}
              />
              <Text style={[styles.featureName, { color: theme.colors.color }]}>
                {feature.name}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default ReportsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',
  },
  card: {
    width: 96,
    height: 96,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  featureName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
  },
});

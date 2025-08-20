import React, { useContext } from "react";
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../theme/ThemeContext";

const HomeFeatureGrid = ({ features }) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.grid, { backgroundColor: theme.colors.background }]}>
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
            navigation.navigate("SalesReport");
          } else if (randomChoice === 1) {
            navigation.navigate("ExpenseReport");
          } else {
            Alert.alert(feature.name, "Component is coming soon");
          }
        };

        return (
          <TouchableWithoutFeedback
            key={feature.id}
            onPress={handlePress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View
              style={[
                styles.card,
                { backgroundColor: theme.colors.minorcolor },
                animatedStyle,
              ]}
            >
              <View style={styles.iconWrapper}>
                <Ionicons
                  name={feature.icon}
                  size={28}
                  color={theme.colors.color}
                />
                <View style={styles.rightSection}>
                  <Text
                    style={[styles.countText, { color: theme.colors.color }]}
                  >
                    10
                  </Text>
                  <Feather
                    color={theme.colors.color}
                    name="chevron-right"
                    size={18}
                  />
                </View>
              </View>
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

export default HomeFeatureGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  countText: {
    fontSize: 16,
    fontWeight: "600",
  },
  featureName: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "500",
  },
});

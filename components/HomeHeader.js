import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserData from "../utils/UserData";
import { ThemeContext } from "../theme/ThemeContext";

const HomeHeader = () => {
  const theme = useContext(ThemeContext);
  const randomUser = UserData[Math.floor(Math.random() * UserData.length)];
  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View
        style={[
          styles.userContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <Text style={[styles.welcomeText, { color: theme.colors.color }]}>
          Welcome back
        </Text>
        <Text style={[styles.userName, { color: theme.colors.color }]}>
          {randomUser.name}
        </Text>
        <Text style={[styles.priority, { color: theme.colors.color }]}>
          Priority
        </Text>
      </View>

      <Image
        source={randomUser.image}
        style={[
          styles.userImage,
          {
            width: screenWidth * 0.18,
            height: screenWidth * 0.18,
            borderRadius: (screenWidth * 0.18) / 2,
          },
        ]}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  userContainer: {
    flexDirection: "column",
    alignItems: "start",
    marginLeft: 10,
  },
  userImage: {
    marginRight: 12,
    marginLeft: 8,
    resizeMode: "cover",
  },
  welcomeText: {
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priority: {
    color: "#FFD700",
    marginTop: 4,
  },
});

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("ScanProducts")}>
            <Ionicons name="scan" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconWrapper}>
          <Ionicons name="search-outline" size={28} color="black" />
        </View>
      </View>
    </View>
  );
};


export default ProductHeader;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B5563",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  iconWrapper: {
    marginHorizontal: 12,
  },
});


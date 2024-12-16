import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Replacing react-native-vector-icons
import SalesProductList from "../components/SalesProductList";
import { ProductSummaryBox } from "../components/ProductSummaryBox";
import { ThemeContext } from "../theme/ThemeContext";
const productData = [
  {
    id: "1",
    name: "Bananas",
    available: 234,
    sold: 50,
    price: 1.5,
    imageUrl: "https://images.unsplash.com/photo-1603052875925-e3b035b5c17f",
  },
  {
    id: "2",
    name: "Prints",
    sold: 20,
    price: 15,
    imageUrl: "https://images.unsplash.com/photo-1592829467830-b86fa740287d",
  },
  {
    id: "3",
    name: "Nduma",
    available: 34,
    sold: 10,
    price: 5,
    lowStock: true,
    imageUrl: "https://images.unsplash.com/photo-1560813424-b8cce63256c4",
  },
  {
    id: "4",
    name: "Nails",
    available: 234,
    sold: 100,
    price: 3,
    imageUrl: "https://images.unsplash.com/photo-1600744941565-b9b083299ca1",
  },
  {
    id: "5",
    name: "Meat",
    available: 24,
    sold: 5,
    price: 8,
    imageUrl: "https://images.unsplash.com/photo-1603708546177-8ad8ed2c9a4e",
  },
  {
    id: "6",
    name: "Guavas",
    available: 234,
    sold: 30,
    price: 2,
    imageUrl: "https://images.unsplash.com/photo-1575358371530-ff4fa0e515eb",
  },
  {
    id: "7",
    name: "Pineapples",
    available: 234,
    sold: 80,
    price: 1.8,
    imageUrl: "https://images.unsplash.com/photo-1572347245185-30cdb6b41e68",
  },
  {
    id: "8",
    name: "Bread",
    available: 23,
    sold: 10,
    price: 2.5,
    imageUrl: "https://images.unsplash.com/photo-1612144490143-d9f0e8bbd824",
  },
  {
    id: "9",
    name: "Mango",
    available: 4,
    sold: 2,
    price: 3.2,
    imageUrl: "https://images.unsplash.com/photo-1568151849-f5666e4db320",
  },
];

const SalesHistory = () => {

  const theme = useContext(ThemeContext)
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <View style={[styles.header,{backgroundColor:theme.colors.background}]}>
        <Text style={[styles.headerTitle,{color:theme.colors.color}]}>Sales</Text>
      </View>

      <View style={styles.summaryBoxContainer}>
        <ProductSummaryBox
          title="Products Sold"
          value="12008"
          percentage="+8.00%"
          color={theme.colors.primary}
        />
        <ProductSummaryBox
          title="Amount"
          value="KES2,350"
          percentage="+2.34%"
          color={theme.colors.primary}
        />
      </View>

      <View style={[styles.subHeader,{backgroundColor:theme.colors.background}]}>
        <Text style={[styles.subHeaderTitle,{color:theme.colors.color}]}>Sales</Text>
        <FontAwesome5 name="sliders-h" size={24} color={theme.colors.color} />
      </View>

      <SalesProductList products={productData} />
    </View>
  );
};

export default SalesHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
 
  },
  summaryBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  subHeaderTitle: {
    fontSize: 20,
    fontWeight: "600",
 
  },
});



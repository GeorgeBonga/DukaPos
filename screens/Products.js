import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons'; // Using @expo/vector-icons
import Header from '../components/Header';
import { ProductSummaryBox } from '../components/ProductSummaryBox';
import { ProductList } from '../components/ProductList';
import { ThemeContext } from '../theme/ThemeContext';
const productData = [
  { id: '1', name: 'Scans', available: 267, sold: 149 },
  { id: '2', name: 'Prints', available: 124, sold: 87 },
  {
    id: '3',
    name: 'Folder',
    available: 88,
    sold: 27,
    lowStock: true,
  },
  {
    id: '4',
    name: 'Online Transactions',
    available: 450,
    sold: 234,
  },
  { id: '5', name: 'Available', available: 88, sold: 27 },
  { id: '6', name: 'Scans', available: 267, sold: 149 },
  { id: '7', name: 'Prints', available: 124, sold: 87 },
  { id: '8', name: 'Scans', available: 267, sold: 149 },
  { id: '9', name: 'Prints', available: 124, sold: 87 },
];

const Products = () => {
  const theme = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header title="Product" />

      <View
        style={[
          styles.summaryContainer,
          { backgroundColor: theme.colors.background },
        ]}>
        <ProductSummaryBox
          title="Total Products"
          value="12008"
          percentage="+8.00%"
        />
        <ProductSummaryBox
          title="In-hand Products"
          value="2,350"
          percentage="+2.34%"
        />
      </View>
      <View style={styles.overviewHeader}>
        <Text style={[styles.overviewText, { color: theme.colors.color }]}>
          Product Overview
        </Text>
        <FontAwesome name="sliders" size={28} color={theme.colors.color} />
      </View>
      <ProductList products={productData} />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  overviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  overviewText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
});

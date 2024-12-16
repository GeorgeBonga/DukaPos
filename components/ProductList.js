import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';
import { ThemeContext } from '../theme/ThemeContext';

export const ProductList = ({ products }) => {
  const theme = useContext(ThemeContext)
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text style={styles.noProductsText}>No products available</Text>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  noProductsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#6b7280',
    marginTop: 20,
  },
});



import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import SalesItems from './SalesItems';

export const SalesProductList = ({ products }) => {
  return (
    <View style={styles.container}>
      {/* Check if Sales are available */}
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <SalesItems product={item} />}
          keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent} // Add bottom padding
        />
      ) : (
        <Text style={styles.noSalesText}>No Sales available</Text>
      )}
    </View>
  );
};



export default SalesProductList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40, 
  },
  flatListContent: {
    paddingBottom: 20, 
  },
  noSalesText: {
    textAlign: 'center', 
    fontSize: 18, 
    color: '#6B7280', 
    marginTop: 20, 
  },
});

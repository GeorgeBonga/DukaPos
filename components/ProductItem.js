import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../theme/ThemeContext';

export const ProductItem = ({ product }) => {
  const currentDate = new Date().toLocaleDateString();
  const theme =useContext(ThemeContext)

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.minorcolor }]}>
      <View style={styles.content}>
        <Text style={[styles.productName,{color:theme.colors.color}]}>{product.name}</Text>
        <View style={styles.statusContainer}>
          <Text style={[styles.available,{color:theme.colors.color}]}>{product.available}</Text>
          <Text style={[styles.sold,{color:theme.colors.color}]}>{product.sold}</Text>
        </View>
        <Text style={[styles.dateText,{color:theme.colors.color}]}>Date Added: {currentDate}</Text>
      </View>

      {product.lowStock && (
        <Text style={[styles.lowStockText,{color:theme.colors.error}]}>Low Stock</Text>
      )}

      <Ionicons name="chevron-forward-outline" size={20} color="#ccc" />
    </View>
  );
};


export default ProductItem;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
  },
  available: {
    fontSize: 14,
    marginRight: 8,
  },
  sold: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 12,
    marginTop: 4,
  },
  lowStockText: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
    marginRight: 8,
  },
});


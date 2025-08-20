import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SalesItems = ({ product }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={[styles.container, { backgroundColor: product.color }]}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <View style={styles.availability}>
          <Text style={styles.available}>{product.available}</Text>
          <Text style={styles.sold}>{product.sold}</Text>
        </View>
        <Text style={styles.dateText}>Date: {currentDate}</Text>
      </View>

      {product.lowStock && (
        <Text style={styles.lowStockText}>Low Stock</Text>
      )}
    </View>
  );
};


export default SalesItems;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  availability: {
    flexDirection: 'row',
  },
  available: {
    fontSize: 14,
    color: '#10B981',
    marginRight: 16,
  },
  sold: {
    fontSize: 14,
    color: '#F87171',
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  lowStockText: {
    backgroundColor: '#FEE2E2',
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 9999,
    marginRight: 8,
  },
});


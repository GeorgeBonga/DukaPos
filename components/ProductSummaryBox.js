import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../theme/ThemeContext';


export const ProductSummaryBox = ({ title, value, percentage, color }) => {
  const theme = useContext(ThemeContext)
  return (
    <View style={[styles.container,{backgroundColor: theme.colors.minorcolor }]}>
      <Text style={[styles.title,{color:theme.colors.color}]}>{title}</Text>
      <Text style={[styles.value,{color:theme.colors.color}]}>{value}</Text>
      <View style={[styles.percentageBox, { backgroundColor: theme.colors.background }]}>
        <Ionicons name="arrow-up" size={14} color={theme.colors.color} />
        <Text style={[styles.percentage,{color:theme.colors.color}]}>{percentage}</Text>
      </View>
    </View>
  );
};

export default ProductSummaryBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 12,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 8,
  },
  percentageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  percentage: {
    fontSize: 12,
    marginLeft: 4,
  },
});



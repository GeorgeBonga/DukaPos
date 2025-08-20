import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons} from "@expo/vector-icons"

const HomePlanCard = () => {
  return (
    <TouchableOpacity
      onPress={() => {Alert.alert("Coming Soon")}}
      style={styles.card}
    >
      <MaterialIcons name="error-outline" size={20} color="black" />
      <Text style={styles.text}>Free Plan (Left 7 days)</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.icon} />
    </TouchableOpacity>
  );
};


export default HomePlanCard;


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f4f6', 
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  text: {
    marginLeft: 12,
    color: '#2d3748', 
  },
  icon: {
    marginLeft: 'auto',
  },
});


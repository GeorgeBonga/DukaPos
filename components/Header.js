import React, { useContext } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../theme/ThemeContext';

function Header({ title }) { 
  const navigation = useNavigation();
  const theme = useContext(ThemeContext)


  return(
    <View style={[styles.container,{ backgroundColor:theme.colors.background}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={theme.colors.color} />
      </TouchableOpacity>
      <Text style={[styles.title,{ color:theme.colors.color}]}>{title}</Text>
    </View>
  );
};


export default Header;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom:2,
   
  },
  title: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: 'bold',
   
  }
});


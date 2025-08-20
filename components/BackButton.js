import React, { useContext } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from '../theme/ThemeContext';

export default function BackButton({  }) {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext)



  return (
    <TouchableOpacity onPress={()=> navigation.goBack()} style={[styles.container,{ backgroundColor:theme.colors.primary}]}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}


  
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20 ,
    left: 8,
    padding:10,
    borderRadius:50,
  },
  image: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
   
  },
})

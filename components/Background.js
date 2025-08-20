import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';

export default function Background({ children }) {
  const theme = useContext(ThemeContext);


  return (
    <View style={[styles.background,{backgroundColor: theme.colors.background}]}>
    
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={150}
        style={styles.container} 
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
   
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

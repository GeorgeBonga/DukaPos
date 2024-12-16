import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { ThemeContext } from '../theme/ThemeContext';

export default function TextInput({ errorText, description, secureTextEntry, ...props }) {
  const theme = useContext(ThemeContext); 
  const [secureText, setSecureText] = useState(secureTextEntry); 
;

  return (
    <View style={styles.container}>
      <Input
        style={[styles.input,{ backgroundColor: theme.colors.background}]}
        placeholderTextColor={theme.colors.color}
        selectionColor={theme.colors.color} 
        underlineColor="transparent" 
        mode="outlined"
        textColor ={theme.colors.color}
        secureTextEntry={secureText} 
        outlineColor={theme.colors.color} // 
        activeOutlineColor={theme.colors.color} 
        right={
          secureTextEntry && (
            <Input.Icon
              icon={secureText ? 'eye-off' : 'eye'}
              color={theme.colors.color} 
              onPress={() => setSecureText(!secureText)}
            />
          )
        }
        {...props}
      />
      {description && !errorText ? (
        <Text style={[styles.description,{color: theme.colors.color}]}>{description}</Text>
      ) : null}
      {errorText ? <Text style={[styles.error,{color: theme.colors.error}]}>{errorText}</Text> : null}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {

    width: '100%',
    marginVertical: 12,
  },

  description: {
    fontSize: 13,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    paddingTop: 8,
  },
})
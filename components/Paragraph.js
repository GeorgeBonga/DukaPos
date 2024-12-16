import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { ThemeContext } from '../theme/ThemeContext'


export default function Paragraph(props) {
  const theme = useContext(ThemeContext)
  return <Text style={[styles.text,{color:theme.colors.color}]} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})

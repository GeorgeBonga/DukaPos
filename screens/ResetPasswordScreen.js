import React, { useContext, useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import BodyText from '../components/Onboarding/BodyText'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from '../theme/ThemeContext'
export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const theme = useContext(ThemeContext)

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <SafeAreaView

    style={{flex:1, backgroundColor: theme.colors.background }}
  >
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <BodyText>Restore Password</BodyText>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        label=" Send Instructions"
        style={{ marginTop: 16 }}
      />
       
 
    </Background>
    </SafeAreaView>
  )
}

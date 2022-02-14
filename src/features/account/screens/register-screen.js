import React, { useState, useContext } from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { AccountBackgroundTwo, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from '../components/account-styles'
import { AuthenticationContext } from '../../../services/authentication/authentication-context';
import { Spacer } from '../../../components/spacer/spacer-com';
import { Text } from '../../../components/typography/text-com';


export const RegisterAccount = ({ navigation }) => {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [repeatedPassword, setRepeatedPassword] = useState("");
      const { onRegister, isLoading, error } = useContext(AuthenticationContext);
      return (
        <AccountBackgroundTwo>
          <AccountCover />
          <Title>Foodie</Title>
          <AccountContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>
            <Spacer size="large">
              <AuthInput
                label="Confirm-Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setRepeatedPassword(p)}
              />
            </Spacer>
            {error && (
              <ErrorContainer size="large">
                <Text variant="error">{error}</Text>
              </ErrorContainer>
            )}
            <Spacer size="large">
              {!isLoading ? <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton> : 
              <ActivityIndicator  animating={true} color={Colors.blue300} />
              }
            </Spacer>
          </AccountContainer>
          <Spacer size="large">
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
              Back
            </AuthButton>
          </Spacer>
        </AccountBackgroundTwo>
      );
}

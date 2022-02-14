import React from 'react'
// import LottieView from 'lottie-react-native';
import { Spacer } from '../../../components/spacer/spacer-com';
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from '../components/account-styles'
import { AnimationWrapper } from '../components/account-styles';


export const AccountScreen = ({ navigation }) => {
    return (
       <AccountBackground >
          <Title>Foodie</Title>
          <AnimationWrapper>
          {/* <LottieView 
            key='animation'
            autoPlay
            loop
            resizeMode='cover'
            source={require('../../../../assets/homeAnimation.json')}
          /> */}
          </AnimationWrapper>
           <AccountCover />
           <AccountContainer>
               <AuthButton
               icon='lock-open-outline'
               mode='contained'
               onPress={() => navigation.navigate('Login')} >
                   Login
               </AuthButton>
               <Spacer size="large">
                <AuthButton
                icon='lock-open-outline'
                mode='contained'
                onPress={() => navigation.navigate('Register')}>
                    Register
                </AuthButton>
               </Spacer>
           </AccountContainer>
       </AccountBackground>
    )
};

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginAccount } from '../../features/account/screens/login-screen';
import { RegisterAccount } from '../../features/account/screens/register-screen';
import { AccountScreen } from '../../features/account/screens/account-screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {

    return (
        <Stack.Navigator headerMode='none' >
            <Stack.Screen name='Main'  component={AccountScreen}/>
            <Stack.Screen name='Login'  component={LoginAccount}/>
            <Stack.Screen name='Register'  component={RegisterAccount}/>
        </Stack.Navigator>
    )
}
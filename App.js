import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import * as firebase from "firebase";
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme'
import { Navigator } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication-context';

const firebaseConfig = {
  apiKey: "AIzaSyDDlLRQKlSwIaUc44PXmkJoI5fckJh0Jy8",
  authDomain: "foodie-c855f.firebaseapp.com",
  projectId: "foodie-c855f",
  storageBucket: "foodie-c855f.appspot.com",
  messagingSenderId: "558452994641",
  appId: "1:558452994641:web:676288b7b1a003cfea3e70"
};
if(!firebase.apps.length) { 
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({Oswald_400Regular,});
  const [latoLoaded] = useLato({Lato_400Regular,});

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider  theme={theme}>
      <AuthenticationContextProvider>
        <Navigator />
      </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style='auto' />
    </>
  );
};

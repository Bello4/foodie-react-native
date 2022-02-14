import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { FavouritesScreen } from '../../features/settings/screens/favourites-screen'
import { SettingScreen } from '../../features/settings/screens/settings-screen-com'
import { CameraScreen } from '../../features/settings/screens/camera-screen-com'
export const SettingsStack= createStackNavigator()

export const SettingsNavigator = ({ route, navigator}) => {
    return (
        <SettingsStack.Navigator
          headerMode="screen"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <SettingsStack.Screen
            options={{
              header: () => null,
            }}
            name="Settings"
            component={SettingScreen}
          />
          <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
          <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
      );
}

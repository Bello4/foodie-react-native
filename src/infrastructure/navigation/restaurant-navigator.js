import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screens';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurants-details-screen';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {

    return (
        <RestaurantStack.Navigator headerMode='none' screenOptions={{ ...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen
               name='restaurant'
               component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
               name='restaurantDetails'
               component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}
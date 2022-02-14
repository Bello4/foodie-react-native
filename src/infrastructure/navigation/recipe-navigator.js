import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { RecipesScreen } from '../../features/recipe/screens/recipe-screens';
import { RecipeDetailScreen } from '../../features/recipe/screens/recipe-details-screen';

const RestaurantStack = createStackNavigator();

export const RecipeNavigator = () => {

    return (
        <RestaurantStack.Navigator headerMode='none' screenOptions={{ ...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen
               name='recipe'
               component={RecipesScreen}
            />
            <RestaurantStack.Screen
               name='recipeDetails'
               component={RecipeDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}
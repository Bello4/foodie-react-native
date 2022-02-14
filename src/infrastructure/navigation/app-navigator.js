import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SettingsNavigator } from './setting-navigator';
import { RestaurantNavigator } from "./restaurant-navigator"
import { RecipeNavigator } from './recipe-navigator';
import { MapScreen } from '../../features/map/screens/map-screens';
import { FavouritesContextProvider } from '../../services/favourites/favourites-context';
import { LocationContextProvider } from '../../services/location/location-context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurant-context';
// import { RecipesContextProvider } from '../../services/recipe/recipe-context';

const Tab = createBottomTabNavigator();


// const TAB_ICON = {
//   Restaurant: "md-restaurant",
//   Map: "md-map",
//   Recipe: "fast-food",
//   Setting: "md-settings",
// };



// const createScreenOptions = ({ route }) => {
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };


export const AppNavigator = () => (
        
  <FavouritesContextProvider>
    <LocationContextProvider>
      {/* <RecipesContextProvider> */}
        <RestaurantsContextProvider >
          <Tab.Navigator
              
              // screenOptions={
              //   createScreenOptions
              // }
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                  let iconName;
  
                  if (route.name === "Restaurant") {
                    iconName = "md-restaurant";
                  } else if (route.name === "Setting") {
                    iconName = "md-settings";
                  } else if (route.name === "Recipe") {
                    iconName = "fast-food";
                  } else if (route.name === "Map") {
                    iconName = "md-map";
                  }
  
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              
              tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
              }} >
              <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              {/* <Tab.Screen name="Recipe" component={RecipeNavigator} /> */}
              <Tab.Screen name="Setting" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      {/* </RecipesContextProvider> */}
    </LocationContextProvider>
  </FavouritesContextProvider>
)
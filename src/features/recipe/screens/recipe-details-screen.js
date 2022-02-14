import React, { useState } from "react";
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'
import { RecipeInfoCard } from "../components/recipe-infoCard-com";

export const RecipeDetailScreen = ({ route }) => {

  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  return (
      <>
    <ScrollView>
      <RecipeInfoCard restaurant={restaurant} />
      <List.Accordion
      title='Breakfast'
      left={(props) => <List.Icon {...props} icon='bread-slice' />}
      expanded={breakfastExpanded}
      onPress={() => setBreakfastExpanded(!breakfastExpanded)} >
          <List.Item title='Eggs Benedict' />
          <List.Item title='Classic Breakfast' />
      </List.Accordion>

      <List.Accordion
      title='Lunch'
      left={(props) => <List.Icon {...props} icon='hamburger' />}
      expanded={lunchExpanded}
      onPress={() => setLunchExpanded(!lunchExpanded)} >
          <List.Item title='Burger w/ Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom' />
      </List.Accordion>

      <List.Accordion
      title='Dinner'
      left={(props) => <List.Icon {...props} icon='food-variant' />}
      expanded={dinnerExpanded}
      onPress={() => setDinnerExpanded(!dinnerExpanded)} >
          <List.Item title='Spaghetti Bolonese' />
          <List.Item title='Steak Frites' />
      </List.Accordion>

      <List.Accordion
      title='Drinks'
      left={(props) => <List.Icon {...props} icon='cup' />}
      expanded={drinkExpanded}
      onPress={() => setDrinkExpanded(!drinkExpanded)} >
          <List.Item title='Ginger beer' />
          <List.Item title='Red Wine' />
          <List.Item title='Coke' />
          <List.Item title='Coffe' />
          <List.Item title='Tea' />
      </List.Accordion>
      </ScrollView>
      </>
  );
};
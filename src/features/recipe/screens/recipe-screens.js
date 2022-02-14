import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View } from 'react-native'
import { Search } from '../components/search-com';
import { StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { RecipeInfoCard } from '../components/recipe-infoCard-com';
import { RecipeContext } from '../../../services/recipe/recipe-context';
import { FavouritesBar } from '../../../components/favourites/favourites-bar-com';
import { FavouritesContext } from '../../../services/favourites/favourites-context';
import { SafeArea } from '../../../components/utility/safe-area-com';


const AreaView = styled(SafeAreaView)`
    flex: 1;
   padding-top: 16px;
`;

//  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RecipesScreen = ({ navigation }) => {

  const { isLoading, restaurants} = useContext(RecipeContext);
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  
  return (
      <SafeArea>
      <AreaView>
            {isLoading && (
              <LoadingContainer>
                <Loading size={50} animating={true} color={Colors.orange300} />
              </LoadingContainer>
            )}

        <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)}/>
        {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} /> }
        
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('restaurantDetails', { restaurant: item})} >
                <RecipeInfoCard restaurant={item} />
              </TouchableOpacity>
              
            )
          
        }}
          keyExtractor={(item) => item.name}
        />
      </AreaView>
      </SafeArea>
  );
}
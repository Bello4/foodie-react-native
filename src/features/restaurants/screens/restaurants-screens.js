import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View } from 'react-native'
import { Search } from '../components/search-com';
import { StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { FadeInView } from '../../../animations/fade-animation';
import { RestaurantInfoCard } from '../components/restaurant-infoCard-com';
import { RestaurantsContext } from '../../../services/restaurants/restaurant-context';
import { FavouritesBar } from '../../../components/favourites/favourites-bar-com';
import { FavouritesContext } from '../../../services/favourites/favourites-context';
import { SafeArea } from '../../../components/utility/safe-area-com';
import { RestaurantList } from '../components/restaurant-list-styles';


const AreaView = styled(SafeAreaView)`
    flex: 1;
   padding-top: 16px;
`;

//  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = ({ navigation }) => {

  const { isLoading, restaurants} = useContext(RestaurantsContext);
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
                <FadeInView>
                <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
              
            )
          
        }}
          keyExtractor={(item) => item.name}
        />
      </AreaView>
      </SafeArea>
  );
}
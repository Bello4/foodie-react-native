import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../restaurant/compact-res-info-com';
import { Spacer } from '../spacer/spacer-com';

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) =>{
    if (!favourites.length) {
        return null;
    }
    return (

        <FavouritesWrapper>
            <Text>Favourites</Text>
            <ScrollView horizontal showHorizontalScrollIndicator={false} >
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position='left' size='medium' >
                            <TouchableOpacity onPress={() => onNavigate('restaurantDetails', {
                                restaurant,
                            })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
)}
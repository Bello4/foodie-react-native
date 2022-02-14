import React, { useContext } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import { SafeArea } from '../../../components/utility/safe-area-com'
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-infoCard-com'
import { FavouritesContext } from '../../../services/favourites/favourites-context'
import { RestaurantList } from '../../restaurants/components/restaurant-list-styles'
const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;
export const FavouritesScreen = ({navigation}) => {

    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('restaurantDetails', { restaurant: item})} >
                        <RestaurantInfoCard restaurant={item} />
                    </TouchableOpacity>
                    
                    )
                
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <View>
                <Text>NO FAVOURITES TO DISPLAY</Text>
            </View>
        </NoFavouritesArea>
    )
}

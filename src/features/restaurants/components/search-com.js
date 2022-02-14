import React, { useContext, useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { LocationContext } from '../../../services/location/location-context';

const SearchContainer = styled.View`
    padding-left: 12px;
    padding-right: 12px;
    
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle}) => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    
    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])
        
    return (
        
        <SearchContainer>
          <Searchbar
            icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
            onIconPress={onFavouritesToggle}
            placeholder="Search for a location"
            value={searchKeyword}
            onSubmitEditing={() => {
                search(searchKeyword);
            }}
            onChangeText={(text) => {
                setSearchKeyword(text);
            }}
          />
        </SearchContainer>
    )
}
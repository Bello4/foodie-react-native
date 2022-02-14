import React, { createContext, useState, useEffect, useContext } from 'react'
import AsynStorage from '@react-native-async-storage/async-storage'

import { AuthenticationContext } from '../authentication/authentication-context';


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    
    const { user } = useContext(AuthenticationContext)
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsynStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch(err)  {

        }
    }

    const loadeFavourites = async (value) => {
        try {
            const jsonValue = await AsynStorage.getItem(`@favourites-${uid}`);

            if(value !== null) {
                setFavourites(JSON.parse(value));
            }
            
        } catch(err)  {

        }
    }

    useEffect(() => {
        if(user) {
            loadeFavourites(user.uid)
        }
        
    }, [user])

    useEffect(() => {
        if(user) {
           saveFavourites(favourites, user.uid) 
        }
        
    }, [favourites, user])
    
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };
    
    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
        (x) => x.placeId !== restaurant.placeId
        );
    
        setFavourites(newFavourites);
    };
    return (

        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}
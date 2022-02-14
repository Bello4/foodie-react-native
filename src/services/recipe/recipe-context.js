import React, { useState, createContext, useContext, useEffect } from 'react'

import { recipesRequest, recipesTransform } from './recipe-service'
import { LocationContext } from '../location/location-context';


export const RecipeContext = createContext();

export const RecipesContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =  useState(null);
    const { location } = useContext(LocationContext)
    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            recipesRequest(loc).then(recipesTransform).then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            }).catch((err) => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString);

        }
    }, [location]);

    return (
        <RecipeContext.Provider value={{
        restaurants,
        isLoading,
        error,
      }}>{children}
    </RecipeContext.Provider>
    )
    
}
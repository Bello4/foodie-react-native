import React, { useState, useEffect, useContext } from 'react'

import MapView from 'react-native-maps'
import styled from 'styled-components/native'
import { Search } from '../components/search-com';
import { LocationContext } from '../../../services/location/location-context';
import { RestaurantsContext } from '../../../services/restaurants/restaurant-context';
import { SafeArea } from '../../../components/utility/safe-area-com';
import { MapCallout } from '../components/map-callout';


const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext)
    const [ latDelta, setLatDelta] = useState(0)
    const { lat, lng, viewport } = location;
    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return (
    <SafeArea>
        <Search />
        <Map
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
            }}
        >
            { restaurants.map((restaurant) => {
                return <MapView.Marker 
                    key={restaurant.name}
                    title={restaurant.name}
                    coordinate={{
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng,
                    }}
                >
                    <MapView.Callout onPress={() => navigation.navigate('restaurantDetails', { restaurant })}>
                        <MapCallout isMap restaurant={restaurant} />
                    </MapView.Callout>
                </MapView.Marker>
            })}
        </Map>
    </SafeArea>
)}
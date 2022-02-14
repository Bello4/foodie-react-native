import React from 'react'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-res-info-com'


export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo
        restaurant={restaurant}
    />
)
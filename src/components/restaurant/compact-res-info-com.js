import React from 'react'
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview'
import { Platform } from 'react-native'
import { Text } from '../typography/text-com';

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const isAndroid = Platform.OS === 'andriod';

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    
    const Image = isAndroid && isMap ? CompactWebView : CompactImage;
    
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text center variant='caption' numerOfLines={3}>{restaurant.name}</Text>
        </Item>
    )
}
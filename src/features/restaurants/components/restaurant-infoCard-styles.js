import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg'
import { Card } from 'react-native-paper'

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

export const RestaurantCard = styled(Card)`
    background-color: #ffffff;
    margin-bottom: ${(props) => props.theme.space[3]}
`;

export const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]}
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]}
`;

export const Rating = styled.View`
    flex-direction: row;
`;
export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
    flex-direction: row;
`;


export const Address = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.caption}
    font-family: ${(props) => props.theme.fonts.body}
`;
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Spacer } from '../../../components/spacer/spacer-com'
import { Text } from '../../../components/typography/text-com';
import { Icon, RestaurantCard, Info, Rating, Section, SectionEnd, Address, RestaurantCardCover } from './recipe-infoCard-styles'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Favourites } from '../../../components/favourites/fovourites-com';



export const RecipeInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'some restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        rating = 4,
        address = '100 some random street',
        isOpenNow = true,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5}>
            <Favourites restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Info>
               <Text variant='label'>{name}</Text>

               {/* Svg section */}
               <Section>
                    <Rating>
                        {ratingArray.map((_, i) => <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />)}
                    </Rating>
                    <SectionEnd>
                            {isClosedTemporarily && (<Text variant="error" > CLOSED TEMPORARILY </Text>)}
                            <Spacer position="left" size="large">
                                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                            </Spacer>

                            <Spacer position="left" size="large">
                                <Icon source={{ uri: icon }} />
                            </Spacer>
                    </SectionEnd>
               </Section>
                {/* Svg section end */}

               <Address>{address}</Address> 
            </Info>
        </RestaurantCard>
    )
}

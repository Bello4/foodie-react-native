import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import AsynStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from "@react-navigation/native";
import { List, Avatar } from 'react-native-paper'
import { Text } from '../../../components/typography/text-com'
import { Spacer } from '../../../components/spacer/spacer-com'
import { AuthenticationContext } from '../../../services/authentication/authentication-context'
import { SafeArea } from '../../../components/utility/safe-area-com'

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
`;

const AvartarContainer = styled.View`
    align-items: center;
`;

export const SettingScreen = ({ navigation }) => { 
    const { onLogout, user } = useContext(AuthenticationContext);
    const [ photo, setPhoto ] = useState(null);

    const getUserProfile = async (currentUser) => {
        const photoUri = await AsynStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri)
    }

    // useFocusEffect(() => {
    //     getUserProfile(user);
    // }, [user]);

    useFocusEffect(
  React.useCallback(() => {
    getUserProfile(user);
  }, [user])
);
    return (
      <SafeArea>
          <AvartarContainer >
          <TouchableOpacity onPress={() => navigation.navigate("Camera") }>
           {!photo && ( <Avatar.Icon  size={180} icon='human' backgroundColor='#2182BD' /> ) }
           {photo &&  (<Avatar.Image  size={180} source={{uri: photo}} backgroundColor='#2182BD' />) }
          </TouchableOpacity>
          <Spacer position='top' size='large'>
              <Text varaint='label'>{user.email}</Text>
          </Spacer>
          </AvartarContainer>
          
          <List.Section>
              <SettingsItem
                  title='Favourites'
                  left={(props) => <List.Icon {...props} color='red' icon='heart' />} 
                  onPress={() => navigation.navigate('Favourites')}
                />
          </List.Section>
          <List.Section>
              <SettingsItem
                  title='Logout'
                  left={(props) => <List.Icon {...props} color='black' icon='lock-open-outline' />} 
                  onPress={onLogout}
                />
          </List.Section>
      </SafeArea>
      
    )
   }
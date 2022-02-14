import React, { useRef, useState, useEffect, useContext } from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native'
import AsynStorage from '@react-native-async-storage/async-storage'

import { AuthenticationContext } from '../../../services/authentication/authentication-context'

import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../components/typography/text-com'


const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;


export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log(photo)
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
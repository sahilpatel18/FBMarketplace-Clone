import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Switch,
  ImagePickerIOS,
  Picker,
  Button,
  Image,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppText from "./app/components/Text";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions'
import ImageInput from "./app/components/ImageInput";

export default function App() {

  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("YOU NEED TO ALLOW US ACCESS TO YOUR CAMERA ROLL");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if(!result.cancelled)
      setImageUri(result.uri)
   
    } catch (error) {
      console.log('error reading image');
      
    }
    
  }

  return (
<Screen>
  <Button title='Select Image' onPress={selectImage} />
  <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
  <ImageInput imageUri={imageUri} />
</Screen>
  );
}

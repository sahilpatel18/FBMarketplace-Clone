import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

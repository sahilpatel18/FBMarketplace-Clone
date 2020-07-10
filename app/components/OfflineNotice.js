import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: 50,
    width: "100%",
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

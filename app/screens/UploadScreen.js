import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import AppText from "../components/Text";

export default function UploadScreen() {
  return (
    <Modal>
      <View style={styles.container}>
        <AppText></AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

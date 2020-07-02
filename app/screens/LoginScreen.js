import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ eamil: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder='Email'
              icon='email'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={handleChange("email")}
              autoCapitalize='none'
              textContentType='emailAddress'
            />
            <AppTextInput
              placeholder='Password'
              icon='lock'
              autoCorrect={false}
              onChangeText={handleChange("password")}
              secureTextEntry
              autoCapitalize='none'
              textContentType='password'
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";

import {AppForm, AppFormField, SubmitButton} from '../components/forms'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ eamil: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder='Email'
          icon='email'
          autoCorrect={false}
          name='email'
          keyboardType='email-address'
          autoCapitalize='none'
          textContentType='emailAddress'
        />
        <AppFormField
          placeholder='Password'
          name='password'
          icon='lock'
          autoCorrect={false}
          secureTextEntry
          autoCapitalize='none'
          textContentType='password'
        />
        <SubmitButton title='login' />
      </AppForm>
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

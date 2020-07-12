import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handlesubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handlesubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
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

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup'

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from '../components/ErrorMessage'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ eamil: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              placeholder='Email'
              icon='email'
              autoCorrect={false}
              onBlur={() => setFieldTouched('email') }
              keyboardType='email-address'
              onChangeText={handleChange("email")}
              autoCapitalize='none'
              textContentType='emailAddress'
            />
           <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              placeholder='Password'
              icon='lock'
              onBlur={() => setFieldTouched('password') }
              autoCorrect={false}
              onChangeText={handleChange("password")}
              secureTextEntry
              autoCapitalize='none'
              textContentType='password'
            />
             <ErrorMessage error={errors.password} visible={touched.password} />
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

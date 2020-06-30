import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
detailsContainer:{
    padding: 20,
},
  image: {
    width: "100%",
    height: 300,
  },
  price:{
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10
  },
  title:{
      fontSize: 25,
      fontWeight: '500'
  }
});

export default ListingDetailsScreen;

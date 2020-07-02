import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/userimg.jpg")}
            title='Michael Chung'
            subTitle='5 Listings'
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer:{
      marginVertical: 40
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;

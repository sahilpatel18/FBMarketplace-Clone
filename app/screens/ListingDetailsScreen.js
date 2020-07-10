import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

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
  userContainer: {
    marginVertical: 40,
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

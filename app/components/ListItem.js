import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";


function ListItem({ title, subTitle, image ,ImageComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {ImageComponent}
         {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer} >
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  detailsContainer:{
    marginLeft: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: "600",
  },
});

export default ListItem;

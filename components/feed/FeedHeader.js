import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const FeedHeader = () => {
  return (
    <View style={styles.containe}>
      <View style={styles.instagram}>Instagram</View>
      <View style={styles.leftcontainer}>
          <MaterialCommunityIcons style={styles.lefticon} name="plus-box-outline" size={28} color="black" />
          <MaterialCommunityIcons style={styles.lefticon} name="facebook-messenger" size={28} color="black" />
      </View>
    </View>
  );
};

export default FeedHeader;

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10
  },
  instagram: { fontSize: 30 },
  leftcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lefticon: {
    marginLeft: 20 
  }
});

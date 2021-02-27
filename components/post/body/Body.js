import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

const Body = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "cover",
  },
});

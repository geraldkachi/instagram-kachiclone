import React from "react";
import { StyleSheet, Image, View } from "react-native";

const ProfilePicture = ({ data }) => {
  const { ImageUri } = data;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ImageUri} />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 86,
    width: 86,
    borderColor: "#ae222e0",
    borderWidth: 3,
    margin: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
});

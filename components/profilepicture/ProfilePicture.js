import React from "react";
import { StyleSheet, Image, View } from "react-native";

const ProfilePicture = ({ uri, size = 70 }) => {
  // const { imageUri } = data;

  return (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
      <Image
        style={[styles.image, { width: size, height: size }]}
        source={{ uri }}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    // height: 76,
    // width: 76,
    margin: 5,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "#ae22e0",
  },
  image: {
    // height: 70,
    // width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});

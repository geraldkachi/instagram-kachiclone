import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../profilepicture/ProfilePicture";
// import data from "../../data/storedata"

const Story = ({ imageUri, name  }) => {

  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
  },
});

// react native video

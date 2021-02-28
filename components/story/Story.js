import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../profilepicture/ProfilePicture";
// import data from "../../data/storedata"

const Story = ({ data }) => {
  const { imageUri, name } = data;
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
// <ProfilePicture uri={data[5].imageUri} />
//<Text style={styles.name}>{data[0].name}</Text>

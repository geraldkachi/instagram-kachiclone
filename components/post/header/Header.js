import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../../profilepicture/ProfilePicture";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection:"row" }}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="dots-vertical" size={24} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#4f4f4f4",
  },
});

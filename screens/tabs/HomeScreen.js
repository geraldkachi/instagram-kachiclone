import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Stories from "../../components/story/Stories"

const Home = () => {
  return (
    <View style={styles.container}>
      <Stories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});

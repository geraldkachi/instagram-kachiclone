import React from "react";
import { StyleSheet, View } from "react-native";
import Feed from "../../components/feed/Feed";
// import Stories from "../../components/story/Stories";


const Home = () => {
  return (
    <View style={styles.container}>
      <Feed />
      {/* <Stories /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});

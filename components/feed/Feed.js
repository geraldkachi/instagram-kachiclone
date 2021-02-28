import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import posts from "../../data/postdata";
import Post from "../post/Post";
import Stories from "../story/Stories";
import FeedHeader from "./FeedHeader";

const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({});

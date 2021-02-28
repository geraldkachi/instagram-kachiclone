import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ReelsPlayList from "../../components/reels/ReelsPlayList";
import ChatRooms from "../../data/ChatRoom";


const Reels = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ReelsPlayList chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
     flex: 1 ,
    //  width: "100%",
    justifyContent:'center',
    alignItems:'center',
  }
});

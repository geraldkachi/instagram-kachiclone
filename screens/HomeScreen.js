import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabScreen from "./bottomtabs/BottomTabScreen";
// import SettingScreen from "../screens/SettingScreen";
// import BottomTabScreen from "./BottomTabScreen";
// import TopTabScreen from "./TopTabScreen";
// import Colors from "../constants/Colors";
// ChatRoomS
// import ChatRoomScreen from "../screens/ChatRoomScreen";
BottomTabScreen

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <HomeStack.Navigator 
    // headerMode={false}
    headerShown={true}
    >
      <HomeStack.Screen
        name="TopTab"
        component={BottomTabScreen}
        options= {{headerShown: false}}
      />
    </HomeStack.Navigator>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

//   <HomeStack.Screen name="BottomTab" component={BottomTabScreen} />
// <HomeStack.Screen name="Setting" component={SettingScreen} />


// <HomeStack.Navigator headerMode={false}>
// <HomeStack.Screen
//  name="TopTab"
// component={BottomTabScreen}
// options= {{headerShown: false}}
// />
// </HomeStack.Navigator>

// const [] = React.useState

// React.useEffect(() => {
//   setTimeout(() => {
//     StatusBar.setBackgroundColor("#1238c7e");
//   }, 100);
// }, []);









// <HomeStack.Navigator headerMode={false}>
// </HomeStack.Navigator><HomeStack.Screen
  // name="TopTab"
  // component={TopTabScreen}
  // options= {{headerShown: false}}
// />
// </HomeStack.Navigator>
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import datas from "../../data/storedata"

import {
  // Entypo,
  // SimpleLineIcons,
  // MaterialIcons,
  // Octicons,
  Ionicons,
  Foundation,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "../tabs/HomeScreen";
import SearchScreen from "../tabs/SearchScreen";
import ActivityScreen from "../tabs/ActivityScreen";
import ReelsScreen from "../tabs/ReelsScreen";
import ProfileScreen from "../tabs/ProfileScreen";
import ProfilePicture from "../../components/profilepicture/ProfilePicture";

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => (
  // <Tab.Navigator tabBarOptions={{showLabel: false}}>
  <Tab.Navigator tabBarOptions={{showLabel: false}}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigation}
      options={{
        showLabel: false,
        // tabBarLabel: "Home",
        // tabBarColor: "blue",
        tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="SearchStack"
      component={SearchStackNavigation}
      options={{
        // tabBarLabel: "Home",
        // tabBarColor: "blue",
        tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
      }}
    />
    <Tab.Screen
      name="ReelsStack"
      component={ReelsStackNavigation}
      options={{
        // tabBarLabel: 'search',
        // tabBarColor: "blue",
        tabBarIcon: () => (
          <MaterialCommunityIcons name="clipboard-play-outline" size={28} color="black" />
          // <MaterialCommunityIcons name="plus-box-outline  play-box-outline" size={28} color="black" />
          // <Ionicons name="ios-notifications-outline" size={24} color="blue" />
        ),
      }}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityStackNavigation}
      options={{
        // tabBarLabel: "Message",
        // tabBarColor: "blue",
        tabBarIcon: () => (
          <AntDesign name="hearto" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackStackNavigation}
      options={{
        // tabBarLabel: "Message",
        // tabBarColor: "blue",
        tabBarIcon: () => (
          <ProfilePicture uri={datas[0].imageUri} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);



const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ReelsStack = createStackNavigator();
const ActictyStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackNavigation = () => (
  <HomeStack.Navigator headerMode={false}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);
const SearchStackNavigation = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);
const ReelsStackNavigation = () => (
  <ReelsStack.Navigator headerMode={false}>
    <ReelsStack.Screen name="Reels" component={ReelsScreen} />
  </ReelsStack.Navigator>
);
const ActivityStackNavigation = () => (
  <ActictyStack.Navigator headerMode={false}>
    <ActictyStack.Screen name="Activity" component={ActivityScreen} />
  </ActictyStack.Navigator>
);
const ProfileStackStackNavigation = () => (
  <ProfileStack.Navigator headerMode={false}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default BottomTabScreen;

const styles = StyleSheet.create({});







// const BottomTabScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="HomeTwitter"
//       component={HomeTwitter}
//       options={{
//         tabBarLabel: "Home",
//         tabBarColor: "blue",
//         tabBarIcon: () => <Octicons name="home" size={24} color="blue" />,
//       }}
//     />
//     <Tab.Screen
//       name="Search"
//       component={Search}
//       options={{
//         tabBarLabel: "Home",
//         tabBarColor: "blue",
//         tabBarIcon: () => <Octicons name="search" size={22} color="blue" />,
//       }}
//     />
//     <Tab.Screen
//       name="Notification"
//       component={Notification}
//       options={{
//         tabBarLabel: "Notification",
//         tabBarColor: "blue",
//         tabBarIcon: () => (
//           <MaterialIcons name="notifications-none" size={28} color="blue" />
//           // <Ionicons name="ios-notifications-outline" size={24} color="blue" />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Message"
//       component={Message}
//       options={{
//         tabBarLabel: "Message",
//         tabBarColor: "blue",
//         tabBarIcon: () => (
//           <SimpleLineIcons name="envelope" size={24} color="blue" />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default BottomTabScreen;

// const styles = StyleSheet.create({});

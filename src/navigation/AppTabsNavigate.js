import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { HomeStackNavigate } from './HomeStackNavigate';
import { AuthorStackNavigate } from './AuthorStackNavigate';

const Tabs = createBottomTabNavigator();

export const AppTabsNavigate = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "AllPosts") {
            return <AntDesign name={"home"} size={28} color={color} />;
          } else if (route.name === "AuthorPosts") {
            return <MaterialIcons name={"person-outline"} size={28} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "white",
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black'
      }}
    >
      <Tabs.Screen name="AllPosts" component={HomeStackNavigate} options={{title: 'Home'}} />
      <Tabs.Screen name="AuthorPosts" component={AuthorStackNavigate} options={{title: 'My Posts'}} />
    </Tabs.Navigator>
  );
};
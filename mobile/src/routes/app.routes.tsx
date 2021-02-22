import React from "react";
import { View } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Start from "../screens/Start";

import Dashboard from "../screens/Dashboard";
import Saves from "../screens/Saves";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type TabParamList = {
  Dashboard: undefined;
};

type StackParamList = {
  Start: undefined;
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  StackNavigationProp<StackParamList>
>;

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home";
          } else if (route.name === "Saves") {
            iconName = "heart";
          }

          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderTopWidth: 2,
                borderTopColor: focused ? "#FF6680" : "transparent",
              }}
            >
              <Feather name={iconName} size={size} color={color} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        style: {
          height: 70,
        },
        tabStyle: {
          marginBottom: 10,
        },
        activeTintColor: "#FF6680",
        inactiveTintColor: "#C4C4D1",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          title: "Home",
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Saves"
        options={{
          title: "Salvos",
        }}
        component={Saves}
      />
    </Tab.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
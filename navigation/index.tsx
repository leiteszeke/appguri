import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ColorSchemeName } from "react-native";
import C, { apply, theme } from "consistencss";

import NotFoundScreen from "../screens/NotFoundScreen";
import AccountScreen from "../screens/AccountScreen";
import EventsScreen from "../screens/EventsScreen";
import GiftsScreen from "../screens/GiftsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Events"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.brand,
        headerTitleStyle: apply(C.familyRobotoBold, C.font6, C.textWhite),
        headerStyle: C.bgBrand,
        headerShadowVisible: false,
        tabBarInactiveTintColor: "#999999",
      }}
    >
      <BottomTab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: "Events",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Gifts"
        component={GiftsScreen}
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

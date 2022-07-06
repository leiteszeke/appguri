import C, { apply, extend } from "consistencss";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

extend({
  classes: {
    layout: apply(C.flex, { backgroundColor: "#8073B6" }),
    title: apply(C.font6, C.uppercase),
  },
  fonts: {
    interRegular: "Inter_400Regular",
    interMedium: "Inter_500Medium",
    interBold: "Inter_700Bold",
    robotoRegular: "Roboto_400Regular",
    robotoBold: "Roboto_700Bold",
  },
  colors: {
    brand: "#8073B6",
    red: "#E20707",
    gray: "#A3A3A3",
    transparent: "transparent",
  },
  sizing: {
    minimum: 1,
    double: 2,
    basic: 14,
    basic2: 18,
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ActionSheetProvider>
          <>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </>
        </ActionSheetProvider>
      </SafeAreaProvider>
    );
  }
}

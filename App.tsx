import C, { apply, extend } from "consistencss";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import React from "react";

extend({
  classes: {
    layout: apply(C.flex, C.p2),
    title: apply(C.font6, C.uppercase),
    regular: { fontFamily: "Inter_400Regular" },
    bold: { fontFamily: "Inter_700Bold" },
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
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

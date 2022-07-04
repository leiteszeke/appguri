import { View } from "../components/Themed";
import C, { apply } from "consistencss";
import React from "react";
import TabButton from "../components/TabButton";

export default function EventsScreen() {
  return (
    <View style={C.layout}>
      <View style={apply(C.row, C.justifyCenter)}>
        <TabButton containerStyle={C.mr2} label="Create event" />
        <TabButton containerStyle={C.ml2} label="Edit events" />
      </View>
    </View>
  );
}

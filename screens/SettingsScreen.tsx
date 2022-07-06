import { View } from "react-native";
import C from "consistencss";
import React from "react";
import Item from "../components/Item";
import Separator from "../components/Separator";

export default function SettingsScreen() {
  return (
    <View style={C.layout}>
      <Separator />
      <Item label="Notifications" onPress={() => {}} />
      <Separator />
      <Item label="Audio settings" onPress={() => {}} />
      <Item label="Visual settings" onPress={() => {}} />
      <Separator />
      <Item label="Language" onPress={() => {}} />
      <Item label="Accounts" onPress={() => {}} />
    </View>
  );
}

import React from "react";
import { View } from "react-native";
import { theme } from "consistencss";

const baseSize = Number(theme?.sizing?.base ?? 4);

const Separator = ({ size = 8 }: { size?: number }) => (
  <View style={{ height: size * baseSize }} />
);

export default Separator;

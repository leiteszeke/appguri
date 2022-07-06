import React from "react";
import C, { apply } from "consistencss";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  label: string;
};

const Button = ({ disabled, label, onPress }: ButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPress?.(event);
    }
  };

  return (
    <TouchableOpacity
      style={apply(C.bgBrand, C.h10, C.selfCenter, C.row, C.itemsCenter, C.px3)}
      onPress={handlePress}
    >
      <Text style={apply(C.uppercase, C.font4, C.textWhite)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

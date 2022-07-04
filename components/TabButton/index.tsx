import React from "react";
import C, { apply } from "consistencss";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

type TabButtonProps = TouchableOpacityProps & {
  containerStyle?: ViewStyle;
  label: string;
};

const TabButton = ({
  disabled,
  containerStyle,
  label,
  onPress,
  ...props
}: TabButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled) {
      onPress?.(event);
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={apply(
        C.bgPurple,
        C.h10,
        C.selfCenter,
        C.row,
        C.itemsCenter,
        C.px3,
        containerStyle
      )}
      onPress={handlePress}
    >
      <Text style={apply(C.uppercase, C.bold, C.font4, C.textWhite)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

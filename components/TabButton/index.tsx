import React from "react";
import C, { apply } from "consistencss";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type TabButtonProps = TouchableOpacityProps & {
  containerStyle?: ViewStyle;
  leftIcon?: React.ComponentProps<typeof FontAwesome>["name"];
  label: string;
};

const TabButton = ({
  disabled,
  containerStyle,
  label,
  leftIcon,
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
        C.h8,
        C.selfCenter,
        C.row,
        C.itemsCenter,
        C.px3,
        C.borderWhite,
        C.borderDouble,
        C.justifyCenter,
        containerStyle
      )}
      onPress={handlePress}
    >
      {leftIcon && (
        <FontAwesome color="white" style={C.mr2} size={12} name={leftIcon} />
      )}
      <Text
        style={apply(
          C.uppercase,
          C.alignCenter,
          C.familyRobotoBold,
          C.fontBasic,
          C.textWhite
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

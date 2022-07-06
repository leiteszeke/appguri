import { FontAwesome } from "@expo/vector-icons";
import C, { apply, TouchableOpacity } from "consistencss";
import React, { useState } from "react";
import { Image, View, ImageStyle, Text } from "react-native";

export type CalendarEvent = {
  editing?: boolean;
  image: string;
  name: string;
  lastname: string;
  date: Date;
  inverse?: boolean;
  interests?: string[];
};

const Event = ({ editing, inverse, ...event }: CalendarEvent) => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggleCheck = () => setChecked((prev) => !prev);
  const textColor = inverse ? C.textGray : C.textWhite;

  return (
    <View style={apply(C.row, C.justifyBetween, C.h16)}>
      <View style={apply(C.h16, C.w16, C.mr2)}>
        <Image
          source={{ uri: "https://picsum.photos/100/100" }}
          style={apply(C.h16, C.w16, C.radius8) as ImageStyle}
        />
      </View>
      <View style={apply(C.justifyCenter, C.flex)}>
        <Text style={apply(textColor, C.font4, C.familyRobotoBold, C.mb1)}>
          {event.name}
        </Text>
        <Text style={apply(textColor, C.font4, C.familyRobotoRegular)}>
          {event.date.toLocaleDateString()}
        </Text>
      </View>
      <View style={apply(C.itemsCenter, C.justifyCenter)}>
        <Text style={apply(C.familyRobotoBold, textColor, C.font5)}>2d</Text>
      </View>
      {editing && (
        <TouchableOpacity
          style={apply(C.itemsCenter, C.justifyCenter, C.pl4, C.pr1, C.w10)}
          onPress={toggleCheck}
        >
          <FontAwesome
            variant="light"
            color="white"
            size={16}
            name={checked ? "check-square-o" : "square-o"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Event;

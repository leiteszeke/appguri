import { FlatList, TouchableOpacity, Text, View } from "react-native";
import C, { apply } from "consistencss";
import React from "react";
import Event, { CalendarEvent } from "../components/Event";

const mock = {
  date: new Date(2022, 10, 12),
  name: "John",
  lastname: "Doe",
  image: "https://picsum.photos/200/200",
  interests: ["soccer", "volleyball", "wine", "gaming", "relaxing"],
};

const ShopEvent = (item: CalendarEvent) => {
  return (
    <View style={apply(C.px5, C.py2, C.borderbottomMinimum, C.borderGray)}>
      <Event inverse {...item} />
      <View style={apply(C.row, C.mt4, C.justifyBetween)}>
        {item.interests?.map((interest) => (
          <View
            key={interest}
            style={apply(
              C.h10,
              C.w10,
              C.pyDouble,
              C.borderMinimum,
              C.borderGray
            )}
          >
            <View style={apply(C.flex)} />
            <Text
              style={apply(
                C.familyRobotoBold,
                C.wFull,
                C.alignCenter,
                C.font2,
                C.textGray
              )}
              numberOfLines={1}
            >
              {interest}
            </Text>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => {}}
          style={apply(
            C.bgBrand,
            C.radius2,
            C.itemsCenter,
            C.justifyCenter,
            C.selfStart,
            C.h10,
            C.px7
          )}
        >
          <Text style={apply(C.textWhite, C.familyRobotoBold, C.font3)}>
            {`Shop\r\nGifts`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function GiftsScreen() {
  return (
    <View style={C.layout}>
      <FlatList
        style={apply(C.mt3, C.flex, C.bgWhite)}
        data={[mock, mock, mock, mock]}
        renderItem={({ item }) => <ShopEvent {...item} />}
      />
    </View>
  );
}

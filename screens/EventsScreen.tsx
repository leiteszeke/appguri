import { useActionSheet } from "@expo/react-native-action-sheet";
import C, { apply } from "consistencss";
import React, { useState } from "react";
import { View, SectionList, Text, ViewStyle, Share } from "react-native";
import TabButton from "../components/TabButton";
import Event from "../components/Event";
import Separator from "../components/Separator";

const Header = ({ title }: { title: string }) => {
  return (
    <View style={apply(C.h6, C.itemsCenter, C.bgBrand, C.mb2, C.justifyCenter)}>
      <View style={apply(C.hMinimum, C.absolute, C.wFull, C.bgWhite)} />
      <Text
        style={apply(
          C.bgBrand,
          C.familyRobotoBold,
          C.font5,
          C.wHalf,
          C.textWhite,
          C.alignCenter
        )}
      >
        {title}
      </Text>
    </View>
  );
};

const mock = {
  date: new Date(2022, 10, 12),
  name: "John",
  lastname: "Doe",
  image: "https://picsum.photos/200/200",
};

const data = [
  {
    title: "July",
    data: [mock, mock, mock],
  },
  {
    title: "August",
    data: [mock, mock, mock],
  },
  {
    title: "September",
    data: [mock, mock, mock],
  },
  {
    title: "October",
    data: [mock, mock, mock],
  },
];

const onShare = async () => {
  const result = await Share.share({
    message: "React Native | A framework for building native apps using React",
  });

  if (result.action === Share.sharedAction) {
    if (result.activityType) {
      // shared with activity type of result.activityType
    } else {
      // shared
    }
  } else if (result.action === Share.dismissedAction) {
    // dismissed
  }
};

export default function EventsScreen() {
  const [editing, setEditing] = useState<boolean>(false);
  const toggleEdit = () => setEditing((prev) => !prev);
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = (index?: number) => {
    switch (index) {
      case 0:
        // "Add birthday"
        break;

      case 1:
        // "Add other event"
        break;

      case 2:
        onShare();
        break;

      case 3:
        // "Facebook"
        break;
    }
  };

  const addEvent = () => {
    showActionSheetWithOptions(
      {
        options: [
          "Add Birthday",
          "Add Other Event",
          "Send Link",
          "Facebook",
          "Cancel",
        ],
        cancelButtonIndex: 4,
      },
      handlePress
    );
  };

  return (
    <View style={apply(C.layout)}>
      <View style={apply(C.row, C.px3, C.mt2, C.justifyCenter)}>
        <TabButton
          containerStyle={apply(C.flex, C.mr3) as ViewStyle}
          label="Add event"
          leftIcon="plus"
          onPress={addEvent}
        />
        <TabButton
          containerStyle={apply(C.flex, C.ml3) as ViewStyle}
          label={editing ? "Done" : "Edit list"}
          onPress={toggleEdit}
        />
      </View>
      <SectionList
        sections={data}
        contentContainerStyle={apply(C.px3)}
        style={C.mt3}
        ItemSeparatorComponent={() => <Separator size={2} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Event {...item} editing={editing} />}
        renderSectionHeader={({ section: { title } }) => (
          <Header title={title} />
        )}
      />
    </View>
  );
}

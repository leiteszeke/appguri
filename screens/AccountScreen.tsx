import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TextInputProps,
  ImageStyle,
  Image,
} from "react-native";
import C, { apply } from "consistencss";
import React, { useState } from "react";
import Item from "../components/Item";
import Separator from "../components/Separator";

const InputItem = ({
  label,
  placeholder,
  defaultValue,
  onChange,
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  onChange: TextInputProps["onChangeText"];
}) => {
  return (
    <View
      style={apply(
        C.bgWhite,
        C.h10,
        C.row,
        C.itemsCenter,
        C.justifyBetween,
        C.pl5,
        C.pr4
      )}
    >
      <Text style={apply(C.familyInterRegular, C.fontBasic2, C.mr3)}>
        {label}
      </Text>
      <TextInput
        style={apply(C.flex, C.h10, C.alignRight)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChangeText={(e) => onChange?.(e)}
      />
    </View>
  );
};

export default function AccountScreen() {
  const [email, setEmail] = useState<string>("");

  const onChange = (text: string) => setEmail(text);

  return (
    <View style={C.layout}>
      <Separator />
      <View style={C.itemsCenter}>
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={apply(C.h20, C.w20, C.radius10) as ImageStyle}
        />
      </View>
      <Separator />
      <InputItem
        label="Email"
        placeholder="Email"
        defaultValue={email}
        onChange={onChange}
      />
      <Item label="Payment Method" onPress={() => {}} />
      <Separator />
      <Item label="Track Orders" onPress={() => {}} />
      <Item label="Past Orders" onPress={() => {}} />

      <View style={apply(C.flex, C.justifyEnd)}>
        <TouchableOpacity
          style={apply(
            C.h11,
            C.radius2,
            C.itemsCenter,
            C.justifyCenter,
            C.bgRed,
            C.mx9,
            C.mb9
          )}
        >
          <Text style={apply(C.familyInterRegular, C.fontBasic2, C.textWhite)}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

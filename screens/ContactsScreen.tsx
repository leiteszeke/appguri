import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import * as Contacts from "expo-contacts";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import C, { apply } from "consistencss";

export default function ContactsScreen({
  navigation,
}: RootTabScreenProps<"Contacts">) {
  const [contacts, setContacts] = useState<Contacts.Contact[]>();

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        sort: Contacts.SortTypes.FirstName,
      });

      setContacts(data ?? []);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, [])
  );

  const renderItem = ({ item }: { item: Contacts.Contact }) => {
    return (
      <TouchableOpacity
        onPress={() => Contacts.presentFormAsync(item.id)}
        style={apply(C.row, C.itemsCenter, C.px2, C.h12)}
      >
        <Text style={C.regular}>
          {item.firstName} {item.lastName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={C.layout}>
      <FlatList
        data={contacts}
        ItemSeparatorComponent={() => <View style={C.h2} />}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
      />
    </View>
  );
}

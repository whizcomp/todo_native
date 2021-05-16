import React from "react";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "./AppText";
export default function ListBox({ name, text, onPress, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <MaterialCommunityIcons name={name} size={25} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <MaterialCommunityIcons name="trash-can-outline" size={29} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    elevation: 5,
    marginHorizontal: 7,
    marginVertical: 7,
    justifyContent: "space-between"
  },
  item: {
    flexDirection: "row",
    flex: 1
  },
  text: {
    marginLeft: 10,
    color: "#808080"
  }
});

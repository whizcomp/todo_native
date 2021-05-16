import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppInput({ value, send, onChangeText, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Add to list"
      />
      {send ? (
        <MaterialCommunityIcons
          name="send"
          size={33}
          color="dodgerblue"
          onPress={onPress}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 3,
    width: "100%",
    bottom: 3,
    backgroundColor: "#bfbfbf",
    padding: 10,
    marginHorizontal: 7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    flex: 1
  }
});

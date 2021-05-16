// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Todo from "./components/Todo";
import AppText from "./Reusable/AppText";
import { init } from "./db/todo";

init()
  .then(() => console.log("db init"))
  .catch(err => console.log(`failed to init db`, err));
export default function App() {
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>To do List</AppText>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    paddingTop: StatusBar.currentHeight
  },
  header: {
    paddingVertical: 10
  }
});

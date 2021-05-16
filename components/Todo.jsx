import React, { useState } from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import ListBox from "../Reusable/ListBox";
import AppInput from "../Reusable/AppInput";

export default function Todo() {
  const [data, setData] = useState([
    { id: 1, title: "my first task", finished: true },
    { id: 2, title: "my second task", finished: false },
    { id: 3, title: "my third task", finished: true }
  ]);
  const [todo, setTodo] = useState("");
  const addTask = task => {
    const todos = {
      id: data.length + 1,
      title: task,
      finished: false
    };
    console.log(todos);
    setData(data => [...data, todos]);
    setTodo(todo => setTodo(""));
  };
  const handleCheck = item => {
    const action = data.indexOf(item);
    data[action].finished = !data[action].finished;
    setData(data => [...data]);
  };
  const actionDelete = item => {
    setData(data.filter(m => m.id !== item.id));
  };
  const handleDelete = item => {
    Alert.alert("Delete user", "Are you sure to delete", [
      { text: "cancel" },
      {
        text: "Confirm",
        onPress: () => {
          actionDelete(item);
        }
      }
    ]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListBox
            text={item.title}
            name={!item.finished ? "checkbox-blank-outline" : "checkbox-marked"}
            onPress={() => handleCheck(item)}
            onDelete={() => handleDelete(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <AppInput
        value={todo}
        send={todo}
        onChangeText={todo => setTodo(todo)}
        onPress={() => addTask(todo)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

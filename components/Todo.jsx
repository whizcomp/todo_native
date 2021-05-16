import React, { useState, useEffect } from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import ListBox from "../Reusable/ListBox";
import AppInput from "../Reusable/AppInput";
import { insert, fetch } from "../db/todo";
export default function Todo() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await fetch();
    console.log(result.rows._array);
    setData(result.rows._array);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [todo, setTodo] = useState("");
  const addTask = async task => {
    const todos = {
      id: data.length + 1,
      title: task,
      complete: false
    };
    try {
      const result = await insert(todos.title, todos.complete);
      console.log(result);
      setData(data => [...data, todos]);
      setTodo(todo => setTodo(""));
    } catch (error) {}
  };
  const handleCheck = item => {
    const action = data.indexOf(item);
    data[action].complete = !data[action].complete;
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
            name={!item.complete ? "checkbox-blank-outline" : "checkbox-marked"}
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

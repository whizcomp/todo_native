import React, { useState, useEffect } from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import ListBox from "../Reusable/ListBox";
import AppInput from "../Reusable/AppInput";
import { insert, fetch, update, remove } from "../db/todo";
export default function Todo({ visible }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await fetch();
    console.log(result.rows._array);
    setData(result.rows._array);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [todo, setTodo] = useState("");
  const addTask = async task => {
    const todos = {
      title: task,
      complete: false
    };
    try {
      const result = await insert(task, false);
      console.log(result);
      todos.id = result.insertId;
      setData(data => [...data, todos]);
      setTodo(todo => setTodo(""));
    } catch (error) {}
  };
  const handleCheck = async item => {
    console.log(typeof item.id);
    try {
      const action = data.indexOf(item);
      data[action].complete = !data[action].complete;
      const completed = data[action].complete ? 1 : 0;
      console.log(completed);
      await update(item.id, completed);
      setData(data => [...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const actionDelete = async item => {
    try {
      await remove(item.id);
      setData(data.filter(m => m.id !== item.id));
    } catch (error) {}
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
      {!visible && (
        <AppInput
          value={todo}
          send={todo}
          onChangeText={todo => setTodo(todo)}
          onPress={() => addTask(todo)}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

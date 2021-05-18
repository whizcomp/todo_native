import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
// import AppText from "./Reusable/AppText";
import Opener from "./Opener";
import { init } from "./db/todo";
import Todo from "./components/Todo";
init()
  .then(() => console.log("welcome"))
  .catch(err => console.log("error", err));
export default function App() {
  const [visible, setVisible] = useState(true);
  const onAnimationFinish = () => {
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <Opener visible={visible} onAnimationFinish={onAnimationFinish} />
      <Todo visible={visible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
});

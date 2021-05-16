import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppText({ children,style }) {
  return( <Text style={[styles.container,style]}>{children}</Text>);
}
const styles = StyleSheet.create({
  container: { fontSize: 18 }
});

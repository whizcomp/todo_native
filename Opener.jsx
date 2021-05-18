import React from "react";
import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";
export default function Opener({ visible, onAnimationFinish }) {
  if (!visible) return null;
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <LottieView
        autoPlay
        loop={false}
        style={{ zIndex: 1 }}
        onAnimationFinish={onAnimationFinish}
        source={require("./assets/done1.json")}
      />
    </View>
  );
}

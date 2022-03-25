import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./src/navigation/Navigation";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

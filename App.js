import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigator";
import React from "react";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#2563eb"
        translucent={false}
      />

      <AppNavigator />
    </View>
  );
};

export default App;

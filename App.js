// TO START, type "expo init FolderName" in Terminal, then choose blank template
// Assets folder - for images, audio, video, etc.
// "View" = like a div; gets mapped to native widgets when we compile the app - UIView (if we build for iOS), or Android View
// "Text" = displays text on a screen
// In React Native, use building blocks/components rather than HTML elements
// By default, RN uses function components
// "npm start" - opens browser (Metro Bundler - JS bundler for RN - compiles all JS into single file)
// "Publish or republish project" - to Expo - much easier than going through app stores, but not for production
// "Run on iOS simulator" - Xcode (app store)
// Ctrl + d, Cmd + d to open developer menu on iPhone simulator
// "Run on Android device/emulator" - ran this again when it stopped updating with changes to the code, and this seemed to fix it...
// Cmd + m for developer menu
// On physical phone, shake for developer menu

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Return a JSX expression
  return (
    <View style={styles.container}>
      <Text>Hello World!!! (Newer...3.2)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// This isn't CSS; they're just JS properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// TO START, type "expo init FolderName" in Terminal, then choose blank template
// Assets folder - for images, audio, video, etc.
// "View" = like a div; gets mapped to native widgets when we compile the app - UIView (if we build for iOS), or Android View
// "Text" = displays text on a screen
// In React Native, use building blocks/components rather than HTML elements
// By default, RN uses function components
// "npm start" - opens browser (Metro Bundler - JS bundler for RN - compiles all JS into single file)
// "Publish or republish project" - to Expo - much easier than going through app stores, but not for production
// "Run on iOS simulator" - Xcode (app store)
// Ctrl + d, Cmd + d to open developer menu on iPhone simulator. Or ^ + Cmd + Z?
// "Run on Android device/emulator" - ran this again when it stopped updating with changes to the code, and this seemed to fix it...
// Cmd + m for developer menu
// On physical phone, shake for developer menu

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App executed :)..."); // Shows in terminal where app is running (once for each virtual emulator) - can also click on the devide in localhost:19002 to see the logs
  // Return a JSX expression

  // let x;
  // x.toString();
  // When an error appears, dismiss and then "Debug RemoteJS" ** When done, "Stop Remote Debugging"! - open Chrome dev tools > Sources > stop sign (pause on exceptions) > Pause on caught exceptions
  // Can add breakpoints (click on line #), reload, step over / into (into a function)
  // "Watch" window - +, type "x" and enter - shows that it's undefined

  // Add debugging launch.json file - add configuration > React Native > attach to application > localhost (attach to packager)
  // Add breakpoint, go to debugger on left, @ top attach to packager > Run (don't need to save 1st) > View > Debug Console (change user's react-native.packager.port from 8081 to port number in Metro Bundler) (also close browser debugger page)
  // When done debugging in VS Code, click unplug icon, then in simulator "Stop remote debugging" - will get "Runtime is not ready for debugging" error - reload app from that screen

  // Publishing to Expo means it's available to anyone who has Expo client
  // From Metro Bundler or from Terminal - "expo publish"

  let x = 1;

  return (
    <View style={styles.container}>
      <Text>Hello World!!! (Newer...3.5) Finally updated again.</Text>
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

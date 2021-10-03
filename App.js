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

// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar, Dimensions } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

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

  // let x = 1;
  const handlePress = () => console.log("Pressed the text")

  // console.log(require('./assets/rainbow.jpeg')) // prints a #, which is the reference to the image

  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const orientation = useDeviceOrientation();
  const {landscape} = useDeviceOrientation();


  return (
      //  <SafeAreaView style={styles.container}>
      //  <SafeAreaView style={{ backgroundColor: "dodgerblue" }}>
      //  <SafeAreaView style={containerStyle}>
      // Object on right overwrites properties of object on left
      // SafeAreaView only works on iOS, has no effect on Android - add padding manually @ top (Platform module)
      //  <SafeAreaView style={[styles.container, containerStyle]}>
      //   {/* Buttons have different defaults (e.g., colour) on Android/iOS; changing "color" changes background on Android and text on iOS */}
      //   <Button 
      //     color="rebeccapurple"
      //     title="Click Me" 
      //     // onPress={() => console.log("Button clicked")}
      //     // onPress={() => alert("Button clicked!!")}
      //     onPress={() => 
      //       // Alert.alert("My Title", "My Message", [
      //       //   {text: "Yep", onPress: () => console.log("Yep pushed")},
      //       //   {text: "Nope", onPress: () => console.log("Nope pushed")}
      //       // ])
      //       // Prints out whatever's entered into the prompt
      //       // Currently only works for iOS
      //       Alert.prompt("My prompt title", "My prompt message", text => console.log(text))
      //   }
      //   />
      //  </SafeAreaView>

// Layouts
    <SafeAreaView style={styles.container}>
      <View style={{
        // backgroundColor: 'dodgerblue',
        backgroundColor: 'white',
        // #s = Density-Independent Pixels (abstract units; not pixels) - this means they'll look almost the same size across different devices
        // width: 150,
        // width: "50%",
        // width: "100%",
        // height: 70
        // height: "30%"
        // height: landscape ? "100%" : "30%",
        // Can use Dimensions API to fine-tune the size of a component according to the size of a screen
        // "Window" is a bit smaller than screen on Android (only the visible part); they're the same on iOS
        // This API doesn't respond to orientation changes
        // To change orientation, Cmd + L/R arrow
        // Go to app.json, change from "orientation": "portrait" to "default", to support both orientations
        // To detect screen orientation, use library "hooks" from react-native-community ("npm i @react-native-community/hooks"), import "useDimensions" and "useDeviceOrientation"

        // FLEXBOX
        flex: 1, // Flex 1 grows to fill available free space
        flexDirection: "row",
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis (within one line)
        alignContent: "center", // need this if it's going to be wrapped on multiple lines
        flexWrap: "wrap"
      }}>
        {/* <Text>hi</Text> */}
        <View 
          style={{
            backgroundColor: "dodgerblue",
            // flex: 2,
            // flexBasis: 100, // primary axis (same as width/height: 100)
            // flexGrow: 1,
            // flex: 1,
            // width: 400,
            // flexShrink: 1, // Same as flex: -1, but doesn't seem to be working like Mosh showed..  *** Look into this.
            // flex: -1,
            width: 100,
            height: 100,
            // alignSelf: "flex-start"
          }}
        />
        <View 
          style={{
            backgroundColor: "gold",
            // flex: 1
            width: 100,
            height: 100,
            top: 20,
            left: 20,
            position: "absolute"
          }}
        />
        <View 
          style={{
            backgroundColor: "tomato",
            // flex: 1
            width: 100,
            height: 100
          }}
        />
        {/* <View 
          style={{
            backgroundColor: "grey",
            // flex: 1
            width: 100,
            height: 100
          }}
        /> */}
        {/* <View 
          style={{
            backgroundColor: "greenyellow",
            // flex: 1
            width: 100,
            height: 100
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "pink"}

// This isn't CSS; they're just JS properties
// Best to use this StyleSheet API to define styles (rather than inline, etc.)
// Can move styles into a separate file and import, but it's conventional to leave them directly below the component like this.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // Bring up property options: Fn + Ctrl + Space
    // paddingTop: Platform.OS === "android" ? 20 : 0, // not needed?
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
  },
  image: {
    height: 100,
    // width: undefined,
    // aspectRatio: 1/1,
    // resizeMode: 'stretch',
    // resizeMode: 'cover',
    resizeMode: 'contain',

  }
});


// TEXT/IMAGES/TOUCHABLES - MOVED DOWN TO UNCLUTTER THE MAIN CODE BLOCK
   // Can use View or SafeAreaView (avoids the phone notch area)
    // <View style={styles.container}>
    // <SafeAreaView style={styles.container}>
    //   <Text numberOfLines={1} onPress={handlePress}>
    //   {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}> */}
    //     Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn! Hello World!!! Time to learn!</Text>

{/* IMAGES */}
        {/* Best to only use static images for assets that need to be shipped with the app, like icon/splash screen - otherwise, download */}
        {/* <Image source={require('./assets/rainbow.jpeg')} style={styles.image} /> */}
        {/* Need to manually specify dimensions for network images (linked from internet) */}

{/* TOUCHABLES */}
        {/* <TouchableWithoutFeedback */}
        {/* <TouchableOpacity */}

        {/* <TouchableHighlight
          onPress={() => console.log("image tapped")}
        >
          <Image 
            blurRadius={3}
            source={{ 
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300" 
            }} 
            /> 
        </TouchableHighlight> */}

        {/* </TouchableOpacity> */}
        {/* </TouchableWithoutFeedback> */}

{/* ANDROID - TOUCHABLE NATIVE FEEDBACK */}
        {/* Only for Android, but the coloured block appears on both.. the native feedback effect (darkening when clicked) only works for Android here, though */}
        {/* <TouchableNativeFeedback onPress={() => console.log("TNF is only for Android")}>
          <View style={{ width: 200, height: 70, backgroundColor: "yellow"}}>
          </View>

        </TouchableNativeFeedback> */}

    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // </View>
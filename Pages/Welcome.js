import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { navigator as navigateTo } from "../components/navigateTo";

const coverImage = require("../assets/img/sticky-notes.png");
const Welcome = ({navigation}) => {
  return (
    <View style={styles.root}>
        {/* header logo text */}
      <SafeAreaView style={{ marginBottom: 10 }}>
        <Text style={styles.logoText}>
          EveryDay<Text style={styles.logoTextChild}>Task</Text>
        </Text>
      </SafeAreaView>
      {/* image */}
      <View style={styles.imageContainer}>
        <Image source={coverImage} style={styles.image} />
      </View>
      {/* heading */}
      <Text style={styles.headingText}>
        Manage your Daily Flow with
        <Text style={styles.headingChildText}> EveryDayTask</Text>
      </Text>
      {/* button */}
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.6 : 1 },
          [{ marginTop: 20 }, styles.button],
        ]}
        android_ripple={{ color: colors.secondary100 }}
        onPress={() => navigateTo(navigation, 'HomePage')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.primary100,
  },
  logoText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  logoTextChild: {
    color: colors.secondary100,
  },
  imageContainer: {
    height: 400,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%", // Set the image height to "100%" to match its container's height
    resizeMode: "cover",
  },
  headingText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  headingChildText: {
    color: colors.secondary100,
  },
  button: {
    padding: 24,
    width: "100%",
    backgroundColor: colors.secondary100,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18,
  },
});

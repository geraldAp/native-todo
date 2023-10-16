import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

const TodoInput = ({ setTitle, description, title, setDescription , createTodo }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.headingText}>Daily tasks</Text>
      {/* title */}
      <View>
        <Text style={styles.miniHeadings}>Title</Text>
        <TextInput
          onChangeText={(enteredText) => setTitle(enteredText)}
          value={title}
          style={styles.input1}
          placeholder="what do you call this "
        />
      </View>
      {/* description */}
      <View>
        <Text style={styles.miniHeadings}>Description....</Text>
        <TextInput
          style={styles.input1}
          placeholder="give a description of your task....."
          numberOfLines={5}
          multiline={true}
          maxLength={150}
          onChangeText={(enteredText) => setDescription(enteredText)}
          value={description}
        />
      </View>
      {/* button */}
      <View style={styles.buttonOuterContainer}>
        <Pressable
          android_ripple={{ color: "#444" }}
          style={styles.buttonInnerContainer}
          onPress={createTodo}
        >
          <Text style={styles.buttonText}>add to list</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 9,
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  miniHeadings: {
    fontSize: 17,
    fontWeight: "800",
    color: "#29292e",
  },
  input1: {
    borderWidth: 0,
    borderRadius: 6,
    width: "100%",
    backgroundColor: "#b382f5",
    // padding: 8,
    paddingHorizontal: 6,
    color: "#120438",
    borderColor: "#e4d0ff",
    marginVertical: 8,
    fontSize: 14,
  },
  buttonInnerContainer: {
    backgroundColor: "#212127",
    borderRadius: 6,
    padding: 8,
    elevation: 6,
  },
  buttonOuterContainer: {
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});

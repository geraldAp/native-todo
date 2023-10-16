import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Todos = ({ todos , deleteTodo }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>{todos.title}</Text>
      <Text style={styles.descriptionText}>{todos.description}</Text>
      <Text style={styles.DateTimeText}>{todos.DateTime}</Text>
      <View style={styles.deleteButton}>
        <Pressable
        onPress={()=> deleteTodo(todos.id)}
        >
          <Ionicons name="trash-bin" size={24} color="gray" />
        </Pressable>
      </View>
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 16,
    paddingTop: 18,
    backgroundColor: "#b382f5",
    borderRadius: 9,
    height: 140,
    marginBottom: 4,
    position: "relative",
    elevation: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionText: {
    fontSize: 14,
  },
  DateTimeText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "black",
    fontSize: 12,
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

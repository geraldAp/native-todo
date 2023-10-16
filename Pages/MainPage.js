import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import TodoInput from "../components/todoInput";
import Todos from "../components/todos";
import { v4 as uuidv4 } from "uuid";

const currentDate = new Date();
// Format the date and time as a string
const formattedDate = currentDate.toLocaleDateString(); // e.g., "9/29/2023"
const formattedTime = currentDate.toLocaleTimeString(); // e.g., "10:30:45 AM"

// Combine the date and time
const formattedDateTime = `${formattedDate} ${formattedTime}`;
const MainPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);

  // creating the to do function
  function createTodo() {
    const id = uuidv4();
    setTodos((prevTodos) => [
      {
        key: id,
        title: title,
        description: description,
        DateTime: formattedDateTime,
      },
      ...prevTodos,
    ]);
    console.log(title);
    console.log(description);
    setTitle("");
    setDescription("");
  }
  // deleting todo
  function deleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <KeyboardAvoidingView
      style={styles.rootContainer}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
    >
      {/* input area */}
      <View style={styles.inputContainer}>
        <TodoInput
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          createTodo={createTodo}
        />
      </View>
      {/* todos  */}
      <View style={styles.todosContainer}>
        <Text></Text>
        <FlatList
          data={todos}
          renderItem={(itemData) => <Todos todos={itemData.item} deleteTodo={deleteTodo} />}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }} // Add this style to make the FlatList scrollable
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  todosContainer: {
    flex: 1, // Add this to allow the FlatList to scroll
    marginTop: 12,
  },
  tasksHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import categories from "./dataConstants/categories";

const ModalScreen = ({ visibility, closeModal }) => {
  const [category, setCategory] = useState();

  return (
    <Modal visible={visibility} animationType="fade">
      <View style={styles.modalContainer}>
        {/* Header */}
        <SafeAreaView style={{ marginBottom: 36 }}>
          <View style={styles.header}>
            {/* button to close modal */}
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.7 } : "")}
              onPress={() => closeModal()}
            >
              <Ionicons name="arrow-back" size={30} color="white" />
            </Pressable>
            {/* heading  */}
            <Text style={styles.modalHeaderText}>Add new Task</Text>
          </View>
        </SafeAreaView>
        {/* Title */}
        <View style={styles.divider}>
          <Text style={styles.inputTitles}>Title</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="eg: clean my room"
            />
          </View>
        </View>
        {/* Category */}
        <View style={styles.divider}>
          <Text style={styles.inputTitles}>Category</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.inputContainer}
          >
            {categories.map((cat) => (
              <Picker.Item
                key={cat.title}
                label={cat.title}
                value={cat.title}
              />
            ))}
          </Picker>
        </View>
        {/* more details  */}
        <View style={styles.divider}>
          <Text style={styles.inputTitles}>Description</Text>
          <TextInput
            style={[styles.inputContainer, {borderRadius: 20}]}
            multiline
            numberOfLines={7} // You can adjust this to control the number of visible lines
            placeholder="eg: mop the floor after lay my bed"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.primary100,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    gap: 50,
    alignItems: "center",
  },
  modalHeaderText: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  inputTitles: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
    marginBottom: 4,
  },
  inputContainer: {
    padding: 16,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#4444",
    backgroundColor: colors.primary200,
  },
  divider: {
    marginBottom: 20,
  },
  inputText: {
    fontSize: 16,
    color: "#444",
  },
  picker: {
    backgroundColor: colors.primary200,
  },
});

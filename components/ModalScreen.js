import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import CategoryCard from "./ui/categoryCard";
import categories from "./dataConstants/categories";

const ModalScreen = ({ visibility, closeModal , navigation }) => {
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
        <View style={styles.cardView}>
          <Text
            style={{
              color: colors.secondary100,
              fontSize: 20,
              marginBottom: 16,
              fontWeight: "600",
            }}
          >
            Where Do You Want To Add A Task
          </Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <CategoryCard navigation={navigation}  closeModal={closeModal} data={item} />}
            numColumns={2}
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
  cardView: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
  },
});

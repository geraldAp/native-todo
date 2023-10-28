import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../constants/colors";

const AddTask = ({ openModal }) => {
  const handleAddTask = () => {
    openModal();
  };

  return (
    <View style={{ overflow: "hidden", borderRadius: 50 }}>
      <Pressable
        android_ripple={{ color: "#FFF59D" }}
        style={styles.innerContainer}
        onPress={handleAddTask}
      >
        <FontAwesome name="plus" size={20} color={colors.primary200} />
        <Text
          style={{ color: colors.primary200, fontSize: 14, fontWeight: "800" }}
        >
          AddTask
        </Text>
      </Pressable>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    gap: 4,
    padding: 8,
    backgroundColor: colors.secondary100,
    elevation: 3,
  },
});

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../constants/colors";

const SearchFilter = () => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={24} color={colors.secondary100} />
      <TextInput
        style={{ paddingLeft: 8, fontSize: 16 }}
        placeholder="Search content"
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: colors.primary200,
    borderRadius: 10,
    marginBottom: 24,
  },
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const categoryCard = ({ data, navigation, closeModal }) => {
  const handleNavigation = (location) => {
    closeModal();
    navigation.navigate(location);
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={[
          { backgroundColor: data.backgroundColor },
          styles.innerContainer,
        ]}
        onPress={() => handleNavigation(data.location)}
      >
        <FontAwesome name={data.iconName} color={data.iconColor} size={28} />
        <Text style={styles.cardText}>{data.title}</Text>
      </Pressable>
    </View>
  );
};

export default categoryCard;

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
  },
  innerContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 140,
    borderRadius: 9,
    margin: 12,
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  cardText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "700",
  },
});

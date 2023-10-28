import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import SearchFilter from "../components/ui/SearchFilter";
import CategoryList from "../components/ui/CategoryList";
import colors from "../constants/colors";
import AddTask from "../components/ui/AddTask";
import ModalScreen from "../components/ModalScreen";

const MainPage = ( {navigation}) => {
  const [visibility, setVisibility] = useState(false);
  // open the modal
  function openModal() {
    setVisibility(true);
  }
  //   close the modal
  function closeModal() {
    setVisibility(false);
  }
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={{ padding: 16 }}>
          <SafeAreaView style={{ marginVertical: 24 }}>
            <Text style={styles.headerText}>
              Welcome Back <Text style={styles.headerChildText}>Gerald</Text>
            </Text>
          </SafeAreaView>
          {/* search filter */}
          <SearchFilter />
          {/* category */}
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.categoryHeading}>Category</Text>
            <CategoryList />
          </View>
        </View>
        {/* Tasks container */}
        <View style={styles.taskContainer}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskHeading}>Here are your tasks</Text>
            <View>
              <AddTask openModal={openModal} />
            </View>
          </View>
        </View>
        <ModalScreen visibility={visibility} navigation={navigation} closeModal={closeModal} />
      </View>
    </>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.primary100,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerChildText: {
    color: colors.secondary100,
  },
  categoryHeading: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.secondary100,
    marginBottom: 14,
  },
  taskContainer: {
    flex: 1,
    backgroundColor: colors.primary200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  taskHeading: { color: colors.secondary100, fontSize: 16, fontWeight: "600" },
});

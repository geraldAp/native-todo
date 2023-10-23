import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator as stack } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainPage from "./Pages/MainPage";
import Welcome from "./Pages/Welcome";

const Stack = stack();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="HomePage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});

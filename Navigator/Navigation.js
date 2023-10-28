import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator as stack } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainPage from "../Pages/MainPage";
import Welcome from "../Pages/Welcome";
import WorkPage from "../Pages/categoryPages/WorkPage";
import PersonalPage from "../Pages/categoryPages/PersonalPage";
import HealthPage from "../Pages/categoryPages/HealthPage";
import EducationPage from "../Pages/categoryPages/EducationPage";

// defining the Stack method
const Stack = stack();

export default function Navigation() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="HomePage" component={MainPage} />
          <Stack.Screen
            name="Work"
            options={{ headerShown: true }}
            component={WorkPage}
          />
          <Stack.Screen
            name="Personal"
            options={{ headerShown: true }}
            component={PersonalPage}
          />
          <Stack.Screen
            name="Health"
            options={{ headerShown: true }}
            component={HealthPage}
          />
          <Stack.Screen
            name="Education"
            options={{ headerShown: true }}
            component={EducationPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

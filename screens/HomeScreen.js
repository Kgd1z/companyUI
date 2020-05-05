import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

import LoginForm from "../components/loginForm.js";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";

export default function nextScreen() {
  return (
    <View>
      <Image
        style={styles.img}
        source={require("../assets/images/charipic.png")}
      />

      <View style={styles.container}>
        <View></View>

        <View style={{ paddingTop: 30 }}>
          <Text style={styles.h1}>Welcome to our community!</Text>
          <Text style={styles.p1}>
            We appreciate you taking the time for downloading our app and
            evaluating us
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
  },
  h1: {
    fontWeight: "bold",
    color: "black",
    fontSize: 35,
    paddingBottom: 20,
  },
  p1: {
    paddingBottom: 20,
    color: "#B2BBC7",
  },
  button: {
    backgroundColor: "#0379FC",
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    marginBottom: 600,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  img: {
    height: 320,
    width: 420,
    padding: 0,
    marginTop: 100,
  },
});

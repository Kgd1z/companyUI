import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ShadowPropTypesIOS,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { MonoText } from "../components/StyledText";

export default function LoginForm() {
  const [iconName, setIconName] = React.useState("eye");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [visiblePassword, toggleVisiblePassword] = React.useState(true);
  const [passwordLength, setPasswordLength] = React.useState("");
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [invalidPhoneNumber, setInvalidPhoneNumber] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  validatePassword = (text) => {
    if (text.length < 10) {
      setPassword(text);
      return setInvalidPassword(true);
    }

    setInvalidPassword(false);
    setPassword(text);
  };
  validatePhoneNumber = (text) => {
    if (text.length !== 10) {
      setPhoneNumber(text);
      return setInvalidPhoneNumber(true);
    }
    setInvalidPhoneNumber(false);
    setPhoneNumber(text);
  };

  onIconPress = () => {
    let iconName = visiblePassword ? "eye-off" : "eye";
    toggleVisiblePassword(!visiblePassword);
    setIconName(iconName);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.loginForm}>
      <Text style={styles.header}>THE COMPANY</Text>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.header}>Phone Number</Text>
      <TextInput
        style={styles.TextInput}
        onChangeText={(text) => {
          validatePhoneNumber(text);
        }}
      />
      <Text>
        {invalidPhoneNumber && (
          <Text style={{ color: "red" }}>
            Please enter a valid phone number.
          </Text>
        )}
      </Text>

      <Text style={styles.header}>Email</Text>
      <TextInput style={styles.TextInput} />
      <Text style={styles.header}>Password</Text>

      <View style={styles.TextInput}>
        <TextInput
          onChangeText={(text) => {
            validatePassword(text);
          }}
          style={{ flex: 1 }}
          secureTextEntry={visiblePassword}
        />
        <TouchableOpacity onPress={onIconPress}>
          <Icon color="grey" name={iconName} size={20} />
        </TouchableOpacity>
      </View>
      {invalidPassword && (
        <Text style={{ color: "red" }}>
          Password must exceed 10 characters.
        </Text>
      )}

      <CheckBox
        onPress={() => {
          setChecked(!checked);
        }}
        containerStyle={styles.checkbox}
        textStyle={styles.bluetext}
        title={"Terms & Conditions"}
        checked={checked}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("nextScreen");
        }}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={{ paddingBottom: 70 }}>
        <Text style={styles.header}>You dont have an account? </Text>
        <Text style={styles.bluetext}>Sign Up</Text>
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.googleButton}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Image
                style={styles.tinylogo}
                source={require("../assets/images/google.png")}
              />
            </View>
            <View style={{ flex: 8 }}>
              <Text
                style={{
                  color: "grey",
                  fontSize: 18,
                  paddingTop: 15,
                  fontWeight: "bold",
                }}
              >
                Login with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.facebookButton}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <Image
                style={{ alignSelf: "flex-start", marginLeft: -14 }}
                source={require("../assets/images/facebook.png")}
              />
            </View>

            <View style={{ flex: 8 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  paddingTop: 15,
                }}
              >
                Login with Facebook
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    alignSelf: "stretch",
  },
  tinylogo: {
    alignSelf: "flex-start",
    marginLeft: 2,
  },
  bluetext: {
    color: "#308CF1",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    fontSize: 15,
    color: "#B2BBC7",
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  TextInput: {
    alignSelf: "stretch",
    marginBottom: 0.7,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEFF2",
    flexDirection: "row",
    paddingVertical: 1,
  },
  logIn: {
    fontSize: 38,
    color: "black",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#0379FC",
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: "#39559F",
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    flex: 6,
    paddingTop: 5,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: "white",
    height: 60,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "grey",
    flex: 6,
    paddingTop: 5,

    marginBottom: 10,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkbox: {
    alignSelf: "stretch",
    borderColor: "white",
    backgroundColor: "white",
    marginLeft: -9,
  },
});

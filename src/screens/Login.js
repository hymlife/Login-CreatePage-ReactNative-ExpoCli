import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import Create from "./Create";

const Login = ({ navigation }) => {
  const [userName, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerText}>Login Account</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="UserName"
          placeholderTextColor="white"
        />
        <View style={styles.row}></View>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor="white"
        />
        <View style={styles.row}></View>
      </View>

      <View>
        <TouchableOpacity style={styles.forgetPassArea}>
          <Text style={styles.forgetPassText}>Forget Password</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonArea}>
          <Text style={styles.buttonText}>Login </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.LoginArea}
          onPress={() => navigation.navigate("Create")}
        >
          <Text style={styles.loginText}>Create Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e39c2b",
    flexDirection: "column",
  },

  headerArea: {
    marginVertical: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
  },

  input: {
    fontSize: 20,
    color: "white",
    borderRadius: 15,
    marginHorizontal: 25,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  row: {
    paddingVertical: 0.5,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginBottom: 35,
  },

  forgetPassArea: {
    alignItems: "center",
    marginBottom: 25,
  },
  forgetPassText: {
    fontSize: 15,
  },

  buttonArea: {
    backgroundColor: "black",
    paddingVertical: 25,
    marginHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },

  LoginArea: {
    alignItems: "center",
    marginTop: "35%",
  },
  loginText: {
    fontSize: 20,
    color: "black",
  },
});

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";

const Create = ({ navigation }) => {
  const [userName, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [mailId, onChangeMailId] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerText}>Create Account</Text>
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
        <TextInput
          style={styles.input}
          onChangeText={onChangeMailId}
          value={mailId}
          placeholder="Mail Id"
          placeholderTextColor="white"
        />
        <View style={styles.row}></View>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonArea}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.LoginArea}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3840",
    flexDirection: "column",
  },

  headerArea: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
  },

  inputArea: {
    flex: 5,
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
  buttonArea: {
    backgroundColor: "#F0A04B",
    paddingVertical: 25,
    marginHorizontal: 25,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },

  LoginArea: {
    alignItems: "center",
    marginTop: 50,
  },
  loginText: {
    fontSize: 20,
    color: "#F0A04B",
  },
});

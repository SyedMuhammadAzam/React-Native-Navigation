import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const fNamHandler = (text) => {
    setName(text);
  };
  // props.onAdd(name);
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Text h1 style={{ fontSize: 30, marginBottom: 30, marginTop: -100 }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="name"
          value={name}
          onChangeText={fNamHandler}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password (6 or more characters)"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="URL"
          value={url}
          onChangeText={(text) => setUrl(text)}
        />
      </View>
      <Button
        onPress={() =>
          navigation.navigate("Login", {
            itemId: Math.random(),
            otherParam: name,
            otherParam2: email,
            otherParam3: password,
          })
        }
        title={"Register"}
        containerStyle={styles.button}
      />

      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        containerStyle={styles.button}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { marginBottom: 0, width: 300 },
  button: { marginTop: 10, width: 200, marginLeft: 0 },
});

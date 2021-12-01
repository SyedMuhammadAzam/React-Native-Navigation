import React from "react";
import { KeyboardAvoidingView, StyleSheet, View , Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const itemId = route?.params?.itemId;
  const otherParam = route?.params?.otherParam;
  const emailProp = route?.params?.otherParam2;
  const passwordProp = route?.params?.otherParam3;
  console.log(route.params,"login")

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style={"light"} />
      
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title={"Login"}
          containerStyle={styles.button}
          onPress={() => {
            if (password != passwordProp) {
              alert("password is in correct");
            }
            if (email != emailProp) {
              alert("email is in correct");
            }
            if (email == emailProp && password == passwordProp) {
              navigation.navigate("Home", {
                itemId: itemId,
                otherParam: otherParam,
                otherParam2: emailProp,
              });
            }
          }}
        />
        <Button
          onPress={() => navigation.navigate("Register")}
          title={"Register"}
          type={"outline"}
          containerStyle={styles.button}
        />
        <View style={{ height: 150 }} />
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    marginBottom: 0,
    width: 300,
  },
  button: { marginTop: 10, width: 200, marginLeft: 50 },
});

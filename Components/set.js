import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { Button, Input } from "react-native-elements";

const Set = (props) => {
  const [add, setAdd] = useState("");

  function inputChangeHanlder(text) {
    setAdd(text);
  }

  return (
    <View>
      <Input
        placeholder="Enter Name"
        onChangeText={inputChangeHanlder}
        value={add}
        style={styles.input}
      />
      <Button
        style={{ marginTop: 10, width: 200, marginLeft: 50 }}
        title="Add Name"
        onPress={() => props.onOkay(add)}
      />
    </View>
  );
};

export default Set;

const styles = StyleSheet.create({
  input: {
    marginBottom: 0,
    width: 300,
  },
});

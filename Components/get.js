import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Get = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Get;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

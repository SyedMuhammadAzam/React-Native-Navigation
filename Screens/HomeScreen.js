import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterScreen from "./RegisterScreen";
import { Button } from "react-native-elements";

const HomeScreen = ({ route, navigation }) => {
  console.log(route.params);

  const { itemId, otherParam , otherParam2 , otherParam3 } = route.params;
console.log(route.params,"home")
  return (
    <View>
      <Text h1 style={{ fontSize: 30 }}>
        Your Random Id : {itemId}
      </Text>
      <Text>Your Full Name:{otherParam}</Text>
      <Text>Email:{otherParam2}{otherParam3}</Text>

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

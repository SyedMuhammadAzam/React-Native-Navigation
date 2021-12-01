import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Modal,
  Alert,
  Pressable,
} from "react-native";

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Button, Input, Image } from "react-native-elements";
import Get from "./Components/get";
import Set from "./Components/set";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#3090D1" },
  headerTitleStyle: { color: "white" },
  headerTintStyle: { color: "#FFFFFF" },
};

const App = () => {
  // const [show, setShow] = useState([]);
  // const [modalVisible, setModalVisible] = useState(false);

  // function showHandler(inputTitle) {
  //   console.log();
  //   setShow((textInput) => [
  //     ...textInput,
  //     { id: Math.random().toString(), value: inputTitle },
  //   ]);
  // }

  // function removeItem(itemId) {
  //   setShow((textInput) => {
  //     return textInput.filter((text) => text.id !== itemId);
  //   });
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
     
    //   <View style={styles.centeredView}>
    //     <Modal
    //       animationType="slide"
    //       transparent={true}
    //       visible={modalVisible}
    //       onRequestClose={() => {
    //         Alert.alert("Modal has been closed.");
    //         setModalVisible(!modalVisible);
    //       }}
    //     >
    //       <View style={styles.centeredView}>
    //         <View style={styles.modalView}>
    //           <Set onOkay={showHandler} />
    //           <FlatList
    //             keyExtractor={(item, index) => item.id}
    //             data={show}
    //             renderItem={(renderItem) => (
    //               <Get
    //                 id={renderItem.item.id}
    //                 onDelete={removeItem}
    //                 text={renderItem.item.value}
    //               />
    //             )}
    //             // keyExtractor={(item) => item.id}
    //           />
    //           <Pressable
    //             style={[styles.button, styles.buttonClose]}
    //             onPress={() => setModalVisible(!modalVisible)}
    //           >
    //             <Text style={styles.textStyle}>Hide Modal</Text>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </Modal>
    //     <Button
    //       style={[styles.button, styles.buttonOpen]}
    //       onPress={() => setModalVisible(true)}
    //     >
    //       <Text style={styles.textStyle}>Show Modal</Text>
    //     </Button>
    //   </View>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

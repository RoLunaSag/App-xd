import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <SafeAreaView style={PrimerStyle.container}>
      <View style={[PrimerStyle.viewpage]}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
        <Router />
      </View>
    </SafeAreaView>
  );
};



const PrimerStyle = StyleSheet.create({
  Center: {
    alignItems: "center",
    justifyContent: "center",
  },
  ImgBack: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontStyle: "italic",
    fontSize: 40,
    color: "#000",
  },
  Size: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
  ButtonOp: {
    backgroundColor: "#000",
    marginTop: 3,
    padding: 5,
    fontSize: 15,
  },
  viewpage: {
    flex: 1,
    width: "100%",
  },
  container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;

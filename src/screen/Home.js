import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity,
} from "react-native";
import raphtalia from "../../assets/raphtalia-pan.jpg";

export default function Home(props) {
  return (
    <ImageBackground
      source={{
        uri: "https://k62.kn3.net/taringa/5/4/D/6/E/D/Drk-zero/1B1.jpg",
      }}
      style={PrimerStyle.ImgBack}
    >
      <View style={PrimerStyle.Center}>
        <Text style={PrimerStyle.Title}>Hola Mundo!</Text>
        <Image source={raphtalia} style={PrimerStyle.Size} />

        <Button
          color="green"
          title=":d"
          onPress={() => Alert.alert("Presionado!")}
        />
        <TouchableOpacity
          onPress={() => console.log("Boton pro xd")}
          style={PrimerStyle.ButtonOp}
        >
          <Text style={{ color: "#fff" }}>Boton pro</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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

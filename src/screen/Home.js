import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import raphtalia from "../../assets/raphtalia-pan.jpg";


  const APiData = () => {
    return [
      {
        nombre: "Raphtalia",
        uri: "https://k62.kn3.net/taringa/5/4/D/6/E/D/Drk-zero/1B1.jpg",
      },
      {
        nombre: "Juan",
        uri: "https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/a/a3/FB_IMG_1596591789564.jpg/revision/latest/top-crop/width/360/height/450?cb=20200806023457&path-prefix=es",
      },
      {
        nombre: "Ete sech",
        uri: "https://pbs.twimg.com/profile_images/1316588508170117121/I2LRtmYv_400x400.jpg",
      },
    ];
  };


export default function Home(props) {
  const [status, setStatus] = useState([]);
  
  useEffect(() => {
    const response = APiData();
    setStatus(response);
  }, []);


  console.log("Aqui estan mis datos", status);
  return (
    <ImageBackground
      source={{
        uri: "https://k62.kn3.net/taringa/5/4/D/6/E/D/Drk-zero/1B1.jpg",
      }}
      style={PrimerStyle.ImgBack}
    >
      <ScrollView>
        <View>
          {status.map((item, index) => (
            <View style={PrimerStyle.Center} key={index}>
              <Text style={PrimerStyle.Title}>{item.nombre}</Text>
              <Image source={{ uri: item.uri }} style={PrimerStyle.Size} />
              <Button
                color="green"
                title=":d"
                onPress={() =>
                  props.navigation.navigate("Collection", { item })
                }
              />
              <TouchableOpacity
                onPress={() => console.log("Boton pro xd")}
                style={PrimerStyle.ButtonOp}
              >
                <Text style={{ color: "#fff" }}>Boton pro</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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

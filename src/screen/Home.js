import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";

import Imagecard from "../components/imagecard";
import raphtalia from "../../assets/raphtalia-pan.jpg";

import { getChampions } from "../apiService/ApiService";

// const APiData = () => {
//   return [
//     {
//       nombre: "Raphtalia",
//       uri: "https://k62.kn3.net/taringa/5/4/D/6/E/D/Drk-zero/1B1.jpg",
//     },
//     {
//       nombre: "Juan",
//       uri: "https://static.wikia.nocookie.net/mamarre-estudios-espanol/images/a/a3/FB_IMG_1596591789564.jpg/revision/latest/top-crop/width/360/height/450?cb=20200806023457&path-prefix=es",
//     },
//     {
//       nombre: "Ete sech",
//       uri: "https://pbs.twimg.com/profile_images/1316588508170117121/I2LRtmYv_400x400.jpg",
//     },
//   ];
// };
// //hola

export default function Home(props) {
  const [status, setStatus] = useState();

  useEffect(async () => {
    try {
      const _champions = await getChampions();
      let ListChampios = _champions.data ?? [];
      setStatus([ListChampios]);
      if (status == undefined) {
        return _champions;
      }
    } catch (e) {
      console.log(`Porque fallo??? `, e);
    }
  }, []);

  console.log("Aqui estan mis gatos ========> ", status);

  if (status == undefined) {
    return <ActivityIndicator style={'large'} color={'#555555'} />;
  }
  return (
    <ImageBackground
      source={{
        uri: "https://k62.kn3.net/taringa/5/4/D/6/E/D/Drk-zero/1B1.jpg",
      }}
      style={PrimerStyle.ImgBack}
    >
      <View style={{ width: "100%", height: "100%" }}>
        <SafeAreaView>
          <FlatList
            data={status}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Imagecard onPress={() => props.navigation.navigate("Collection", { item })} key={index.toString()} />
            )}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

{
  /* <Imagecard
key={index.toString()}
  onPress={() =>
    props.navigation.navigate("Collection", { item })
  }
  source={{ uri: item.image.sprite }}
  title={item.id}
  subTitle={item.title}
/>  */
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

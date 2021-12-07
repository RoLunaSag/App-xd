import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import { getDetailChampion, getImageChapion } from "../apiService/ApiService";

export default function CollectionImagesScreen(props) {
  const IMAGEN_CHIDA = props.route.params.item;
  const idChampion = props.route.params.item.id;

  const [champion, setChampion] = useState("");
  const [imgchampion, setImgChampion] = useState(undefined);

  useEffect(async () => {
    const getChampion = await getDetailChampion(idChampion);
    setChampion(getChampion);

    const getImg = await getImageChapion(idChampion);
    setImgChampion(getImg);
  }, []);

  console.log(
    "AQUI ESTA LA INFORMACION DE ESE VATO QUIEBRATELO : ",
    imgchampion
  );

  if (imgchampion == undefined) {
    return <ActivityIndicator style={"large"} color={"#555555"} />;
  }
  return (
    <ImageBackground
      source={{
        uri: "https://img.discogs.com/UOkoRRp9hPwM-1p1-XpLJIRvPJY=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-391322-1590457007-2317.jpeg.jpg",
      }}
      style={styles.ImageBack}
    >
      <View style={styles.Vista}>
        <Text style={styles.Title}>{idChampion}</Text>
        <Image
          style={styles.ImageBody}
          resizeMode={"stretch"}
          source={{ uri: imgchampion.config.url }}
        />
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  Title: {
    fontStyle: "italic",
    fontSize: 40,
    color: "#000",
    textAlign: "center",
  },
  ImageBody: {
    width: width * 0.9,
    height: height * 0.8,
  },
  ImageBack: {
    width: width,
    height: height,
  },
  Vista: {
    alignItems: "center",
  },
});

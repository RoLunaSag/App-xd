import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";

export default function CollectionImagesScreen(props) {
  const IMAGEN_CHIDA = props.route.params.item;

  return (
      <ImageBackground source={{uri:"https://img.discogs.com/UOkoRRp9hPwM-1p1-XpLJIRvPJY=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-391322-1590457007-2317.jpeg.jpg"}}
      style= {styles.ImageBack}>
    <View style= {styles.Vista}>
      <Text style={styles.Title}>{IMAGEN_CHIDA.nombre}</Text>
      <Image
        style={styles.ImageBody}
        resizeMode={"cover"}
        source={{ uri: IMAGEN_CHIDA.uri }}
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
    textAlign: 'center'
  },
  ImageBody: {
    width: width*0.5,
    height: height * 0.5,
  },
  ImageBack:{
      width:width,
      height:height
  },
  Vista:{
    alignItems:"center"
  }
});

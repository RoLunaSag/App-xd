import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";

export default function imagecard(props) {
  return (
    <View style={PrimerStyle.Center}>
      <TouchableOpacity style={PrimerStyle.ButtonOp} onPress={props.onPress} >
          
        <Image source={props.source} style={PrimerStyle.Size} />
        <View style={PrimerStyle.TextContent}>
            <Text style={PrimerStyle.Title}>{props.title}</Text>
            <Text style={PrimerStyle.subText}>{props.subTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("screen");
const PrimerStyle = StyleSheet.create({
  Center: {
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    marginVertical: 2.1
    
    // marginTop: 5,
    //     elevation:12,
  },
  Title: {
    fontStyle: "italic",
    fontSize: 35,
    color: "#FFF",
    fontWeight: "bold",

  },
  Size: {
      marginVertical: 5,
      marginHorizontal: 5,
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: width * 0.25,
  },
  ButtonOp: {
    color: "#fff",
    elevation: 2,
    flexDirection: "row",
  },
  TextContent: {
      flexDirection: "column",
      width: "71%"
  },
  subText:{
    fontStyle: "italic",
    fontSize: 22,
    color: "#FFF",
    fontWeight: "normal",

  }
});

imagecard.defaultProps = {
  source: {
    uri: "https://i.pinimg.com/564x/47/d8/53/47d8530f96dc1d505f99c2b3aa407b57.jpg",
  },
  title: "Esto es un titulo por default",
  subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet porta nibh, sit amet efficitur nulla.",
  onPress: () => console.log("presionado"),
};

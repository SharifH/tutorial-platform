import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "black"
    },
    "code": {
        "float": "left",
        "width": "50%",
        "border": "1px solid black",
        "backgroundColor": "black"
    },
    "iframe": {
        "width": "49%",
        "float": "left",
        "height": 300,
        "border": "1px solid gray",
        "borderLeft": 0,
        "backgroundColor": "white"
    }
});
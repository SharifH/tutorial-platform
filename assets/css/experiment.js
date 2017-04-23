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
    "editor": {
        "float": "left",
        "width": "100%",
        "height": 100 * vh,
        "border": "1px solid black",
        "backgroundColor": "black"
    },
    "previewEx": {
        "width": "100%",
        "float": "left",
        "height": 100 * vh,
        "border": "1px solid gray",
        "borderLeft": 0,
        "backgroundColor": "white"
    }
});
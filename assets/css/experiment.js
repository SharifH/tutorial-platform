import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "codeEx": {
        "float": "left",
        "width": "50%",
        "height": "90%",
        "border": "1px solid black",
        "backgroundColor": "black",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "previewEx": {
        "width": "50%",
        "float": "left",
        "height": 80 * vh,
        "border": "1px solid gray",
        "marginLeft": 0,
        "backgroundColor": "white"
    }
});
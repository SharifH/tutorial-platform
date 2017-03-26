import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%"
    },
    "header": {
        "backgroundColor": "#252121",
        "height": 100
    },
    "nav": {
        "display": "inline-block"
    },
    "nav li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "nav li a": {
        "textDecoration": "none",
        "color": "white"
    },
    "i": {
        "color": "white"
    },
    "h2": {
        "textAlign": "center",
        "fontWeight": "bold"
    },
    "collection": {
        "backgroundColor": "#322e2d"
    },
    "row": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "inner-box": {
        "backgroundColor": "purple",
        "display": "inline-block",
        "height": 250,
        "width": 250
    },
    "outer-box": {
        "display": "inline-block"
    },
    "intro": {
        "backgroundColor": "#403a3a",
        "color": "white",
        "height": 300,
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": -20,
        "marginRight": 0,
        "marginBottom": -20,
        "marginLeft": 0,
        "position": "relative"
    }
});
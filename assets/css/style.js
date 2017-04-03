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
        "display": "inline-block",
        "float": "right",
        "paddingTop": 10
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
        "fontWeight": "bold",
        "fontSize": 45,
        "color": "white",
        "paddingTop": 102
    },
    "intro-text": {
        "display": "block",
        "width": "70%",
        "fontSize": 38,
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 75,
        "paddingRight": 75,
        "paddingBottom": 75,
        "paddingLeft": 75
    },
    "collection": {
        "backgroundColor": "#322e2d",
        "height": "100%"
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
        "height": 350,
        "width": 350,
        "marginTop": 83,
        "marginRight": 83,
        "marginBottom": 83,
        "marginLeft": 83,
        "border": "20px solid gray"
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
    },
    "buttontry-now-btn": {
        "height": 60,
        "width": 150,
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "fontSize": 30
    },
    "drop-down": {
        "display": "none"
    },
    "span": {
        "display": "inline-block"
    },
    "left": {
        "float": "left"
    },
    "right": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "float": "right"
    },
    "ifa": {
        "fontSize": 35,
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "search": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "instructions": {
        "display": "inline-block",
        "float": "left",
        "width": "50%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "code": {
        "display": "inline-block",
        "float": "left",
        "width": "50%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "livecode": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "float": "right",
        "clear": "left",
        "width": "50%"
    },
    "slideshow": {}
});
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
        "width": "100%",
        "backgroundColor": "#ecf0f1",
        "height": "100%",
        "fontFamily": "Verdana, sans-serif"
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
        "fontSize": 30,
        "color": "white",
        "paddingTop": 53
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
        "backgroundColor": "#ecf0f1",
        "height": 515
    },
    "row": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "inner-box": {
        "backgroundColor": "#2c3e50",
        "display": "inline-block",
        "height": 200,
        "width": 250,
        "marginTop": "2%",
        "marginRight": "8%",
        "marginBottom": "2%",
        "marginLeft": "8%",
        "border": "10px solid gray"
    },
    "intro": {
        "backgroundColor": "#95a5a6",
        "color": "black",
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
    "try-now-btn": {
        "height": 65,
        "width": 180,
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": 10,
        "fontSize": 30,
        "backgroundColor": "#3498db"
    },
    "try-now-btn a": {
        "textDecoration": "none",
        "color": "white",
        "marginTop": "9%",
        "marginRight": "9%",
        "marginBottom": "9%",
        "marginLeft": "9%",
        "display": "inline-block",
        "fontSize": 0.9
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
    "right ifa": {
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
        "float": "left",
        "clear": "left",
        "width": "50%"
    },
    "slideshow": {
        "height": 474,
        "marginTop": -48
    },
    "iframepreview": {
        "width": "50%",
        "height": 710,
        "backgroundColor": "white",
        "border": 0,
        "marginTop": "-19.4%"
    },
    "button-holder": {
        "display": "inline-block",
        "width": "50%",
        "float": "right",
        "height": 66,
        "backgroundColor": "#ecf0f1",
        "marginTop": -3
    },
    "buttoneditor-button": {
        "height": "100%",
        "width": "35%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderStyle": "solid",
        "border": 0,
        "backgroundColor": "#2c3e50",
        "color": "white",
        "fontSize": 30,
        "marginTop": 0,
        "marginRight": "7%",
        "marginBottom": 0,
        "marginLeft": "7%"
    },
    "buttoneditor-buttonEx": {
        "height": "100%",
        "width": "35%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderStyle": "solid",
        "border": 0,
        "backgroundColor": "#2c3e50",
        "color": "white",
        "fontSize": 30,
        "marginTop": 0,
        "marginRight": "7%",
        "marginBottom": 0,
        "marginLeft": "7%"
    }
});
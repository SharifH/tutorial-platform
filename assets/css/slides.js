import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "fontFamily": "Verdana,sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mySlides": {
        "display": "none"
    },
    "slideshow-container": {
        "maxWidth": 490,
        "position": "relative",
        "marginTop": 50,
        "marginLeft": 50
    },
    "prev": {
        "cursor": "pointer",
        "position": "absolute",
        "top": "5%",
        "width": "auto",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "marginTop": 80,
        "color": "white",
        "fontWeight": "bold",
        "fontSize": 18,
        "transition": "0.6s ease",
        "borderRadius": "0 3px 3px 0",
        "left": 0
    },
    "next": {
        "cursor": "pointer",
        "position": "absolute",
        "top": "5%",
        "width": "auto",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "marginTop": 80,
        "color": "white",
        "fontWeight": "bold",
        "fontSize": 18,
        "transition": "0.6s ease",
        "borderRadius": "0 3px 3px 0",
        "left": 540
    },
    "prev:hover": {
        "backgroundColor": "rgba(0,0,0,0.8)"
    },
    "next:hover": {
        "backgroundColor": "rgba(0,0,0,0.8)"
    },
    "h1": {
        "fontSize": 16
    },
    "p": {
        "fontSize": 12
    },
    "numbertext": {
        "color": "black",
        "fontSize": 12,
        "top": 0
    },
    "fade": {
        "WebkitAnimationName": "fade",
        "WebkitAnimationDuration": "1.5s",
        "animationName": "fade",
        "animationDuration": "1.5s"
    },
    "img": {
        "width": 400
    },
    "code": {
        "fontSize": 10
    },
    "img3": {
        "width": 190,
        "height": 170,
        "position": "relative",
        "left": -10
    },
    "img4": {
        "width": 180,
        "height": 190,
        "position": "relative",
        "left": -2,
        "marginTop": -40
    },
    "img5": {
        "width": 200,
        "height": 170
    }
});
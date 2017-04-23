import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%"
    },
    "body": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%"
    },
    "container": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%",
        "background": "#373a47"
    },
    "content-wrap": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%",
        "overflowY": "scroll",
        "WebkitOverflowScrolling": "touch",
        "WebkitTransition": "-webkit-transform 0.4s",
        "transition": "transform 0.4s"
    },
    "menu-wrap a": {
        "color": "#b8b7ad"
    },
    "menu-wrap a:hover": {
        "color": "#c94e50"
    },
    "menu-wrap a:focus": {
        "color": "#c94e50"
    },
    "content": {
        "position": "relative",
        "background": "#b4bad2"
    },
    "content::before": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 10,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0,0,0,0.3)",
        "content": "''",
        "opacity": 0,
        "WebkitTransition": "opacity 0.4s, -webkit-transform 0s 0.4s",
        "transition": "opacity 0.4s, transform 0s 0.4s",
        "WebkitTransform": "translate3d(100%,0,0)",
        "transform": "translate3d(100%,0,0)"
    },
    "menu-button": {
        "position": "fixed",
        "zIndex": 1000,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 2.5,
        "height": 2.25,
        "border": "none",
        "textIndent": 2.5,
        "fontSize": 1.5,
        "color": "transparent",
        "background": "transparent"
    },
    "menu-button::before": {
        "position": "absolute",
        "top": 0.5,
        "right": 0.5,
        "bottom": 0.5,
        "left": 0.5,
        "background": "linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%)",
        "content": "''"
    },
    "menu-button:hover": {
        "opacity": 0.6
    },
    "close-button": {
        "width": 16,
        "height": 16,
        "position": "absolute",
        "right": 1,
        "top": 1,
        "overflow": "hidden",
        "textIndent": 16,
        "border": "none",
        "zIndex": 1001,
        "background": "transparent",
        "color": "transparent",
        "opacity": 0,
        "WebkitTransform": "translate3d(-160px,0,0)",
        "transform": "translate3d(-160px,0,0)",
        "WebkitTransition": "opacity 0s 0.3s, -webkit-transform 0s 0.3s",
        "transition": "opacity 0s 0.3s, transform 0s 0.3s",
        "WebkitTransitionTimingFunction": "cubic-bezier(.17,.67,.1,1.27)",
        "transitionTimingFunction": "cubic-bezier(.17,.67,.1,1.27)"
    },
    "close-button::before": {
        "content": "''",
        "position": "absolute",
        "width": 2,
        "height": "100%",
        "top": 0,
        "left": "50%",
        "background": "#888",
        "WebkitTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "close-button::after": {
        "content": "''",
        "position": "absolute",
        "width": 2,
        "height": "100%",
        "top": 0,
        "left": "50%",
        "background": "#888",
        "WebkitTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "menu-wrap": {
        "position": "absolute",
        "zIndex": 1001,
        "width": 200,
        "height": "100%",
        "fontSize": 1.15,
        "WebkitTransform": "translate3d(-280px,0,0)",
        "transform": "translate3d(-280px,0,0)",
        "WebkitTransition": "-webkit-transform 0.4s",
        "transition": "transform 0.4s"
    },
    "menu": {
        "position": "relative",
        "zIndex": 1000,
        "paddingTop": 3,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "opacity": 0,
        "WebkitTransform": "translate3d(-160px,0,0)",
        "transform": "translate3d(-160px,0,0)",
        "WebkitTransition": "opacity 0s 0.3s, -webkit-transform 0s 0.3s",
        "transition": "opacity 0s 0.3s, transform 0s 0.3s",
        "WebkitTransitionTimingFunction": "cubic-bezier(.17,.67,.1,1.27)",
        "transitionTimingFunction": "cubic-bezier(.17,.67,.1,1.27)"
    },
    "icon-list a": {
        "display": "block",
        "paddingTop": 0.8,
        "paddingRight": 0.8,
        "paddingBottom": 0.8,
        "paddingLeft": 0.8
    },
    "icon-list i": {
        "fontSize": 1.5,
        "verticalAlign": "middle",
        "color": "white"
    },
    "icon-list a span": {
        "marginLeft": 10,
        "fontSize": 0.85,
        "fontWeight": "700",
        "verticalAlign": "middle"
    },
    "morph-shape": {
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "right": 0,
        "fill": "#373a47"
    },
    "show-menu menu-wrap": {
        "WebkitTransitionDelay": "0s",
        "transitionDelay": "0s",
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)"
    },
    "show-menu content::before": {
        "WebkitTransitionDelay": "0s",
        "transitionDelay": "0s",
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)",
        "opacity": 1,
        "WebkitTransition": "opacity 0.4s",
        "transition": "opacity 0.4s"
    },
    "show-menu menu": {
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)",
        "opacity": 1,
        "WebkitTransition": "opacity 0.3s, -webkit-transform 0.3s",
        "transition": "opacity 0.3s, transform 0.3s",
        "WebkitTransitionDelay": "0.4s",
        "transitionDelay": "0.4s"
    },
    "show-menu close-button": {
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)",
        "opacity": 1,
        "WebkitTransition": "opacity 0.3s, -webkit-transform 0.3s",
        "transition": "opacity 0.3s, transform 0.3s",
        "WebkitTransitionDelay": "0.4s",
        "transitionDelay": "0.4s"
    },
    "show-menu morph-shape": {
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)"
    }
});
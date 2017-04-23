import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%"
    },
    "body": {
        "height": "100%",
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "morphsearch": {
        "width": 200,
        "minHeight": 40,
        "background": "#f1f1f1",
        "position": "absolute",
        "zIndex": 10000,
        "top": 20,
        "right": 50,
        "WebkitTransformOrigin": "100% 0",
        "transformOrigin": "100% 0",
        "WebkitTransitionProperty": "min-height, width, top, right",
        "transitionProperty": "min-height, width, top, right",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)",
        "transitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)"
    },
    "morphsearchopen": {
        "width": "100%",
        "minHeight": "100%",
        "top": 0,
        "right": 0
    },
    "morphsearch-form": {
        "width": "100%",
        "height": 40,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "position": "relative",
        "WebkitTransitionProperty": "width, height, -webkit-transform",
        "transitionProperty": "width, height, transform",
        "WebkitTransitionDuration": "0.5s",
        "transitionDuration": "0.5s",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)",
        "transitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)"
    },
    "morphsearchopen morphsearch-form": {
        "width": "80%",
        "height": 160,
        "WebkitTransform": "translate3d(0,3em,0)",
        "transform": "translate3d(0,3em,0)"
    },
    "morphsearch-input": {
        "width": "100%",
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": "10%",
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontWeight": "700",
        "border": "none",
        "background": "transparent",
        "fontSize": 0.8,
        "color": "#ec5a62",
        "WebkitTransition": "font-size 0.5s cubic-bezier(0.7,0,0.3,1)",
        "transition": "font-size 0.5s cubic-bezier(0.7,0,0.3,1)"
    },
    "morphsearch-input::-ms-clear": {
        "display": "none"
    },
    "morphsearchhideInput morphsearch-input": {
        "color": "transparent",
        "WebkitTransition": "color 0.3s",
        "transition": "color 0.3s"
    },
    "morphsearchopen morphsearch-input": {
        "fontSize": 7
    },
    "morphsearch-input::-webkit-input-placeholder": {
        "color": "#c2c2c2"
    },
    "morphsearch-input:-moz-placeholder": {
        "color": "#c2c2c2"
    },
    "morphsearch-input::-moz-placeholder": {
        "color": "#c2c2c2"
    },
    "morphsearch-input:-ms-input-placeholder": {
        "color": "#c2c2c2"
    },
    "gn-search:focus::-webkit-input-placeholder": {
        "color": "transparent"
    },
    "input[type=\"search\"]": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "morphsearch-input:focus": {
        "outline": "none"
    },
    "morphsearch-submit:focus": {
        "outline": "none"
    },
    "morphsearch-submit": {
        "position": "absolute",
        "width": 80,
        "height": 80,
        "textIndent": 100,
        "overflow": "hidden",
        "right": 0,
        "top": "50%",
        "background": "transparent url(../img/magnifier.svg) no-repeat center center",
        "backgroundSize": "100%",
        "border": "none",
        "pointerEvents": "none",
        "transformOrigin": "50% 50%",
        "opacity": 0,
        "WebkitTransform": "translate3d(-30px,-50%,0) scale3d(0,0,1)",
        "transform": "translate3d(-30px,-50%,0) scale3d(0,0,1)"
    },
    "morphsearchopen morphsearch-submit": {
        "pointerEvents": "auto",
        "opacity": 1,
        "WebkitTransform": "translate3d(-30px,-50%,0) scale3d(1,1,1)",
        "transform": "translate3d(-30px,-50%,0) scale3d(1,1,1)",
        "WebkitTransition": "opacity 0.3s, -webkit-transform 0.3s",
        "transition": "opacity 0.3s, transform 0.3s",
        "WebkitTransitionDelay": "0.5s",
        "transitionDelay": "0.5s"
    },
    "morphsearch-close": {
        "width": 36,
        "height": 36,
        "position": "absolute",
        "right": 1,
        "top": 1,
        "overflow": "hidden",
        "textIndent": "100%",
        "cursor": "pointer",
        "pointerEvents": "none",
        "opacity": 0,
        "WebkitTransform": "scale3d(0,0,1)",
        "transform": "scale3d(0,0,1)"
    },
    "morphsearchopen morphsearch-close": {
        "opacity": 1,
        "pointerEvents": "auto",
        "WebkitTransform": "scale3d(1,1,1)",
        "transform": "scale3d(1,1,1)",
        "WebkitTransition": "opacity 0.3s, -webkit-transform 0.3s",
        "transition": "opacity 0.3s, transform 0.3s",
        "WebkitTransitionDelay": "0.5s",
        "transitionDelay": "0.5s"
    },
    "morphsearch-close::before": {
        "content": "''",
        "position": "absolute",
        "width": 2,
        "height": "100%",
        "top": 0,
        "left": "50%",
        "borderRadius": 3,
        "opacity": 0.2,
        "background": "#000",
        "WebkitTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "morphsearch-close::after": {
        "content": "''",
        "position": "absolute",
        "width": 2,
        "height": "100%",
        "top": 0,
        "left": "50%",
        "borderRadius": 3,
        "opacity": 0.2,
        "background": "#000",
        "WebkitTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "morphsearch-close:hovermorphsearch-close::before": {
        "opacity": 1
    },
    "morphsearch-close:hovermorphsearch-close::after": {
        "opacity": 1
    },
    "morphsearch-content": {
        "color": "#333",
        "marginTop": 4.5,
        "width": "100%",
        "height": 0,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": "10.5%",
        "paddingBottom": 0,
        "paddingLeft": "10.5%",
        "background": "#f1f1f1",
        "position": "absolute",
        "pointerEvents": "none",
        "opacity": 0
    },
    "morphsearchopen morphsearch-content": {
        "opacity": 1,
        "height": "auto",
        "overflow": "visible",
        "pointerEvents": "auto",
        "WebkitTransition": "opacity 0.3s 0.5s",
        "transition": "opacity 0.3s 0.5s"
    },
    "dummy-column": {
        "width": "30%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "float": "left",
        "opacity": 0,
        "WebkitTransform": "translate3d(0,100px,0)",
        "transform": "translateY(100px)",
        "WebkitTransition": "-webkit-transform 0.5s, opacity 0.5s",
        "transition": "transform 0.5s, opacity 0.5s"
    },
    "morphsearchopen dummy-column:first-child": {
        "WebkitTransitionDelay": "0.4s",
        "transitionDelay": "0.4s"
    },
    "morphsearchopen dummy-column:nth-child(2)": {
        "WebkitTransitionDelay": "0.45s",
        "transitionDelay": "0.45s"
    },
    "morphsearchopen dummy-column:nth-child(3)": {
        "WebkitTransitionDelay": "0.5s",
        "transitionDelay": "0.5s"
    },
    "morphsearchopen dummy-column": {
        "opacity": 1,
        "WebkitTransform": "translate3d(0,0,0)",
        "transform": "translate3d(0,0,0)"
    },
    "dummy-column:nth-child(2)": {
        "marginTop": 0,
        "marginRight": "5%",
        "marginBottom": 0,
        "marginLeft": "5%"
    },
    "dummy-column h2": {
        "fontSize": 1,
        "letterSpacing": 1,
        "textTransform": "uppercase",
        "fontWeight": "800",
        "color": "#c2c2c2",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0
    },
    "round": {
        "borderRadius": "50%"
    },
    "dummy-media-object": {
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75,
        "display": "block",
        "marginTop": 0.3,
        "marginRight": 0,
        "marginBottom": 0.3,
        "marginLeft": 0,
        "cursor": "pointer",
        "borderRadius": 5,
        "background": "rgba(118,117,128,0.05)"
    },
    "dummy-media-object:hover": {
        "background": "rgba(118,117,128,0.1)"
    },
    "dummy-media-object:focus": {
        "background": "rgba(118,117,128,0.1)"
    },
    "dummy-media-object img": {
        "display": "inline-block",
        "width": 50,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0,
        "verticalAlign": "middle"
    },
    "dummy-media-object h3": {
        "verticalAlign": "middle",
        "fontSize": 0.85,
        "display": "inline-block",
        "fontWeight": "700",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "calc(100% - 70px)",
        "color": "rgba(145,145,145,0.7)"
    },
    "dummy-media-object:hover h3": {
        "color": "rgba(236,90,98,1)"
    },
    "overlay": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0,0,0,0.5)",
        "opacity": 0,
        "pointerEvents": "none",
        "WebkitTransition": "opacity 0.5s",
        "transition": "opacity 0.5s",
        "WebkitTransitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)",
        "transitionTimingFunction": "cubic-bezier(0.7,0,0.3,1)"
    },
    "morphsearchopen ~ overlay": {
        "opacity": 1
    }
});
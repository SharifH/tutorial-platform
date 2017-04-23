import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "solarizedbase03": {
        "color": "#002b36"
    },
    "solarizedbase02": {
        "color": "#073642"
    },
    "solarizedbase01": {
        "color": "#586e75"
    },
    "solarizedbase00": {
        "color": "#657b83"
    },
    "solarizedbase0": {
        "color": "#839496"
    },
    "solarizedbase1": {
        "color": "#93a1a1"
    },
    "solarizedbase2": {
        "color": "#eee8d5"
    },
    "solarizedbase3": {
        "color": "#fdf6e3"
    },
    "solarizedsolar-yellow": {
        "color": "#b58900"
    },
    "solarizedsolar-orange": {
        "color": "#cb4b16"
    },
    "solarizedsolar-red": {
        "color": "#dc322f"
    },
    "solarizedsolar-magenta": {
        "color": "#d33682"
    },
    "solarizedsolar-violet": {
        "color": "#6c71c4"
    },
    "solarizedsolar-blue": {
        "color": "#268bd2"
    },
    "solarizedsolar-cyan": {
        "color": "#2aa198"
    },
    "solarizedsolar-green": {
        "color": "#859900"
    },
    "cm-s-solarized": {
        "lineHeight": 1.45,
        "colorProfile": "sRGB",
        "renderingIntent": "auto",
        "backgroundColor": "#161D1F"
    },
    "cm-s-solarizedcm-s-dark": {
        "color": "#839496",
        "backgroundColor": "#000000",
        "textShadow": "#002b36 0 1px"
    },
    "cm-s-solarizedcm-s-light": {
        "backgroundColor": "#000000",
        "color": "#657b83",
        "textShadow": "#eee8d5 0 1px"
    },
    "cm-s-solarized CodeMirror-widget": {
        "textShadow": "none"
    },
    "cm-s-solarized cm-header": {
        "color": "#586e75"
    },
    "cm-s-solarized cm-quote": {
        "color": "#93a1a1"
    },
    "cm-s-solarized cm-keyword": {
        "color": "#cb4b16"
    },
    "cm-s-solarized cm-atom": {
        "color": "#d33682"
    },
    "cm-s-solarized cm-number": {
        "color": "#d33682"
    },
    "cm-s-solarized cm-def": {
        "color": "#2aa198"
    },
    "cm-s-solarized cm-variable": {
        "color": "#839496"
    },
    "cm-s-solarized cm-variable-2": {
        "color": "#b58900"
    },
    "cm-s-solarized cm-variable-3": {
        "color": "#6c71c4"
    },
    "cm-s-solarized cm-property": {
        "color": "#2aa198"
    },
    "cm-s-solarized cm-operator": {
        "color": "#6c71c4"
    },
    "cm-s-solarized cm-comment": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "cm-s-solarized cm-string": {
        "color": "#859900"
    },
    "cm-s-solarized cm-string-2": {
        "color": "#b58900"
    },
    "cm-s-solarized cm-meta": {
        "color": "#859900"
    },
    "cm-s-solarized cm-qualifier": {
        "color": "#b58900"
    },
    "cm-s-solarized cm-builtin": {
        "color": "#d33682"
    },
    "cm-s-solarized cm-bracket": {
        "color": "#cb4b16"
    },
    "cm-s-solarized CodeMirror-matchingbracket": {
        "color": "#586e75"
    },
    "cm-s-solarized CodeMirror-nonmatchingbracket": {
        "color": "#586e75"
    },
    "cm-s-solarized cm-tag": {
        "color": "#93a1a1"
    },
    "cm-s-solarized cm-attribute": {
        "color": "#2aa198"
    },
    "cm-s-solarized cm-hr": {
        "color": "transparent",
        "borderTop": "1px solid #586e75",
        "display": "block"
    },
    "cm-s-solarized cm-link": {
        "color": "#93a1a1",
        "cursor": "pointer"
    },
    "cm-s-solarized cm-special": {
        "color": "#6c71c4"
    },
    "cm-s-solarized cm-em": {
        "color": "#999",
        "textDecoration": "underline",
        "textDecorationStyle": "dotted"
    },
    "cm-s-solarized cm-strong": {
        "color": "#eee"
    },
    "cm-s-solarized cm-error": {
        "color": "#586e75",
        "borderBottom": "1px dotted #dc322f"
    },
    "cm-s-solarized cm-invalidchar": {
        "color": "#586e75",
        "borderBottom": "1px dotted #dc322f"
    },
    "cm-s-solarizedcm-s-dark divCodeMirror-selected": {
        "background": "#073642"
    },
    "cm-s-solarizedcm-s-darkCodeMirror ::selection": {
        "background": "rgba(7, 54, 66, 0.99)"
    },
    "cm-s-solarizedcm-s-dark CodeMirror-line::-moz-selection": {
        "background": "rgba(7, 54, 66, 0.99)"
    },
    "cm-s-dark CodeMirror-line > span::-moz-selection": {
        "background": "rgba(7, 54, 66, 0.99)"
    },
    "cm-s-dark CodeMirror-line > span > span::-moz-selection": {
        "background": "rgba(7, 54, 66, 0.99)"
    },
    "cm-s-solarizedcm-s-light divCodeMirror-selected": {
        "background": "#eee8d5"
    },
    "cm-s-solarizedcm-s-light CodeMirror-line::selection": {
        "background": "#eee8d5"
    },
    "cm-s-light CodeMirror-line > span::selection": {
        "background": "#eee8d5"
    },
    "cm-s-light CodeMirror-line > span > span::selection": {
        "background": "#eee8d5"
    },
    "cm-s-solarizedcm-s-light CodeMirror-line::-moz-selection": {
        "background": "#eee8d5"
    },
    "cm-s-ligh CodeMirror-line > span::-moz-selection": {
        "background": "#eee8d5"
    },
    "cm-s-ligh CodeMirror-line > span > span::-moz-selection": {
        "background": "#eee8d5"
    },
    "cm-s-solarizedCodeMirror": {
        "MozBoxShadow": "inset 7px 0 12px -6px #000",
        "WebkitBoxShadow": "inset 7px 0 12px -6px #000",
        "boxShadow": "inset 7px 0 12px -6px #000"
    },
    "cm-s-solarized CodeMirror-gutters": {
        "borderRight": 0
    },
    "cm-s-solarizedcm-s-dark CodeMirror-gutters": {
        "backgroundColor": "#073642"
    },
    "cm-s-solarizedcm-s-dark CodeMirror-linenumber": {
        "color": "#586e75",
        "textShadow": "#021014 0 -1px"
    },
    "cm-s-solarizedcm-s-light CodeMirror-gutters": {
        "backgroundColor": "#eee8d5"
    },
    "cm-s-solarizedcm-s-light CodeMirror-linenumber": {
        "color": "#839496"
    },
    "cm-s-solarized CodeMirror-linenumber": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "backgroundColor": "#292B2B"
    },
    "cm-s-solarized CodeMirror-guttermarker-subtle": {
        "color": "#586e75"
    },
    "cm-s-solarizedcm-s-dark CodeMirror-guttermarker": {
        "color": "#ddd"
    },
    "cm-s-solarizedcm-s-light CodeMirror-guttermarker": {
        "color": "#cb4b16"
    },
    "cm-s-solarized CodeMirror-gutter CodeMirror-gutter-text": {
        "color": "#586e75"
    },
    "cm-s-solarized CodeMirror-cursor": {
        "borderLeft": "1px solid #819090"
    },
    "cm-s-solarizedcm-s-lightcm-fat-cursor CodeMirror-cursor": {
        "background": "#77ee77"
    },
    "cm-s-solarizedcm-s-light cm-animate-fat-cursor": {
        "backgroundColor": "#77ee77"
    },
    "cm-s-solarizedcm-s-darkcm-fat-cursor CodeMirror-cursor": {
        "background": "#586e75"
    },
    "cm-s-solarizedcm-s-dark cm-animate-fat-cursor": {
        "backgroundColor": "#586e75"
    },
    "cm-s-solarizedcm-s-dark CodeMirror-activeline-background": {
        "background": "rgba(255, 255, 255, 0.06)"
    },
    "cm-s-solarizedcm-s-light CodeMirror-activeline-background": {
        "background": "rgba(0, 0, 0, 0.06)"
    }
});
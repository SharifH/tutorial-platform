import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "CodeMirror": {
        "fontFamily": "monospace",
        "height": "height: 75%",
        "color": "black",
        "position": "relative",
        "overflow": "hidden",
        "background": "white"
    },
    "CodeMirror-lines": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "cursor": "text",
        "minHeight": 1
    },
    "CodeMirror pre": {
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "MozBorderRadius": 0,
        "WebkitBorderRadius": 0,
        "borderRadius": 0,
        "borderWidth": 0,
        "background": "transparent",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "inherit",
        "color": "inherit",
        "zIndex": 2,
        "position": "relative",
        "overflow": "visible",
        "WebkitTapHighlightColor": "transparent",
        "WebkitFontVariantLigatures": "contextual",
        "fontVariantLigatures": "contextual"
    },
    "CodeMirror-scrollbar-filler": {
        "backgroundColor": "white",
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "right": 0,
        "bottom": 0
    },
    "CodeMirror-gutter-filler": {
        "backgroundColor": "white",
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "left": 0,
        "bottom": 0
    },
    "CodeMirror-gutters": {
        "borderRight": "1px solid #ddd",
        "backgroundColor": "#f7f7f7",
        "whiteSpace": "nowrap",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "minHeight": "100%",
        "zIndex": 3,
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-linenumbers": {},
    "CodeMirror-linenumber": {
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "minWidth": 20,
        "textAlign": "right",
        "color": "#999",
        "whiteSpace": "nowrap",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-guttermarker": {
        "color": "black"
    },
    "CodeMirror-guttermarker-subtle": {
        "color": "#999"
    },
    "CodeMirror-cursor": {
        "borderLeft": "1px solid black",
        "borderRight": "none",
        "width": 0,
        "position": "absolute",
        "pointerEvents": "none"
    },
    "CodeMirror divCodeMirror-secondarycursor": {
        "borderLeft": "1px solid silver"
    },
    "cm-fat-cursor CodeMirror-cursor": {
        "width": "auto",
        "border": "0 !important",
        "background": "#7e7"
    },
    "cm-fat-cursor divCodeMirror-cursors": {
        "zIndex": 1
    },
    "cm-animate-fat-cursor": {
        "width": "auto",
        "border": 0,
        "WebkitAnimation": "blink 1.06s steps(1) infinite",
        "MozAnimation": "blink 1.06s steps(1) infinite",
        "animation": "blink 1.06s steps(1) infinite",
        "backgroundColor": "#7e7"
    },
    "CodeMirror-overwrite CodeMirror-cursor": {},
    "cm-tab": {
        "display": "inline-block",
        "textDecoration": "inherit"
    },
    "CodeMirror-rulers": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": -50,
        "bottom": -20,
        "overflow": "hidden"
    },
    "CodeMirror-ruler": {
        "borderLeft": "1px solid #ccc",
        "top": 0,
        "bottom": 0,
        "position": "absolute"
    },
    "cm-s-default cm-header": {
        "color": "blue"
    },
    "cm-s-default cm-quote": {
        "color": "#090"
    },
    "cm-negative": {
        "color": "#d44"
    },
    "cm-positive": {
        "color": "#292"
    },
    "cm-header": {
        "fontWeight": "bold"
    },
    "cm-strong": {
        "fontWeight": "bold"
    },
    "cm-em": {
        "fontStyle": "italic"
    },
    "cm-link": {
        "textDecoration": "underline"
    },
    "cm-strikethrough": {
        "textDecoration": "line-through"
    },
    "cm-s-default cm-keyword": {
        "color": "#708"
    },
    "cm-s-default cm-atom": {
        "color": "#219"
    },
    "cm-s-default cm-number": {
        "color": "#164"
    },
    "cm-s-default cm-def": {
        "color": "#00f"
    },
    "cm-s-default cm-variable": {},
    "cm-s-default cm-punctuation": {},
    "cm-s-default cm-property": {},
    "cm-s-default cm-operator": {},
    "cm-s-default cm-variable-2": {
        "color": "#05a"
    },
    "cm-s-default cm-variable-3": {
        "color": "#085"
    },
    "cm-s-default cm-comment": {
        "color": "#a50"
    },
    "cm-s-default cm-string": {
        "color": "#a11"
    },
    "cm-s-default cm-string-2": {
        "color": "#f50"
    },
    "cm-s-default cm-meta": {
        "color": "#555"
    },
    "cm-s-default cm-qualifier": {
        "color": "#555"
    },
    "cm-s-default cm-builtin": {
        "color": "#30a"
    },
    "cm-s-default cm-bracket": {
        "color": "#997"
    },
    "cm-s-default cm-tag": {
        "color": "#170"
    },
    "cm-s-default cm-attribute": {
        "color": "#00c"
    },
    "cm-s-default cm-hr": {
        "color": "#999"
    },
    "cm-s-default cm-link": {
        "color": "#00c"
    },
    "cm-s-default cm-error": {
        "color": "#f00"
    },
    "cm-invalidchar": {
        "color": "#f00"
    },
    "CodeMirror-composing": {
        "borderBottom": "2px solid"
    },
    "divCodeMirror spanCodeMirror-matchingbracket": {
        "color": "#0f0"
    },
    "divCodeMirror spanCodeMirror-nonmatchingbracket": {
        "color": "#f22"
    },
    "CodeMirror-matchingtag": {
        "background": "rgba(255, 150, 0, .3)"
    },
    "CodeMirror-activeline-background": {
        "background": "#e8f2ff"
    },
    "CodeMirror-scroll": {
        "overflow": "scroll !important",
        "marginBottom": -30,
        "marginRight": -30,
        "paddingBottom": 30,
        "height": "100%",
        "outline": "none",
        "position": "relative",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-sizer": {
        "position": "relative",
        "borderRight": "30px solid transparent",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-vscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "right": 0,
        "top": 0,
        "overflowX": "hidden",
        "overflowY": "scroll"
    },
    "CodeMirror-hscrollbar": {
        "position": "absolute",
        "zIndex": 6,
        "display": "none",
        "bottom": 0,
        "left": 0,
        "overflowY": "hidden",
        "overflowX": "scroll"
    },
    "CodeMirror-gutter": {
        "whiteSpace": "normal",
        "height": "100%",
        "display": "inline-block",
        "verticalAlign": "top",
        "marginBottom": -30,
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box"
    },
    "CodeMirror-gutter-wrapper": {
        "position": "absolute",
        "zIndex": 4,
        "background": "none !important",
        "border": "none !important",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none"
    },
    "CodeMirror-gutter-background": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "zIndex": 4
    },
    "CodeMirror-gutter-elt": {
        "position": "absolute",
        "cursor": "default",
        "zIndex": 4
    },
    "CodeMirror-wrap pre": {
        "wordWrap": "break-word",
        "whiteSpace": "pre-wrap",
        "wordBreak": "normal"
    },
    "CodeMirror-linebackground": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0,
        "zIndex": 0
    },
    "CodeMirror-linewidget": {
        "position": "relative",
        "zIndex": 2,
        "overflow": "auto"
    },
    "CodeMirror-widget": {},
    "CodeMirror-code": {
        "outline": "none"
    },
    "CodeMirror-measure": {
        "position": "absolute",
        "width": "100%",
        "height": 0,
        "overflow": "hidden",
        "visibility": "hidden"
    },
    "CodeMirror-measure pre": {
        "position": "static"
    },
    "divCodeMirror-cursors": {
        "visibility": "hidden",
        "position": "relative",
        "zIndex": 3
    },
    "divCodeMirror-dragcursors": {
        "visibility": "visible"
    },
    "CodeMirror-focused divCodeMirror-cursors": {
        "visibility": "visible"
    },
    "CodeMirror-selected": {
        "background": "#d9d9d9"
    },
    "CodeMirror-focused CodeMirror-selected": {
        "background": "#d7d4f0"
    },
    "CodeMirror-crosshair": {
        "cursor": "crosshair"
    },
    "CodeMirror-line::selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line > span::selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line > span > span::selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line::-moz-selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line > span::-moz-selection": {
        "background": "#d7d4f0"
    },
    "CodeMirror-line > span > span::-moz-selection": {
        "background": "#d7d4f0"
    },
    "cm-searching": {
        "background": "rgba(255, 255, 0, .4)"
    },
    "cm-force-border": {
        "paddingRight": 0.1
    },
    "cm-tab-wrap-hack:after": {
        "content": "''"
    },
    "spanCodeMirror-selectedtext": {
        "background": "none"
    }
});
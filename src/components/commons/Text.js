/**
 * Created by hieult on 10/30/17.
 */
import React from "react";
import PropTypes from 'prop-types';
import {Text, View} from "react-native";
import styles from "./styles";

const TextComponent = ({text, style, numberOfLines = 1, allowFontScaling = false, size, bold, color, fontFamily, isHTML, textAlign,isSmartTrim,maximumLength, marginLeft ,fontWeight, marginTop}) => {
    let textVar = "";
    if (text) {
        textVar = text;
    }
    let styleVar = styles.colorSizePrimary;
    if (style) {
        styleVar = [styleVar, style];
    }
    let fontSize = size;
    let fw = fontWeight;
    let textAl = textAlign ? textAlign : 'left';
    let mgL =  marginLeft ? marginLeft : 0;
    let mgT =  marginTop ? marginTop : 0;
    //let newStyle = {color, fontSize, fontWeight, fontFamily};
    let propsText = {
        // style: [styleVar, {color, fontSize, fontWeight, fontFamily}]
    };
    if (numberOfLines !== -1) {
        propsText.numberOfLines = numberOfLines;
    }
    propsText.allowFontScaling = allowFontScaling;
    return (
        <Text {...propsText} style={[{color:color, fontSize:fontSize, fontFamily:fontFamily}, style]}>
            {textVar.toString()}
        </Text>
    );
};

TextComponent.defaultProps = {
    numberOfLines: 1,
    size: global.sizeP14,
    color: global.colorTextBlack,
    fontFamily: global.fontRegular,
    fontWeight: global.fontWeightNormal,
    isHTML: false,
};
TextComponent.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    size: PropTypes.number,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    numberOfLines: PropTypes.number,
    maximumLength: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isHTML: PropTypes.bool,
    isSmartTrim:PropTypes.bool
};

export default TextComponent;

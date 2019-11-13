import React, {Component} from 'react';
import {View, TouchableOpacity, AppRegistry, StyleSheet, Image, Platform} from 'react-native';
import styles from './styles';
import Text from './Text';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import IconButton from './IconButton';
import global from "./_var";
export function getRandColor(brightness) {

    // Six levels of brightness from 0 to 5, 0 being the darkest
    let rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    let mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
    let mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) { return Math.round(x / 2.0);});
    return "rgb(" + mixedrgb.join(",") + ")";
}
const RoundAvatar = ({size, icSrc, onPress, canClick, style, styleIc, isShowDot, dotCustom,styleDot,inSideAvatar,userName, dotCustomTop, canClickIconDot, onClickDotIcon}) => {

    let styleRadiusSize = null;
    let textSize = 20;
    let styleAvatar = {};
    if(size === 'S-small'){
        styleAvatar = styles.avatarSSmall;
        styleRadiusSize = 10;
        textSize = 8;
    }
    if(size === 'L-small'){
        styleAvatar = styles.avatarLSmall;
        styleRadiusSize = 20;
        textSize = 10;
    }
    if(size === 'LL-small'){
        styleAvatar = styles.avatarLLSmall;
        styleRadiusSize = 15;
        textSize = 10;
    }
    if (size === 'small') {
        styleAvatar = styles.avatarSmall;
        styleRadiusSize = 25;
        textSize = 13 ;
    }
    if (size === 'M-small') {
        styleAvatar = styles.avatarSmall45;
        styleRadiusSize = 22.5;
        textSize = 13 ;
    }
    if (size === 'small-60px') {
        styleAvatar = {width: 60, height: 60};
        styleRadiusSize = 30;
        textSize = 15 ;
    }
    if (size === 'x-small') {
        styleAvatar = styles.avatarXSmall;
        styleRadiusSize = 35;
        textSize = 15 ;
    }
    if (size === "large") {
        styleAvatar = styles.avatarLarge;
        styleRadiusSize = 40;
        textSize = 20 ;

    }
    if (size === "x-large") {
        styleAvatar = styles.avatarXlarge;
        styleRadiusSize = 60;
        textSize = 20 ;

    }
    if (size === 'xx-large') {
        styleAvatar = {width: 125, height: 125};
        styleRadiusSize = 62.5;
        textSize = 20 ;
    }
    if (size === 'xxx-large') {
        styleAvatar = {width: 160, height: 160};
        styleRadiusSize = 80;
        textSize = 25 ;
    }
    return icSrc ? (
        <TouchableOpacity
            disabled={!canClick} style={[styles.viewAvatar, {borderRadius: styleRadiusSize}, style]}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <FastImage source={{uri: icSrc}}
                       style={[styleAvatar, {borderRadius: styleRadiusSize}, styleIc]}
                       borderRadius={styleRadiusSize}
            >{inSideAvatar}</FastImage>
            {
                isShowDot ? <View style={[{
                    backgroundColor: global.lightGreen,
                    width: (styleRadiusSize - 5) / 2,
                    height: (styleRadiusSize - 5) / 2,
                    borderRadius: (styleRadiusSize - 5) / 4,
                    position: 'absolute',
                    right: (styleRadiusSize - 5) / 6, bottom: 0,
                    borderColor: global.colorFF,
                    borderWidth: 1
                }, styleDot]}/> : (dotCustom ? <IconButton nameIcon={dotCustom} onClick={onClickDotIcon} disabled={!canClickIconDot} btnStyle={{
                    width: (styleRadiusSize - 5),
                    height: (styleRadiusSize - 5),
                    position: 'absolute',
                    right: (styleRadiusSize - 5 - dotCustomTop ? 10 : 0) / styleRadiusSize ,
                    bottom: !dotCustomTop ? 0 : null,
                    top: dotCustomTop ? -5 : null,
                }} iconSize={{width: (styleRadiusSize - 5), height: (styleRadiusSize - 5)}}/> : null)}
        </TouchableOpacity>
    ) : (
        <TouchableOpacity  onPress={onPress} style={[styleAvatar, {borderRadius: styleRadiusSize, backgroundColor:getRandColor(2), justifyContent:'center', alignItems:'center'}, style]}>
            <Text text={(userName.charAt(0)).toUpperCase()}
                           size={textSize}
                           fontFamily={global.fontBold}
                           color={global.colorFF}
                           style={{lineHeight:30, textAlign: 'center'}}/>
        </TouchableOpacity>
    );
};

RoundAvatar.defaultProps = {
    size: "small",
    style: {},
    canClick: true,
    isShowDot: false,
    dotCustom: null,
    dotCustomTop: false,
    canClickIconDot: false,
    onPress: () => {
    },
    userName:''
};

RoundAvatar.propTypes = {
    size: PropTypes.oneOf(["small", "x-small", "large", "x-large", "xx-large","xxx-large", "small-60px","LL-small", "L-small","M-small","S-small"]),
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    styleIc: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    onPress: PropTypes.func,
    icSrc: PropTypes.string,
    canClick: PropTypes.bool,
    dotCustomTop: PropTypes.bool,
    isShowDot: PropTypes.bool,
    dotCustom: PropTypes.node,
    styleDot:PropTypes.object,
    inSideAvatar:PropTypes.node,
    userName:PropTypes.string,
    canClickIconDot: PropTypes.bool,
    onClickDotIcon: PropTypes.func
};

export default RoundAvatar;

import React  from 'react';
import {View, TouchableOpacity, StyleSheet, Image, ActivityIndicator} from 'react-native';
import Text from '../commons/Text';
import PropTypes from 'prop-types';
import global from './_var';


const ButtonOutline = ({ name, btnStyle, onClick, icSrc, textStyle, disable, loading, indicatorColor, iconStyle, icRight ,activeOpacity, isBlur}) => {

    if (loading) {
        return (
            <View style={[styles.buttonStyle, btnStyle]}>
                <ActivityIndicator size="small" color={indicatorColor} />
            </View>
        );
    }
    let styleDisable  = disable && isBlur ? {opacity: 0.5} : null;
    return (
        <TouchableOpacity style={[styles.buttonStyle, btnStyle]} onPress={onClick} disabled={disable} activeOpacity={activeOpacity}>
            {icSrc ? <Image style={[{ resizeMode: "contain" }, iconStyle]}
                source={icSrc} /> : null}
            {name ? <Text text={name} style={[styles.textBtStyle, textStyle]} /> : null}
            {icRight ? <Image style={[{ resizeMode: "contain" }, iconStyle]}
                            source={icRight} /> : null}
        </TouchableOpacity>
    );
};
ButtonOutline.defaultProps = {
    disable: false,
    isBlur: true,
    indicatorColor: "white",
    activeOpacity: 0.5,
};
ButtonOutline.propTypes = {
    name: PropTypes.string,
    icSrc: PropTypes.node,
    icRight: PropTypes.node,
    btnStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    iconStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    loading: PropTypes.bool,
    indicatorColor: PropTypes.string,
    activeOpacity: PropTypes.number
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, 1)',
        height: 40,
        // width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtStyle: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        // fontFamily: global.fontRegular
    }
});
export default ButtonOutline;

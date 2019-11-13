import React, {Component} from 'react';
import {View, TouchableOpacity, AppRegistry, StyleSheet, Image} from 'react-native';
import styles from './styles';
import Text from './Text';
import PropTypes from 'prop-types';


const IconButton = ({disabled, nameIcon, btnStyle, onClick, iconSize, hitSlop, onPressOut, dotIcon, styleDotIcon, dotIconSize, nameDotIcon, activeOpacity, badge}) => {
    let buttonStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    };
    return (
        <TouchableOpacity onPressOut={onPressOut} activeOpacity={activeOpacity ? activeOpacity : 0.9}
                          disabled={disabled}
                          style={[buttonStyle, btnStyle]} onPress={onClick} hitSlop={hitSlop}>
            <Image style={iconSize} source={nameIcon} resizeMode={'contain'}/>
            {
                dotIcon ? <View style={styleDotIcon}>
                    <Image style={dotIconSize} source={nameDotIcon} resizeMode={'contain'}/>
                </View> : null
            }
            {
                badge ? <View style={[styles.unReadCount, {width:  Math.max(badge.toString().length * 10, 20),
                    right: - Math.max(badge.toString().length * 5, 5)}]}>
                    <Text style={styles.unReadCountNumber} text={badge.toString()}/>
                </View> : null
            }
        </TouchableOpacity>
    );
};
IconButton.propTypes = {
    hitSlop:{top: 50, bottom: 50, left: 50, right: 50},
    badge: 0
};
IconButton.propTypes = {
    nameDotIcon: PropTypes.node,
    nameIcon: PropTypes.node,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    btnStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    styleDotIcon: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    dotIconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    onClick: PropTypes.func,
    onPressOut: PropTypes.func,
    dotIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    hitSlop: PropTypes.object,
    activeOpacity: PropTypes.number,
    badge: PropTypes.number,
};

export default IconButton;

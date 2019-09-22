import React from 'react'
import { StyleSheet, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

const Styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    title: {

    },
    header: {
        fontFamily: Fonts.type.regular,
        fontSize: 20,
        textAlignVertical: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    buttonImageIcon: {
        width: 24,
        height: 20
    },

    // Shadow
    shadow: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: Metrics.shadow.normal },
        shadowOpacity: 0.2,
        elevation: Metrics.shadow.normal,
    },
    shadowThin: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: Metrics.shadow.thin },
        shadowOpacity: 0.2,
        elevation: Metrics.shadow.thin,
    },
    shadowSmall: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: Metrics.shadow.small },
        shadowOpacity: 0.2,
        elevation: Metrics.shadow.small,
    },
    shadowLarge: {
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: Metrics.shadow.large },
        shadowOpacity: 0.3,
        elevation: Metrics.shadow.large,
    },
    headerShadow: {
        '@media android': {
            elevation: Metrics.shadow.thin,
            borderWidth: 0,
        },
        '@media ios': {
            borderColor: Colors.border,
            borderBottomWidth: Metrics.borderWidth,
        },
    },
    tabBarShadow: {
        '@media android': {
            elevation: Metrics.shadow.thin,
            borderWidth: 0,
        },
        '@media ios': {
            borderColor: Colors.border,
            borderWidth: Metrics.borderWidth,
        },
    },

    // Add button
    icAdd: {
        '@media android': {
            bottom: Platform.Version >= 21 ? 20 : 30,
        },
        '@media ios': {
            paddingTop: 4,
            paddingRight: 2
        },
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 27 * Metrics.screenWidth / 200,
        height: 27 * Metrics.screenWidth / 200,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Styles;
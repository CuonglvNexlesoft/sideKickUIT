import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image, ListView,
    Modal, StyleSheet,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import Ripples from './Ripples';
import * as Themes from './../../themes';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {

        const { label, fontSize, fontColor, fontFamily, opacity, alignSelfLable, toggleButton, activeColor } = this.props;
        const { active } = this.state;
        let styleButton = {
            backgroundColor: toggleButton && active ? activeColor : (this.props.transparent ? 'transparent' : this.props.color),
            width: this.props.width,
            height: this.props.height,
            opacity: this.props.opacity || 1,
        };
        let styleLabel = {
            fontSize: fontSize,
            color: fontColor,
            fontFamily: fontFamily,
            opacity: opacity,
            alignSelf: alignSelfLable,
        };
        const buttonProps = this.getButtonProps();
        const badge = this.props.badge >= 100 ? '99+' : this.props.badge;
        return (
            <Ripples ref={this.props.ref || undefined} {...buttonProps} rippleColor={this.props.rippleColor} rippleDuration={this.props.touchDelay}
                rippleOpacity={this.props.rippleOpacity}
                rippleContainerBorderRadius={this.props.transparent && this.props.width ? this.props.width/2 : this.props.rippleContainerBorderRadius}
                style={[styles.container, (this.props.style || null), styleButton]}>
                <View>
                    {this.props.children}
                    {this.props.badge > 0 ? (
                        <View style={[styles.badge, (this.props.badgeStyle || null), { backgroundColor: this.props.badgeColor }]}>
                            <Text style={[styles.badgeText, {color: this.props.badgeTextColor}]}>{`${badge}`}</Text>
                        </View>
                    ) : null}
                </View>
                {this.renderLabel(styleLabel)}
            </Ripples>
        )

    }

    renderLabel(styleLabel) {
        const { label } = this.props;
        if (label === '') {
            return null;
        }
        return (
            <Text style={[styleLabel]}>
                {label}
            </Text>
        );
    }

    onPress() {
        this.setState({active: !this.state.active})
        if (this.props.onPress) {
            return this.props.onPress();
        }
    }

    onPressAdd() {
        if (this.props.onPressAdd) {
            return this.props.onPressAdd();
        }
    }

    getButtonProps() {
        let props = Object.assign({}, this.props);
        delete props['width'];
        delete props['height'];
        delete props['opacity'];
        return props;
    }

}

Button.defaultProps = {
    color: Themes.Colors.primary,
    badge: -1,
    badgeColor: '#ecb504',
    badgeTextColor: '#ffffff',
    label: '',
    fontSize: 16,
    fontColor: 'transparent',
    opacity: 1,
    fontFamily: 'Roboto-Light',
    alignSelfLable: 'center',
    touchDelay: 300,
    rippleColor: Themes.Colors.accent,
    rippleOpacity: 0.6,
    rippleContainerBorderRadius: 0,
};

const styles = EStyleSheet.create(shorthand({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    badge: {
        position: 'absolute',
        borderRadius: 16,
        right: -6,
        top: -6,
        minHeight: 16,
        minWidth: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontFamily: Themes.Fonts.type.black,
        fontSize: 10,
        minWidth: 16,
        textAlign: 'center',
        backgroundColor: 'transparent',
    },

}));



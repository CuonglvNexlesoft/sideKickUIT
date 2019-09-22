import React from 'react';
import Ripple from 'react-native-material-ripple';
import * as Themes from './../../themes';

export default class Ripples extends React.Component {

    render() {
        return (
            <Ripple {...this.props} rippleColor={this.props.rippleColor} rippleDuration={this.props.touchDelay}
                rippleOpacity={this.props.rippleOpacity} onPress={(e) => this.onPress(e)}>
                {this.props.children}
            </Ripple>
        )

    }

    onPress(e) {
        if (this.props.onPress) {
            let pressTimeout = setTimeout(() => {
                let res = this.props.onPress(e);
                clearTimeout(pressTimeout);
                return res;
            }, this.props.rippleDuration);
        }
    }
}

Ripples.defaultProps = {
    rippleColor: Themes.Colors.accent,
    rippleOpacity: 0.6,
    rippleDuration: 300,
};



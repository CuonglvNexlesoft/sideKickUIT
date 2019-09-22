import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Styles, Colors, Metrics } from '../../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

import * as CommonUtils from './../../utils/CommonUtils';

export default class AddButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            press: false,
        };
    }

    render() {
        const press = this.props.disabled || this.state.press;
        return (this.props.hidden ? null :
            <Ripple style={[Styles.icAdd, {
                backgroundColor: this.props.disabled ? Colors.buttonAddPressed : Colors.buttonAdd,
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size/2,
                shadowColor: Colors.shadow,
                shadowOffset: { width: 0, height: press ? 0: Metrics.shadow.normal },
                shadowOpacity: 0.2,
                elevation: press ? 0 : Metrics.shadow.normal,
                bottom: press ? 20 - Metrics.shadow.normal/2 : 20,
            }]}
                rippleContainerBorderRadius={this.props.size/2}
                rippleColor={this.props.rippleColor} rippleOpacity={this.props.rippleOpacity} rippleSize={this.props.size}
                onPressIn={() => this.setState({ press: true })}
                onPressOut={() => this.setState({ press: false })}
                onPress={() => this.onUserPress()}
                onLongPress={() => this.onUserLongPress()}
                >
                <Icon name="ios-add-outline" style={{ fontSize: 42, color: 'white', backgroundColor: 'transparent' }} />
            </Ripple>
        )
    }


    onUserPress() {
        if (this.props.onPress) {
            return this.props.onPress()
        }
    }
    onUserLongPress(){
        if (this.props.onLongPress) {
            return this.props.onLongPress()
        }
    }
}
AddButton.defaultProps = {
    size: CommonUtils.isTablet() ? (17 * Metrics.screenWidth / 200) : (27 * Metrics.screenWidth / 200),
    disabled: false,
    rippleColor: Colors.buttonAddPressed,
    rippleOpacity: 1,
};

const styles = StyleSheet.create({
    addButton: {

    },
});
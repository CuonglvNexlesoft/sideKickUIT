/*
 * @Author: TrungNT 
 * @Date: 2018-11-22 11:05:12 
 * @Last Modified by: TrungNT
 * @Last Modified time: 2018-12-08 16:49:57
 */

import React, {Component} from "react";
import {Image, View,TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';

export default class iconTooltip extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
      }
    
    onPress() {
        if(this.props.onPress)
        this.props.onPress(this.props.status);
    }
    render(){
    const {style, textView, iconView, disabled} = this.props; 
    return(
        <TouchableOpacity style={[{ flexDirection: 'row',
        alignItems: 'center'},style]}
            activeOpacity={1}
            disabled={disabled}
            onPress={this.onPress}
        >
            {iconView}
            {textView}
        </TouchableOpacity>
    );
    }
}
iconTooltip.defaultProps = {
    status:0,
    disabled: false
};
iconTooltip.propTypes = {
    status: PropTypes.number,
    iconView: PropTypes.element,
    textView: PropTypes.element,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    disabled: PropTypes.bool
};


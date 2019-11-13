/**
 * Created by hieult on 10/30/17.
 */

import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
export default class OptionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  renderCenter() {
    return null;
  }

  renderLeft() {
    let propsImage = {
      resizeMode: 'cover',
      source: this.props.image,
      style: this.props.styleImage
    };
    return (
      <View style={{width: 25}}>
        <Image {...propsImage} />
      </View>
    );
  }

  renderRight() {
    if(!this.props.isHideIconRight){
      let propsImage = {
        resizeMode: 'cover',
        source: this.props.imageRight,
        style: this.props.styleImage
      };
      return (
        <View style={{width: 25, position:'absolute', right:15}}>
          <Image {...propsImage} />
        </View>
      );
    }
    return null;
  }

  renderCheckbox() {
    return null;
  }

  render() {
    const { divider } = this.props;
    const disabledStyle = this.props.disabled ? { opacity: 0.5 } : null;
    return (
      <TouchableOpacity  onPress={this.onPress} disabled = {this.props.disabled}>
        <View style={[styles.optionItemContainer, disabledStyle]}>
          {this.renderLeft()}
          {this.renderCenter()}
          {this.renderRight()}
        </View>
      </TouchableOpacity>
    );
  }
}
OptionItem.defaultProps={
    divider:true,
    disabled: false,
    isHideIconRight:true
};
OptionItem.propTypes = {
  image: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  divider: PropTypes.bool,
  styleImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  imageRight: PropTypes.node,
  isHideIconRight:PropTypes.bool
};

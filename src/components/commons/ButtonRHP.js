import React, {Component} from 'react';
import {View, TouchableOpacity, Image, AppRegistry, StyleSheet} from 'react-native';
import styles from './styles';
import Text from './Text';
import PropTypes from 'prop-types';

const Button = ({size, text, color, onPress,style, disabled,styleText}) => {

  let styleContainerSize = styles.smallButtonContainer;
  let styleTextSize = styles.smallButtonText;
  let styleBorder = {};

  let styleTextColor = styles.textColorWhite;
  let styleContainerColor = styles.bkgPrimary;

  if (size === 'large') {
    styleContainerSize = styles.buttonPrimaryContainer;
    styleTextSize = styles.buttonTextGeneral;
  }
  if (size === 'largeReg1') {
    styleContainerSize = styles.buttonPrimaryContainer;
    styleTextSize = styles.textAvatarNormal;
  }
  if(size ==="smallReg1"){
    styleContainerSize = styles.buttonSmallReg1;
    styleTextSize = styles.textSmallReg;
  }
  if(size ==="smallReg2"){
    styleContainerSize = styles.buttonSmallReg2;
    styleTextSize = styles.textSmallReg;
  }

  if (color === 'white') {
    styleContainerColor = styles.bkgWhite;
    styleTextColor = styles.textColorBlack;
    styleBorder = styles.smallButtonWhite;
  }
  if (color ==="transparent"){
    styleContainerColor =  styles.bkgTransparent;
    styleBorder = {borderColor :"white" , borderWidth :1};
    // console.warn("render");

  }


  return (
    <TouchableOpacity disabled={disabled} style={[styleContainerSize, styleContainerColor, styleBorder,style]}
                      onPress={onPress}
    >
      <Text text={text} style={[styleTextSize, styleTextColor, styleText]}/>
    </TouchableOpacity>
  );
};


Button.defaultProps = {
  size: "small",
  text: "",
  color: "green",
  style: {},
  onPress: () => {
  }
};


Button.propTypes = {
  size: PropTypes.oneOf(["small","largeReg1","smallReg1","smallReg2","large"]),
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
    styleText:PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
  color: PropTypes.oneOf(["green", "white","transparent"]),
  onPress: PropTypes.func,
    disabled: PropTypes.bool
};

export default Button;

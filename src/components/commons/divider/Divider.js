import React from "react";
import { View } from "react-native";
import styles from "./styles";
const Divider = ({customStyle}) => {
  return <View style={[styles.line, customStyle]}/>;
};
export default Divider;

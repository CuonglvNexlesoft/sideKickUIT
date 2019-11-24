import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from "prop-types";
import Divider from "../divider/Divider";
import styles from "./styles";

const ActionLineItem = ({
                            divider,
                            itemRight,
                            itemLeft,
                            minHeight,
                            lineStyle,
                            rightStyle,
                            leftStyle,
                            customDividerStyle
                        }) => {
    return (
        <View style={{overflow: "hidden"}}>
            <View style={[styles.container, {minHeight: minHeight}, lineStyle]}>
                <View style={[styles.leftContainer,leftStyle]}>{itemLeft}</View>
                <View style={[styles.rightContainer,rightStyle]}>{itemRight}</View>
            </View>
            {divider ? <Divider customStyle={customDividerStyle}/> : null}
        </View>
    );
};
ActionLineItem.defaultProps = {
    divider: false,
    minHeight: 60
};
ActionLineItem.propTypes = {
    disableLine: PropTypes.bool,
    divider: PropTypes.bool,
    itemLeft: PropTypes.node,
    minHeight: PropTypes.number,
    itemRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    rightStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    leftStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    customDividerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default ActionLineItem;

/**
 * Created by hieult on 11/9/17.
 */

import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";
import OptionItem from "./OptionItem";
import Text from "./Text";
import global from "../commons/_var";

export default class ProfileOptionItem extends OptionItem {
  constructor(props) {
    super(props);
  }

  renderCenter() {
    const { subText, title } = this.props;
    return (
      <View style={[{ justifyContent: 'center', paddingLeft: 20, paddingRight: 15, height: 50 }, this.props.style]}>
        <View style={{ flexDirection: "row" }}>
          <Text
            text={title}
            size={global.sizeP16}
            style={{ lineHeight: global.sizeP18 }}
            color={global.color33}
            // fontFamily={global.fontBold}
          />
          {this.props.limitedPin ?
            <Text style={styles.textLimit} text={this.props.limitedPinTitle} />
            :
            null
          }
          {this.props.titleLast ?
            <View style={{ flex: 1 }}>
              <Text style={[styles.textLimitItemModal]} text={this.props.titleLast} />
            </View>
            : null}
        </View>
        {subText ? (
          <Text
            text={subText}
            size={global.sizeP12}
            style={{ lineHeight: global.sizeP12, marginTop: 5 }}
            color={global.colorA5}
            // fontFamily={global.fontRegular}
            numberOfLines={5}
          />
        ) : null}
      </View>
    );
  }
}

ProfileOptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

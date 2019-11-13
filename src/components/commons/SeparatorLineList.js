/**
 * Created by hieult on 11/9/17.
 */

import React, {Component,PureComponent} from "react";
import {View} from "react-native";
import PropTypes from 'prop-types';


export  default class SeparatorLineList extends Component {

  constructor(props) {
    super(props);
    this.rows = [];
    this.rows.push(this.props.children);

  }
  renderElement() {
    return this.rows.map((value, index) => {
      if (index === this.rows.length - 1) {
        return value;
      }
      return (
        <View key ={index}>
          {value}
          <View style={styles.dividerRowModal}/>
        </View>
      );

    });
  }

  render() {
    return (<View>
      {this.renderElement()}
    </View>);
  }

}

SeparatorLineList.propTypes = {
  children : PropTypes.node
};

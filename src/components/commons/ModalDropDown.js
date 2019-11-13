/**
 * Created by hieult on 10/30/17.
 */
import React, {Component} from "react";
import {View, ActivityIndicator, TouchableOpacity, Text, StyleSheet} from "react-native";
import Modal from "./Modal";
import styles from "./styles";
import PropTypes from "prop-types";
export default class ModalDropDown extends Modal {

  constructor(props) {
    super(props);
    //super.constructor(props);
    this.pressBottomButton = this.pressBottomButton.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.backdropOpacity = 0.5;
  }

  pressBottomButton() {
  }

  renderPopup() {
    return (
      <View style={[styles.modalWrapper, this.props.customStyleDropdownModal]}>
        {this.renderHeader()}
        {this.renderContent()}
        {/*{this.renderOption()}*/}
        {this.renderBottomButton()}
        {this.renderPlaceholder()}
      </View>
    );
  }

  renderPlaceholder(){
    return null;
  }


  renderHeader() {
    if (this.props.renderHeader) {
      return this.props.renderHeader();
    }
    return <View/>;
  }

  renderContent() {
    if (this.props.renderContent) {
      return this.props.renderContent();
    }
    return null;
  }

  renderOption() {
    if(this.props.renderOption){
      return this.props.renderOption();
    }
    return null;
  }

  renderBottomButton() {
    // if(this.props.renderBottomButton){
    //   return this.props.renderBottomButton();
    // }
    // return <View><Text>Hello</Text></View>;
    return null;
  }

  render() {
    if(this.state.visible){
      return super.render(this.renderPopup);
    }else{
      return null;
    }
  }

  onCloseModal() {
    this.closeModal();
    super.onCloseModal();
  }
}
ModalDropDown.default ={

};
ModalDropDown.propTypes = {
  customStyleDropdownModal:PropTypes.object
};
import React, { Commponent } from "react";
import { View, TouchableOpacity, Image, Platform, Text, TextInput } from "react-native";
import ModalInfo from "./ModalInfo";
import Proptypes from "prop-types";

const IS_IOS = Platform.OS === 'ios';
export default class ModalInput extends ModalInfo {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      showAccountPause: false,
      isShowConfirmUnPauseAccount: false,
      class:  {
        "name": "Defaults",
        "email": "Defaults",
      },
      className: "",
      gvName: ""
    };
    this.goSetting = this.goSetting.bind(this);
  }

  openModal(showAccountPause, _isShowConfirmUnPauseAccount) {
    this.setState({
      showAccountPause: showAccountPause,
      isShowConfirmUnPauseAccount: _isShowConfirmUnPauseAccount
    });
    super.openModal();
  }
  onCloseModal() {
    super.closeModal();
  }

  goSetting() {
    const { isModal, closeAllModal } = this.props;
    if (isModal && closeAllModal) {
      closeAllModal();
    }
    this.closeModal();
    //this.props.screenActions.push({ screen: SCREENS_NAME.MESSENGERS_SETTINGS, data: { from: "ModalInboxLocked" } });
  }

  renderBottom() {
    return null;
  }

  onSubmmit = () => {
    const { gvName, className } = this.state;
    const newClass = {
      name: className,
      email: gvName,
    };
    this.closeModal();
    if (this.props.onSubmmit) {
        this.props.onSubmmit(newClass);
    }
  };

  onChangeClassName(_className){
    this.setState({
      className: _className,
    })
  }

  onChangeGvName(_gvName){
    this.setState({
      gvName: _gvName
    })
  }


  renderContent() {
    const { text } = this.props;
    const { gvName, className } = this.state;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>


        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 15 }}>
          <Text>Class</Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', width: "80%" }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeClassName(text)}
            value={className}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeGvName(text)}
            value={gvName}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>this.onSubmmit()} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
            <View
              style={{
                height: 30, width: 60,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'green',
                marginRight: "20%"
              }}>
              <Text>Create</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={this.closeModal} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
            <View
              style={{
                height: 30, width: 60,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white'

              }}>
              <Text>Cancle</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  renderHeader() {
    return null;
  }
}


ModalInput.defaultProps = {
  success: false,
};


ModalInput.propTypes = {
  onPauseClick: Proptypes.func,
  onDeactivateClick: Proptypes.func,
  success: Proptypes.bool,
};

import React, { Commponent } from "react";
import { View, TouchableOpacity, Image, Platform, Text, TextInput } from "react-native";
import ModalInfo from "../../commons/ModalInfo";
import Proptypes from "prop-types";
import TextComponent from "../../commons/Text";
var moment = require('moment');

const IS_IOS = Platform.OS === 'ios';
export default class ModalRollCall extends ModalInfo {

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
      gvName: "",
      timeToCloseRollCall: 1,
      key: '',
      keySubmit: ''
    };
    this._interval = null;
    this.goSetting = this.goSetting.bind(this);
  }

  openModal(timeout, key) {
    this.setState({
      timeToCloseRollCall: timeout,
      key: key
    })
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
    this._interval = setInterval(() => {
      this.setState(prev => ({ timeToCloseRollCall: prev.timeToCloseRollCall - 1 }));
    }, 1000);
    // this.setState({
    //   showAccountPause: showAccountPause,
    //   isShowConfirmUnPauseAccount: _isShowConfirmUnPauseAccount
    // });
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
    if (this.state.keySubmit === this.state.key) {
      this.closeModal();
      if (this.props.onSubmmit) {
        this.props.onSubmmit();
      }
    }
    this.onChangeClassName('')
  };

  onChangeClassName(_key){
    this.setState({
      keySubmit: _key,
    })
  }

  onChangeGvName(_gvName){
    this.setState({
      gvName: _gvName
    })
  }


  renderContent() {
    const { timeToCloseRollCall } = this.state;
    let _timeToCloseRollCall = moment.utc(timeToCloseRollCall * 1000).format('HH:mm:ss');
    const { text } = this.props;
    const { gvName, className } = this.state;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>


        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 15 }}>
          <Text>Roll Call</Text>
        </View>
        <TextComponent text={_timeToCloseRollCall} style={{ fontSize: 20, fontWeight: 'bold'}}/>

        <View style={{ flexDirection: 'column', justifyContent: 'center', width: "80%" }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeClassName(text)}
            value={this.state.keySubmit}
          />
          {/* <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeGvName(text)}
            value={gvName}
          /> */}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <TouchableOpacity activeOpacity={0.9} onPress={this.onSubmmit} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
            <View
              style={{
                height: 30, width: 60,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'green',
                marginRight: "20%"
              }}>
              <Text>Submit</Text>
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
              <Text>Close</Text>
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


ModalRollCall.defaultProps = {
  success: false,
};


ModalRollCall.propTypes = {
  onPauseClick: Proptypes.func,
  onDeactivateClick: Proptypes.func,
  success: Proptypes.bool,
};

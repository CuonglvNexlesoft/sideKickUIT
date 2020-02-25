
import React, { Commponent } from "react";
import { View, TouchableOpacity, Image, Platform, Text, TextInput, Linking } from "react-native";
import ModalInfo from "./ModalInfo";
import Proptypes from "prop-types";
import TextComponent from "./Text";
import global from '../commons/_var'

const IS_IOS = Platform.OS === 'ios';
export default class ModalGetLink extends ModalInfo {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      showAccountPause: false,
      isShowConfirmUnPauseAccount: false,
      class: {
        "name": "Defaults",
        "email": "Defaults",
      },
      className: "",
      gvName: "",
      text: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf',
      fileName: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf'.substring('https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf'.lastIndexOf('/')+1)
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

  onSubmmit = (_link) => {
    this.closeModal();
    if (this.props.onSubmmit) {
      this.props.onSubmmit(_link);
    }
  };

  onChangeClassName(_className) {
    this.setState({
      className: _className,
    })
  }

  onChangeGvName(_text) {
    this.setState({
      text: _text
    })
  }

  onFileName=(_text)=> {
    this.setState({
      fileName: _text
    })
  }


  renderContent() {
    const { text } = this.props;
    const { gvName, className } = this.state;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%',  }}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'center', width: "100%", padding: 10 }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
            <Text>Link:</Text>
          </View>

          <TextInput
            style={{ height: 40, width: "60%", borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 10 }}
            onChangeText={text => this.onChangeGvName(text)}
            value={this.state.text}
          />

          <TouchableOpacity activeOpacity={0.9} style={{ paddingLeft: 5 }} onPress={this.onSubmmit}>
            <View
              style={{
                height: 30,
                minWidth: 60,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: global.lightBlue,
                padding: 5
              }}>
              <Text>Online</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'center', width: "100%", padding: 10 }}>

          <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 15 }}>
            <Text>File:</Text>
          </View>

          <TextInput
            style={{ height: 40, width: "60%", borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 10 }}
            onChangeText={text => this.onFileName(text)}

            value={this.state.fileName}
          />

          <TouchableOpacity activeOpacity={0.9} style={{ paddingLeft: 5 }} 
          onPress={() => {
            this.closeModal();
             this.props.onDownLoadFile(this.state.text.substring(this.state.text.lastIndexOf('/')+1))
          }}>
            <View
              style={{
                height: 30,
                minWidth: 60,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'green',
              }}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 50 }}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => Linking.openURL('https://www.google.com/').catch((err) => console.error('An error occurred', err))}>
            <View
              style={{
                // height: 30, width: 60,
                borderWidth: 1,
                borderRadius: 15,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white',
                padding: 10
              }}>
              <Text>Browser file</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://courses.uit.edu.vn/login/index.php').catch((err) => console.error('An error occurred', err))}
            style={{ backgroundColor: global.color0B, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 20, borderWidth: 2, padding: 10 }}>
            <TextComponent text={"Go to Course"} style={{ color: global.blueLightColor }} />
          </TouchableOpacity>
         
        </View>

      </View>
    );
  }

  renderHeader() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: global.color53, height: 40, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
      <Text>Download File</Text>
    </View>
    );
  }
}


ModalGetLink.defaultProps = {
  success: false,
};


ModalGetLink.propTypes = {
  onPauseClick: Proptypes.func,
  onDeactivateClick: Proptypes.func,
  success: Proptypes.bool,
};

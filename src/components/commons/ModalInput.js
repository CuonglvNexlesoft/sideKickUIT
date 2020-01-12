import React, { Commponent } from "react";
import { View, TouchableOpacity, Image, Platform, Text, TextInput, ScrollView } from "react-native";
import ModalInfo from "./ModalInfo";
import Proptypes from "prop-types";
import IconButton from '../commons/IconButton';
import Strings from '../../constants/Strings';
import { Metrics, Colors, Images } from '../../themes';
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
      total: "",
      startDate: '',
      endDate: ''
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
    const { total, startDate, endDate, className } = this.state;
    if(total !== "" && startDate !== "" &&  endDate!== "" &&  className!== "" ){
      const newClass = {
        "Ma": "TEST",
        "Ten": className,
        "SiSo": total,
        "SiSoToiDa": total,
        "NgayBatDau": startDate,
        "NgayKetThuc": endDate
      };
      if (this.props.onSubmmit) {
          this.props.onSubmmit(newClass);
      }
    }
    this.closeModal();
  };

  onChangeClassName(_className){
    this.setState({
      className: _className,
    })
  }

  onChangeClassTotal(_className){
    this.setState({
      total: _className,
    })
  }

  onChangeStartDate(_className){
    this.setState({
      startDate: _className,
    })
  }

  onChangeEndDate(_className){
    this.setState({
      endDate: _className,
    })
  }


  renderContent() {
    const { text } = this.props;
    const { gvName, className } = this.state;
    return (
      <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 15 }}>
          <Text>CLASS</Text>
        </View> */}

        <View style={{ flexDirection: 'column', justifyContent: 'center', width: "80%" }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeClassName(text)}
            // value={className}
            placeholder={Strings.className}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeClassTotal(text)}
            // value={className}
            placeholder={Strings.total}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeStartDate(text)}
            // value={className}
            placeholder={Strings.startDate}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 10}}
            onChangeText={text => this.onChangeEndDate(text)}
            // value={gvName}
            placeholder={Strings.endDate}
          />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>this.onSubmmit()} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
            <View
              style={{
                height: 30, width: 200,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'green',
              }}>
              <Text>Create</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity activeOpacity={0.9} onPress={this.closeModal} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
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
          </TouchableOpacity> */}
        </View>

      </View>
      </ScrollView>
    );
  }

  renderHeader() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingBottom: 15 }}>
      <Text>CLASS</Text>
      <IconButton 
          btnStyle={{position: 'absolute', right: 0, top: -10}}
          activeOpacity={0.5}
          onClick={()=>{
            this.closeModal()
          }}
          nameIcon={Images.icClose} />
    </View>
    )
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

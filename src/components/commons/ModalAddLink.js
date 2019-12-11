
import React, { Commponent } from "react";
import { View, TouchableOpacity, Image, Platform, Text, TextInput, Linking } from "react-native";
import ModalInfo from "./ModalInfo";
import Proptypes from "prop-types";

const IS_IOS = Platform.OS === 'ios';
export default class ModalAddLink extends ModalInfo {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      text: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf'
    };
  }

  openModal() {
    super.openModal();
  }
  onCloseModal() {
    super.closeModal();
  }


  renderBottom() {
    return null;
  }

  onSubmmit = () => {
    this.closeModal();
    if (this.props.onSubmmit) {
        this.props.onSubmmit(this.state.text);
    }
  };

  onChangeLink(_text){
    this.setState({
      text: _text
    })
  }


  renderContent() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>


        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Text>Add Link</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'center', width: "100%", padding: 10 }}>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 15}}>
          <Text>Link:</Text>
          </View>
          <TextInput
            style={{ height: 30, width: "60%", borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 10}}
            onChangeText={text => this.onChangeLink(text)}
            value={this.state.text}
          />
          <TouchableOpacity activeOpacity={0.9} style={{paddingLeft: 5}} onPress={this.onSubmmit}>
            <View
              style={{
                height: 30,
                minWidth: 60,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'green',
              }}>
              <Text>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>Linking.openURL('https://www.google.com/').catch((err) => console.error('An error occurred', err))}>
            <View
              style={{
                // height: 30, width: 60,
                minWidth: 100,
                borderWidth: 1,
                borderRadius: 20,
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white',
                padding: 5
              }}>
              <Text>Search</Text>
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


ModalAddLink.defaultProps = {
  success: false,
};


ModalAddLink.propTypes = {
  onPauseClick: Proptypes.func,
  onDeactivateClick: Proptypes.func,
  success: Proptypes.bool,
};

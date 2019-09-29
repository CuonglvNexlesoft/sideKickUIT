// import React, { Component, PropTypes } from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
// } from 'react-native';
// import { Actions, ActionConst } from 'react-native-router-flux';
// import ScreenName from '../../constants/ScreenName';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import shorthand from 'react-native-styles-shorthand';

// import * as CommonUtils from '../../utils/CommonUtils';
// import Locale from '../../utils/Locale';
// import GlobalKeys from '../../constants/GlobalKeys';
// import { Metrics, Colors } from '../../themes';

// export default class HomeComponent extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
            
//         };
//     }

//     render() {
//         return (
//             <View style={[styles.container, {  }]}>
//                 <Text>HOME TAB</Text>
//             </View>
//         )
//     }

//     componentDidMount() {
//     }

// }

// HomeComponent.defaultProps = {
    
// };

// const styles = EStyleSheet.create(shorthand({
//     container: {
//         flex: 1,
//     }
// }));

import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    };
  }

  componentDidMount() {
    this.socket = io("http://172.16.5.12:3000");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderWidth: 2 }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage });
          }}
        />
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
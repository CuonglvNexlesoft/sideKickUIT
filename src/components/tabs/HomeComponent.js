import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import io from "socket.io-client";
import ModalInput from "../commons/ModalInput";
import { Actions, ActionConst } from "react-native-router-flux";
import ScreenName from '../../constants/ScreenName';
import ChatRoomCardItem from "../modules/ChatRoomCardItem";
import IconButton from "../commons/IconButton";
import { Metrics, Colors, Images } from '../../themes';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
      users: [
        {
          "name": "Proxima Midnight",
          "email": "proxima@appdividend.com",
          "coverUrl": "https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=429&fit=crop&dpr=2"
        },
        {
          "name": "Ebony Maw",
          "email": "ebony@appdividend.com",
          "coverUrl": "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp.jpg"
        },
        {
          "name": "Black Dwarf",
          "email": "dwarf@appdividend.com",
          "coverUrl": "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp.jpg"
        },
        {
          "name": "Mad Titan",
          "email": "thanos@appdividend.com",
          "coverUrl": "https://images.theconversation.com/files/49135/original/22qc7r28-1400667334.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=429&fit=crop&dpr=2"
        },
      ]
    };
  }

  componentDidMount() {
    console.log('aaaaa', this.props.user)

  }

  onOpendCreateForm() {
    this.refs.modalInput.openModal();
  }

  createClass(_class) {
    if (_class) {
      let newArrClass = this.state.users;
      newArrClass.unshift(_class)
      this.setState({
        users: newArrClass
      });
    }
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  onPressNext(item) {
    Actions[ScreenName.DETAIL]({ class: item })
  }

  renderRow(item) {
    return (
      // <TouchableOpacity
      //   onPress={this.onPressNext.bind(this, item)}
      //   style={{ borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 10 }}>
      //   <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      //     <Text style={styles.name}>{item.name}</Text>
      //   </View>
      //   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      //     <Text style={styles.name}>Class:</Text>
      //     <Text style={styles.name}>{item.name}</Text>
      //   </View>
      //   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      //     <Text style={styles.name}>GVHD:</Text>
      //     <Text style={styles.email}>{item.email}</Text>
      //   </View>
      // </TouchableOpacity>
      <ChatRoomCardItem
        //backgroundImage={item.coverUrl == 'string' ? 'https://img.redhotpie.com.au/imageUser/MemberPhoto/2590_131878617392725266.jpg' : item.coverUrl}
        backgroundImage={item.coverUrl}
        roomName={item.name}
        onPress={this.onPressNext.bind(this, item)}
        memberInRoom={1}
        memberLive={1}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => this.onOpendCreateForm()}>
          <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.name}>Add class</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.state.users}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            this.renderRow(item)
          }
          keyExtractor={item => item.email}
        />
        <ModalInput
          ref={'modalInput'}
          styleModalPopupCustom={{ width: '95%', paddingLeft: 10, paddingRight: 10 }}
          onSubmmit={(value) => this.createClass(value)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10
  }
});
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import io from "socket.io-client";
import ModalInput from "../commons/ModalInput";
import { Actions, ActionConst } from "react-native-router-flux";
import ScreenName from '../../constants/ScreenName';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
      users: [
        {
          "name": "Proxima Midnight",
          "email": "proxima@appdividend.com"
        },
        {
          "name": "Ebony Maw",
          "email": "ebony@appdividend.com"
        },
        {
          "name": "Black Dwarf",
          "email": "dwarf@appdividend.com"
        },
        {
          "name": "Mad Titan",
          "email": "thanos@appdividend.com"
        },
      ]
    };
  }

  componentDidMount() {
    console.log('aaaaa',this.props.user)
   
  }

  onOpendCreateForm(){
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
    Actions[ScreenName.DETAIL]({class: item})
  }

  renderRow(item){
    return(
      <TouchableOpacity 
          onPress={this.onPressNext.bind(this, item)}
          style={{borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 10}}>
            <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>Class:</Text>
            <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>GVHD:</Text>
            <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={{paddingBottom: 15}} onPress={()=> this.onOpendCreateForm()}>
          <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <Text style={styles.name}>Create class</Text>
            </View>
          </TouchableOpacity>
          <FlatList
          data={this.state.users}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          this.renderRow(item)
          }
          keyExtractor={item => item.email}
        />
        <ModalInput
        ref={'modalInput'}
        styleModalPopupCustom={{width: '95%', paddingLeft: 10, paddingRight: 10}}
        onSubmmit={(value)=>this.createClass(value)}/> 
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
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import io from "socket.io-client";
import ModalInput from "../commons/ModalInput";
import { Actions, ActionConst } from "react-native-router-flux";
import ScreenName from '../../constants/ScreenName';
import ChatRoomCardItem from "../modules/ChatRoomCardItem";
import IconButton from "../commons/IconButton";
import { Metrics, Colors, Images } from '../../themes';
import global from '../commons/_var';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
      users: [
        {
          "name": "JAVA",
          "email": "proxima@appdividend.com",
          "coverUrl": Images.java
        },
        {
          "name": "REACT NATIVE",
          "email": "ebony@appdividend.com",
          "coverUrl": Images.react
        },
        {
          "name": "DOT NET",
          "email": "dwarf@appdividend.com",
          "coverUrl": Images.dotnet
        },
      ],
      text: ""
    };
  }

  componentDidMount() {

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

  onPressNext(item, index) {
    // if(index == 0)
    // Actions[ScreenName.SETUP]({ class: item })
    // else
    Actions[ScreenName.DETAIL]({ class: item })
  }

  renderRow(item, index) {
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
        onPress={this.onPressNext.bind(this, item, index)}
        memberInRoom={1}
        memberLive={1}
      />
    );
  }

  onChangeText = (text) =>{
    this.setState({
      text: text
    })
  }

  render() {
    let haveText = this.state.text !== "";
    let styleRadius = null;
    // if (!haveText) {
    //   styleRadius = {
    //     borderTopLeftRadius: 0,
    //     borderTopRightRadius: 0
    //   };
    // }
    return (
      <View style={styles.container}>
        <View style={[{
          alignItems: 'center',
          backgroundColor: global.colorF3,
          paddingLeft: 4,
          paddingRight: 4,
          flexDirection: 'row',
          borderRadius: 20,
          height: 50,
          justifyContent: 'center'
        }, styleRadius]}>
          <View style={[{
            flexDirection: 'row',
            flex: 1,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: global.colorCc,
            backgroundColor: '#fff',
          }]}>
            <View style={{
              position: 'absolute',
              top: 8,
              left: 10
            }}>
              <Image
                resizeMode={"cover"}
                source={Images.icSearchUserName}
                style={{height: 25, width: 25,}}

              />
            </View>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              key={"textInput"}
              style={[{
                height: 40,
                paddingLeft: 40,
                paddingRight: 0,
                fontSize: 20,
                // fontFamily: global.fontRegular,
                color: global.color33,
                flex: 1,
                paddingTop: 0,
                paddingBottom: 0,
              }]}
              onChangeText={this.onChangeText}
              //defaultValue={this.state.text}
              value={this.state.text.toString()}
              // autoFocus
              underlineColorAndroid={"rgba(0,0,0,0)"}
              onFocus={this.onFocusInput}
              onBlur={this.onBlurInput}
              placeholder={'Search'}
              placeholderTextColor={"#BBBBBB"}
            />
            {haveText ?
              <TouchableOpacity style={{
                justifyContent: "center",
                alignItems: "center",
                width: 20,
                right: 8
              }}
                onPress={()=>this.setState({text: ""})}
              >
                <Image
                  resizeMode={"cover"}
                  source={Images.icCross}
                />
              </TouchableOpacity>
              : null
            }

          </View>
        </View>
        {/* <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => this.onOpendCreateForm()}>
          <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.name}>Add class</Text>
          </View>
        </TouchableOpacity> */}
        <FlatList
          data={this.state.users.filter(e=>e.name.includes(this.state.text))}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
            this.renderRow(item, index)
          }
          keyExtractor={item => item.email}
        />
        <View style={{height: 50, width: Metrics.screenWidth, position: 'absolute', bottom: 20, alignItems: 'flex-end'}}>
          <IconButton 
          activeOpacity={0.5}
          onClick={()=>{

          }}
          nameIcon={Images.icAddPhotoEditProfile} iconSize={{width: 60, height: 60}}/>
        </View>
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
    backgroundColor: global.colorFF,
    padding: 10
  }
});
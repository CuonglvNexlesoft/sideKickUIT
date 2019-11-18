import React, { Component, PropTypes } from 'react';
import {
  View, TextInput,
  Text, Image,
  TouchableHighlight,
  StyleSheet, Keyboard,
  UIManager, Platform,
  LayoutAnimation,
  PixelRatio,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import GlobalKeys from '../../constants/GlobalKeys';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
const { SlideInMenu } = renderers;
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../commons/Container';
import Button from '../commons/Button';
import Ripples from '../commons/Ripples';
import CircleImage from '../commons/CircleImage';
import Spinner from '../commons/Spinner';
import Toast from '../commons/Toast';
import { ToastTypes } from './../commons/Toast';
import DismissKeyboard from 'dismissKeyboard';

import LinearGradient from 'react-native-linear-gradient';

import * as Themes from '../../themes';
import Strings from '../../constants/Strings';
import * as CommonUtils from '../../utils/CommonUtils';
import io from "socket.io-client";
import ModalMenu from '../commons/ModalMenu';
import IconButton from '../commons/IconButton';
import Avatar from '../commons/Avatar';
import ChatRoomUserStatusPopUp from '../modules/ChatRoomUserStatusPopUp';
import TextComponent from '../commons/Text';
import PDFView from 'react-native-view-pdf';
const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};
export default class ClassDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessages: [],
      text: '',
      isShowUserStatus: false,
      isShowChat: false
    };
  }

  createTest = () => {
    Actions[ScreenName.TEST]({})
  }

  render() {
    const resourceType = 'url';
    return (
      <Container
        title={this.props.class.name}
        headerLeft={
          <Button width={Themes.Metrics.headerButtonWidth} color={'transparent'} onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' style={{ color: Themes.Colors.background, fontSize: 26 }} />
          </Button>
        }
        headerRight={
          <Button width={Themes.Metrics.headerButtonWidth} color={'transparent'} onPress={() => this.refs.modalConversationMenu.showModal()}>
            <Icon name='md-more' style={{ color: Themes.Colors.background, fontSize: 26 }} />
          </Button>
        }
        titleTextStyle={{ color: Themes.Colors.background }}
        statusBarColor={Themes.Colors.transparent}
        statusBarProps={{ barStyle: "dark-content" }}>
        <View style={{ flex: 1, paddingHorizontal: 5, paddingBottom: 15, backgroundColor: '#e6e6e6' }}>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 10 }}>
            <IconButton nameIcon={Themes.Images.icNotificationOutLine} />
            <TextComponent text={45}  style={{position: 'absolute', backgroundColor: 'red', borderRadius: 10, minWidth: 20, padding: 2, left: 20, top: 0}}/>
          </View> */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10 }}>
            <IconButton nameIcon={Themes.Images.icGroupChat} />
            <TextComponent text={45} />
          </View>
          </View>
          <View style={{ flex: 1, borderWidth: 2, borderColor: '#008000' }}>
            {/* Some Controls to change PDF resource */}
            <PDFView
              fadeInDuration={250.0}
              style={{ flex: 1 }}
              resource={resources[resourceType]}
              resourceType={resourceType}
              onLoad={() => console.log("PDF")}
              onError={() => console.log('Cannot render PDF', error)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <TextComponent text={'Discussion: '} />
            <IconButton 
            nameIcon={Themes.Images.icArrowDownProfile} 
            btnStyle={{width: 50}} 
            onClick={()=>{
              this.setState({isShowChat: !this.state.isShowChat})
            }}
            />
            </View>
          <FlatList
            ref={'flatList'}
            data={this.state.chatMessages}
            style={{ flex: 1 }}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                  <View style={{}}>
                    <Avatar
                      ref="avatar"
                      showOnline={false}
                      user={{ userId: 1 }}
                      size="s-small"
                      canPress={false}
                      isDynamicallyAvatar
                    />
                  </View>
                  <View style={{ borderRadius: 10, borderWidth: 0.5, padding: 5, backgroundColor: '#cccccc', minWidth: 100, justifyContent: 'center' }}>
                    <Text numberOfLines={5} style={styles.name}>{item.message}</Text>
                  </View>
                </View>
              </View>
            }
          />
          </View>
          {this.state.isShowUserStatus && <View style={{
            position: 'absolute',
            bottom: 65,
            left: 0,
            zIndex: 2,
          }}>
            <ChatRoomUserStatusPopUp
              onItemClick={this.onUserStatusItemClick}
              closeView={this.onShowStatusPopup}
            />
          </View>}

          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Avatar
              onPress={() => this.setState({ isShowUserStatus: !this.state.isShowUserStatus })}
              ref="avatar"
              showOnline={false}
              user={{ userId: 1 }}
              size="small"
              canPress={true}
              isDynamicallyAvatar
              styleAvatar={{ marginLeft: 15 }}
            />
            <View style={{ flex: 1 }}>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 15
                }}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.text}
              />
            </View>
            <IconButton
              nameIcon={Themes.Images.icSend}
              onClick={() => this.sendMessage()}
            />
            <ModalMenu
              ref={"modalConversationMenu"}
              onCreateTest={this.createTest}

            />
          </View>
        </View>
      </Container>
    );
  }

  componentDidMount() {
    // this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    this.socket = io("http://localhost:3000");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, JSON.parse(msg)] });
    });

  }
  componentWillUnmount() {
    // this.keyboardWillShowListener.remove();
    // this.keyboardDidHideListener.remove();
  }

  onChangeText(_text) {
    this.setState({
      text: _text
    })
  }

  sendMessage() {
    console.log(this.props.userInfo)
    Keyboard.dismiss();
    this.refs.flatList.scrollToEnd();
    let objMessage = { user: this.props.userInfo, message: this.state.text };
    this.socket.emit("chat message", JSON.stringify(objMessage));
    this.setState({ text: "" });
  }

}

ClassDetailComponent.defaultProps = {
  // name: null,
};



const styles = EStyleSheet.create(shorthand({
  container: {
    flex: 1,
    backgroundColor: Themes.Colors.background,
    justifyContent: 'center'
  },
  contents: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  infoText: {
    color: Themes.Colors.background,
    fontSize: 20,
    marginBottom: 20,
  },

  inputPanel: {
    width: '85%',
  },
  input: {
    width: '100%',
    height: 30,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: Themes.Colors.background,
    paddingHorizontal: 10,
    // borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: Themes.Colors.background,
    borderWidth: Themes.Metrics.borderWidth,
    borderColor: Themes.Colors.border,
    borderRadius: 5,
  },
  // loading: {
  //     position: 'absolute',
  //     marginLeft: -40,
  //     marginTop: -15,
  // },
  // loadingText: {
  //     alignSelf: 'center',
  //     color: 'white',
  //     marginTop: 10,
  // },
  loginSocial: {
    flexDirection: 'row',
    marginVertical: 10,
  },




}));
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
  FlatList
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
import CheckBoxLineItem from '../modules/CheckBoxLineItem';
import ButtonOutline from '../commons/ButtonOutline';
var moment = require('moment');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import global from '../commons/_var'
const FirstRoute = () => (
  <View style={[{ flex: 1, backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[{ flex: 1, backgroundColor: 'yellow' }]} />
);

export default class CreateTestComponent extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   chatMessages: [],
    //   text: '',
    //   isShowUserStatus: false,
    //   timeToReset: 1,
    //   selectAnswerId: null,
    //   indexQuestion: 0
    // };
    this.state = {
      index: 0,
      // routes: [
      //   { id: 1, title: '0' },
      //   { id: 3, title: '1' },
      //   { id: 2, title: '2' },
      //   // { key: '3', title: '3' },
      //   // { key: '4', title: '4' },
      //   // { key: '5', title: '5' },
      //   // { key: '6', title: '6' },
      //   // { key: '7', title: '7' },
      //   // { key: '8', title: '8' },
      //   // { key: '9', title: '9' },
      // ],
      routes: props.testData,
      timeToReset: 5*60,
    };
    this._interval = null;
  }

  

  checkCorrectAnswer=(item)=>{
    console.log(item)
  }

  render() {
    const { timeToReset } = this.state;
    let timeReset = moment.utc(timeToReset * 1000).format('HH:mm:ss');
    const onSelectFilter = index => {
      this.setState({
        selectAnswerId: index,
      });
    };
    let themeColor = this.props.settingState && this.props.settingState.colorTheme ? { backgroundColor: this.props.settingState.colorTheme} : null;
    return (
      <Container
        title={("Assignment").toUpperCase()}
        headerLeft={
          <View style={{ paddingLeft: 15 }}>
            <TextComponent text={this.state.index + 1 + "/"+ this.props.testData.length} style={{ fontSize: 15 }} />
          </View>
          // null
        }
        style={themeColor}
        headerRight={
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{ paddingRight: 15 }}>
            <TextComponent text={"Submit"} style={{ fontSize: 15 }} />
          </TouchableOpacity>
        }
        titleTextStyle={{ color: Themes.Colors.primary, fontSize: 25, fontWeight: 'bold' }}
        statusBarColor={Themes.Colors.transparent}
        statusBarProps={{ barStyle: "dark-content" }}>
        <View style={{ flex: 1, paddingHorizontal: 5, paddingBottom: 15, backgroundColor: global.colorFF }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
            <TextComponent text={timeReset} style={{ fontSize: 20, fontWeight: 'bold' }} />
          </View>
          <TabView
            navigationState={this.state}
            renderScene={({ route, jumpTo }) => {
              return (
                <View>
                  <View style={{ width: "100%", minHeight: 200, padding: 10, borderRadius: 10, borderWidth: 1 }}>
                    <Text numberOfLines={5} style={{ paddingBottom: 10 }}>{route.question}</Text>
                  </View>
                  <FlatList
                    style={{ paddingTop: 15 }}
                    data={route.options}
                    extraData={this.state.selectAnswerId}
                    renderItem={({ item, index }) => {
                      return (
                        <CheckBoxLineItem
                          style={{ backgroundColor: global.colorF4, borderRadius: 10, padding: 10, paddingLeft: 25, marginBottom: 10 }}
                          minHeight={0}
                          styleRadioSelected={{ marginLeft: 0 }}
                          divider={false}
                          textLeft={item}
                          styleLeftTextShow={{}}
                          isCheck={index === this.state.selectAnswerId ? true : false}
                          onClickAction={
                            () => {
                              onSelectFilter(index);
                            }
                          }
                        />
                      )
                    }
                    }
                  />
                </View>

              );

            }
            }
            onIndexChange={index => {
              this.setState({ index,  selectAnswerId: null })
            }
            }
            initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
            renderTabBar={props =>
              <TabBar
                {...props}
                tabStyle={{}} // here
                renderLabel={({ route, focused, color }) => {
                  return (
                    <Text style={{}}>
                      {route.key}
                    </Text>
                  )
                }
                }
              />}

          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
            <ButtonOutline disable={this.state.index === 0} onClick={() => this.setState({ index: this.state.index - 1,  selectAnswerId: null })} icSrc={Themes.Images.icArrowLeft} name={'Previous'} btnStyle={{ width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#004d1a' }} />
            <ButtonOutline disable={this.state.index === this.props.testData.length - 1} onClick={() => this.setState({ index: this.state.index + 1, selectAnswerId: null })} icRight={Themes.Images.icArrowRight} iconStyle={{ marginLeft: 10 }} name={'Next'} btnStyle={{ width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#004d1a' }} />
          </View>
        </View>
      </Container>
    );
  }

  componentDidMount() {
    // this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    // this.socket = io("http://localhost:3000");
    // this.socket.on("chat message", msg => {
    //   this.setState({ chatMessages: [...this.state.chatMessages, JSON.parse(msg)] });
    // });
    // this.setState({
    //   routes: this.props.testData
    // },
    // ()=>console.log(this.state.routes))
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
    this._interval = setInterval(() => {
      this.setState(prev => ({ timeToReset: prev.timeToReset - 1 }));
    }, 1000);
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
    // console.log(this.props.userInfo)
    Keyboard.dismiss();
    this.refs.flatList.scrollToEnd();
    let objMessage = { user: this.props.userInfo, message: this.state.text };
    this.socket.emit("chat message", JSON.stringify(objMessage));
    this.setState({ text: "" });
  }

}

CreateTestComponent.defaultProps = {
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
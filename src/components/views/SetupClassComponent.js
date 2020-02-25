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
  Linking
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
import ModalRollCall from '../modules/ModalRollCall';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import IconTooltip from '../commons/IconTooltip';
import ModalAddLink from '../commons/ModalAddLink';
import { DocumentView, RNPdftron } from 'react-native-pdftron';
import SwitchBtn from '../modules/switches/SwitchButton';
import global from '../commons/_var'
import CheckBoxLineItem from '../modules/CheckBoxLineItem';

type Props = {};
export default class SetupClassComponent extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      enableDiscuss: true,
      enableRollCall: true,
      enableTest: true,
      enableRemind: true,
      arrLink: [],
      text: '',
      selectTimeTest: 0,
      note: ''
    };

  }

  componentDidMount() {
  }

  onChangeLink = (text) => {
    if (text.includes('https://')) this.setState({ arrLink: [...this.state.arrLink, text] });
  }

  onChangeNote = (text) => {
    this.setState({ note: text });
  }

  render() {
    const onSelectFilter = index => {
      this.setState({
        selectTimeTest: index,
      });
    };
    return (
      <Container
      title={"SETUP"}
      headerLeft={
        <IconButton nameIcon={Themes.Images.icBackArrowBlack} onClick={() => Actions.pop()} btnStyle={{paddingLeft: 15}} />
      }
      headerRight={
        <IconButton nameIcon={Themes.Images.icMenuBlack} onClick={() => this.refs.modalConversationMenu.showModal()} btnStyle={{paddingRight: 25}} />
      }
      titleTextStyle={{ color: Themes.Colors.primary, fontSize: 25, fontWeight: 'bold'}}
      statusBarColor={Themes.Colors.transparent}
      statusBarProps={{ barStyle: "dark-content" }}>
        <ScrollView bounces={false} style={{ flex: 1, backgroundColor: global.colorF3 }}>
          <View style={{ justifyContent: 'center', backgroundColor: global.color0B, paddingHorizontal: 15, minHeight: 100, paddingBottom: 15,  }}>

            <View style={{ padding: 5 }}>
              <TextComponent text={"Document"} style={{ color: 'white', fontSize: 20 }} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://courses.uit.edu.vn/login/index.php').catch((err) => console.error('An error occurred', err))}
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 20, borderWidth: 2, padding: 10 }}>
                <TextComponent text={"Go to Course"} style={{ color: global.blueLightColor }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.refs.modalGetLink.openModal()}
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 20, borderWidth: 2, padding: 10 }}>
                <TextComponent text={"Add link download"} style={{ paddingRight: 5, color: global.primaryColor }} />
                <Image source={Themes.Images.btnPlus} />
              </TouchableOpacity>
            </View>

            <View>
              <View style={{ paddingBottom: 15 }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.bugs.vn/').catch((err) => console.error('An error occurred', err))}
                  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 20, borderWidth: 2, padding: 10, backgroundColor: global.naviGreen }}>
                  <TextComponent text={"Add Sample code"} style={{ paddingRight: 5, color: global.purple, fontWeight: 'bold' }} />
                  {/* <Image source={Themes.Images.btnPlus}/> */}
                </TouchableOpacity>
              </View>

            </View>

            <View style={{ backgroundColor: 'white', borderRadius: 10, minHeight: 100 }}>
              {this.state.arrLink.length > 0 && <FlatList
                data={this.state.arrLink}
                renderItem={({ item, index }) =>
                  <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'black', width: 10, height: 10, borderRadius: 20, marginRight: 15 }} />
                    <View style={{ paddingRight: 15 }}>
                      <TextComponent text={item} numberOfLines={3} />
                    </View>
                  </View>
                }
                keyExtractor={(item, index) => (item + index).toString()}
              />}
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                  placeholder={"Pasted link here"}
                  textAlignVertical={'center'}
                  style={{ height: 30, paddingLeft: 15 }}
                  onChangeText={this.onChangeLink}
                  value={this.state.text}
                />
              </View>

            </View>

          </View>

          <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, minHeight: 50, backgroundColor: global.colorFF }}>

            <View style={{ padding: 5 }}>
              <TextComponent text={"Discussion"} style={{ fontSize: 20 }} />
            </View>

            <SwitchBtn
              circleStyle={{ borderWidth: 0, borderRadius: 10, width: 19, height: 19, paddingLeft: 3 }}
              backgroundColorOn={global.lightGreen}
              backgroundColorOff={global.colorE3}
              circleColorOff={global.colorFF}
              circleColorOn={global.colorFF}
              switchOn={this.state.enableDiscuss}
              onPress={
                value => {
                  this.setState({
                    enableDiscuss: !this.state.enableDiscuss
                  });
                }
              }
            />
          </View>

          <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, minHeight: 50,  }}>

            <View style={{ padding: 5 }}>
              <TextComponent text={"Test"} style={{ fontSize: 20 }} />
            </View>

            <SwitchBtn
              circleStyle={{ borderWidth: 0, borderRadius: 10, width: 19, height: 19, paddingLeft: 3 }}
              backgroundColorOn={global.lightGreen}
              backgroundColorOff={global.colorE3}
              circleColorOff={global.colorFF}
              circleColorOn={global.colorFF}
              switchOn={this.state.enableTest}
              onPress={
                value => {
                  this.setState({
                    enableTest: !this.state.enableTest
                  });
                }
              }
            />
            {this.state.enableTest && <View style={{ paddingVertical: 10, width: 180 }}>
              <CheckBoxLineItem
                style={{ backgroundColor: '#ffe6e6', borderRadius: 10, padding: 10, paddingLeft: 25, marginBottom: 10 }}
                minHeight={0}
                styleRadioSelected={{ marginLeft: 0 }}
                divider={false}
                textLeft={"30 minutes"}
                styleLeftTextShow={{}}
                isCheck={this.state.selectTimeTest === 0 ? true : false}
                onClickAction={
                  () => {
                    onSelectFilter(0);
                  }
                }
              />
              <CheckBoxLineItem
                style={{ backgroundColor: '#ffe6e6', borderRadius: 10, padding: 10, paddingLeft: 25, marginBottom: 10 }}
                minHeight={0}
                styleRadioSelected={{ marginLeft: 0 }}
                divider={false}
                textLeft={"15 minutes"}
                styleLeftTextShow={{}}
                isCheck={this.state.selectTimeTest === 1 ? true : false}
                onClickAction={
                  () => {
                    onSelectFilter(1);
                  }
                }
              />
              <CheckBoxLineItem
                style={{ backgroundColor: '#ffe6e6', borderRadius: 10, padding: 10, paddingLeft: 25, marginBottom: 10, }}
                minHeight={0}
                styleRadioSelected={{ marginLeft: 0 }}
                divider={false}
                textLeft={"10 minutes"}
                styleLeftTextShow={{}}
                isCheck={this.state.selectTimeTest === 2 ? true : false}
                onClickAction={
                  () => {
                    onSelectFilter(2);
                  }
                }
              />
            </View>}

          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, minHeight: 50, backgroundColor: global.colorFF }}>

            <View style={{ padding: 5 }}>
              <TextComponent text={"Roll Call"} style={{ fontSize: 20 }} />
            </View>

            <SwitchBtn
              circleStyle={{ borderWidth: 0, borderRadius: 10, width: 19, height: 19, paddingLeft: 3 }}
              backgroundColorOn={global.lightGreen}
              backgroundColorOff={global.colorE3}
              circleColorOff={global.colorFF}
              circleColorOn={global.colorFF}
              switchOn={this.state.enableRollCall}
              onPress={
                value => {
                  this.setState({
                    enableRollCall: !this.state.enableRollCall
                  });
                }
              }
            />
          </View>

          <View style={{ paddingHorizontal: 15, minHeight: 50, paddingBottom: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15 }}>
              <View style={{ padding: 5 }}>
                <TextComponent text={"Remind"} style={{ fontSize: 20 }} />
              </View>

              <SwitchBtn
                circleStyle={{ borderWidth: 0, borderRadius: 10, width: 19, height: 19, paddingLeft: 3 }}
                backgroundColorOn={global.lightGreen}
                backgroundColorOff={global.colorE3}
                circleColorOff={global.colorFF}
                circleColorOn={global.colorFF}
                switchOn={this.state.enableRemind}
                onPress={
                  value => {
                    this.setState({
                      enableRemind: !this.state.enableRemind
                    });
                  }
                }
              />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 10, minHeight: 100 }}>
              {this.state.arrLink.length > 0 && <FlatList
                data={this.state.arrLink}
                renderItem={({ item, index }) =>
                  <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'black', width: 10, height: 10, borderRadius: 20, marginRight: 15 }} />
                    <View style={{ paddingRight: 15 }}>
                      <TextComponent text={item} numberOfLines={3} />
                    </View>
                  </View>
                }
                keyExtractor={(item, index) => (item + index).toString()}
              />}
              <View style={{ padding: 15 }}>
                <TextInput
                  placeholder={"Type note here"}
                  textAlignVertical={'center'}
                  style={{ flex: 1 }}
                  onChangeText={this.onChangeNote}
                  value={this.state.note}
                />
              </View>

            </View>
            
          </View>
          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
          <TouchableOpacity
                onPress={() => this.refs.modalGetLink.openModal()}
                style={{width: "30%", flexDirection: 'row', backgroundColor: global.primaryColor, justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 30, borderWidth: 2, padding: 10 }}>
                <TextComponent text={"Done"} style={{ paddingRight: 5, color: global.colorFF, fontSize: 20 }} />
              </TouchableOpacity>
          </View>
          <ModalAddLink
            ref={'modalGetLink'}
            styleModalPopupCustom={{ width: '95%', paddingLeft: 10, paddingRight: 10 }}
            onSubmmit={(link) => {
              // console.log('modalGetLink', link)
              this.setState({ arrLink: [...this.state.arrLink, link] })
            }
            }
          />
        </ScrollView>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
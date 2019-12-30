/**
 * Created by hieult on 11/6/17.
 */
import ModalComponent from "./Modal";
// import * as eventTypes from "../../../../redhotpie-shared-lib/constants/eventTypes";
// import { EventRegister } from 'react-native-event-listeners';//eslint-disable-line import/no-unresolved
import styles from "./styles";
// import stylesHome from '../../messengersInbox/styles';
// import ConversationItem from "../../messengersInbox/MessengersInboxItem";
// import Text from "../texts/Text";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as userActions from '../../../../redhotpie-shared-lib/actions/userActions';
// import * as conversationInboxAction from "../../../../redhotpie-shared-lib/actions/conversationInboxAction";
// import Images from "../../../../redhotpie-shared-lib/themes/Images";
// import * as utils from "../../../../redhotpie-shared-lib/functions/utils";
// // import I18n from 'react-native-i18n';
import ModalRefine from "./ModalRefine";
import HeaderRefineModal from "../../components/modules/HeaderRefineModal";
// import TooltipItem from '../tooltips/TooltipItem';
// import ButtonGroup from "../buttons/ButtonGroup";
import PropTypes from 'prop-types';
import FillterSortItem from "../modules/FilterMoreItem";
import IconTooltip from "./IconTooltip";
// import FooterRefineModal from "../../modules/FooterRefineModal/index";
// import ButtonOutline from "../buttons/ButtonOutline";
// import * as CONSTANTS from '../../../../redhotpie-shared-lib/constants/constants';
// import CheckBoxLineItem from "../../modules/CheckBoxLineItem";
// import FillterSortItem from "../../modules/FilterMoreItemSetting";
//import {ListView} from 'deprecated-react-native-listview';

//const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import React, { Component } from 'react';
import {
  View, Image, TextInput, TouchableOpacity, ScrollView, FlatList,

  TouchableHighlight,
  StyleSheet, Keyboard,
  UIManager, Platform,
  LayoutAnimation,
  PixelRatio,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  Linking,

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
import ModalAddLink from '../commons/ModalAddLink';
import { DocumentView, RNPdftron } from 'react-native-pdftron';
import SwitchBtn from '../modules/switches/SwitchButton';
import global from '../commons/_var'
import CheckBoxLineItem from '../modules/CheckBoxLineItem';
let selectedIndexs = [];

export default class SetupModal extends ModalRefine {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      swipeToClose: false,
      animationDuration: 100,
      swipeThreshold: 30,
      indexSelectAllmember: 0,
      indexSelectMatching: 0,
      indexDefaultFolder: 0,
      text: "",
      resultSearch: [],
      beginSearch: false,
      focus: false,
      notResult: false,
      matching: false,
      search: false,
      pageNumber: 1,
      timeOutselectOptionHasChange: 0,
      enableDiscuss: true,
      enableRollCall: false,
      enableTest: false,
      enableRemind: true,
      arrLink: [],
      text: '',
      selectTimeTest: null,
      note: ''
    };
    this.backdropOpacity = 0.5;
    this.closeModal = this.closeModal.bind(this);

  }
  componentDidMount() {
    //this.onOpenListener = EventRegister.addEventListener(eventTypes.SHOW_SEARCH_MODAL, this.openModal);
  }

  componentWillUnmount() {
    // EventRegister.removeEventListener(this.onOpenListener);
  }

  componentDidUpdate(prevProps, prevState) {
    return true;
  }

  openModal(data) {
    super.openModal();
  }

  onCloseModal() {
    clearTimeout();
    this.closeModal();
    super.onCloseModal();
  }

  closeModal() {
    return super.closeModal();
  }

  onStartRollCall = () => {
    this.setState({
      enableRollCall: true
    });
    this.props.onStartRollCall();
  }

  onStartTest = () => {
    this.setState({
      enableTest: true
    });
    this.props.onStartTest();
  }

  onNotifyLink = () => {

  }

  renderHeader() {
    return (
      <HeaderRefineModal
        fontSize={global.sizeP18}
        onClick={this.onNewClose}
        style={{}}
        heading={'Setup'}
      />

    );
  }

  renderItemMessage(item) {
    return (
      <View style={{}}>
        <FillterSortItem
          style={{ paddingBottom: 15, paddingTop: 15 }}
          divider={false}
          textLeft={item.title}
          styleLeftTextProperty={[{
            lineHeight: 17,
            // fontFamily: global.fontBold,
            fontWeight: 'bold',
            color: global.color64,
            fontSize: global.sizeP16,
            maxWidth: window.width * 0.6,
            flexWrap: "wrap",
            width: '100%'
          }, { maxWidth: 305 }]}
          textLeftSub={item.link}
          numberOfLinesTextSubLeft={2}
          itemRight={
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
              <IconTooltip
                style={{ paddingRight: 15 }}
                onPress={this.onDownLoadFile}
                textView={<TextComponent text={"Download"} style={{ textDecorationLine: 'underline', fontStyle: 'italic', }} />}
              />
              <IconTooltip
                onPress={() => {
                  this.refs.modalGetLink.openModal()
                }}
                textView={<TextComponent text={"Read Online"} style={{ textDecorationLine: 'underline', fontStyle: 'italic', }} />}
              />
            </View>
          }
          // hideRight
          disable
          customStyleLeftSubContainer={{ width: 305 }}
        />
      </View>
    );
  }

  renderContent() {
    const data = [
      {
        title: "software_engineering",
        link: "https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf"
      }
      ,
      {
        title: "softwaredesign",
        link: "https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf"
      }
      , {
        title: "software_engineering",
        link: "https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf"
      }
      ,
      {
        title: "softwaredesign",
        link: "https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf"
      },
      {
        title: "software_engineering",
        link: "https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf"
      }
      ,
      {
        title: "softwaredesign",
        link: "https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf"
      }
    ]
    const onSelectFilter = index => {
      this.setState({
        selectTimeTest: index,
      });
    };
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <FlatList
              ref={'flatList'}
              data={data}
              style={{marginBottom: 10, borderRadius: 10, paddingHorizontal: 15 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItemMessage(item)
              }
            /> */}
        <ScrollView style={{ backgroundColor: global.colorF3 }}>
          <View style={{ justifyContent: 'center', backgroundColor: global.color0B, paddingHorizontal: 15, minHeight: 100, paddingBottom: 15, }}>

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

            <View style={{ backgroundColor: 'white', borderRadius: 10, minHeight: 30 }}>
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
                  style={{ height: 40, paddingLeft: 15 }}
                  onChangeText={this.onChangeLink}
                  value={this.state.text}
                />
              </View>

            </View>
            <View style={{ paddingTop: 15, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={this.onNotifyLink}
                style={{ width: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 20, borderWidth: 2, padding: 10, backgroundColor: global.primaryColor }}>
                <TextComponent text={"Send link"} style={{ paddingRight: 5, color: global.purple, fontWeight: 'bold' }} />
                {/* <Image source={Themes.Images.btnPlus}/> */}
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, minHeight: 50, backgroundColor: global.colorFF }}>

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

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, minHeight: 50, }}>

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
                () => {
                  this.setState({
                    enableTest: true
                  })
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
                    this.onStartTest();
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
                    this.onStartTest();
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
                    this.onStartTest();
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
                this.onStartRollCall
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
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
            <TouchableOpacity
              onPress={() => this.refs.modalGetLink.openModal()}
              style={{ width: "30%", flexDirection: 'row', backgroundColor: global.primaryColor, justifyContent: 'center', alignItems: 'center', borderColor: global.grayColor, borderRadius: 30, borderWidth: 2, padding: 5 }}>
              <TextComponent text={"Done"} style={{ paddingRight: 5, color: global.colorFF, fontSize: 16 }} />
            </TouchableOpacity>
          </View>
          <ModalAddLink
            ref={'modalGetLink'}
            styleModalPopupCustom={{ width: '95%', paddingLeft: 10, paddingRight: 10 }}
            onSubmmit={(link) => {
              console.log('modalGetLink', link)
              this.setState({ arrLink: [...this.state.arrLink, link] })
            }
            }
          />
        </ScrollView>
      </View>
    );
  }

  renderBottom() {
    return null;
  }
}

SetupModal.proptypes = {
  dataCount: PropTypes.object,
  openFolderModal: PropTypes.func
};

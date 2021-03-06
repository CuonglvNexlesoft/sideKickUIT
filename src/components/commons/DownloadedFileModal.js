/**
 * Created by hieult on 11/6/17.
 */
import React, { Component } from "react";
import ModalComponent from "./Modal";
import { View, Image, TextInput, TouchableOpacity, Platform, Keyboard, ScrollView, FlatList } from "react-native";
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
import global from "../../components/commons/_var";
import TextComponent from "./Text";
import FillterSortItem from "../modules/FilterMoreItem";
import IconTooltip from "./IconTooltip";
// import FooterRefineModal from "../../modules/FooterRefineModal/index";
// import ButtonOutline from "../buttons/ButtonOutline";
// import * as CONSTANTS from '../../../../redhotpie-shared-lib/constants/constants';
// import CheckBoxLineItem from "../../modules/CheckBoxLineItem";
// import FillterSortItem from "../../modules/FilterMoreItemSetting";
//import {ListView} from 'deprecated-react-native-listview';

//const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let selectedIndexs = [];
import RNFS from 'react-native-fs';

export default class DownloadedFileModal extends ModalRefine {
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
      dataListDownloadedFile: []
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

  componentWillReceiveProps(nextProps, nextState){
    if(this.props.listDownloadedFile.length != nextProps.listDownloadedFile.length){
      this.setState({
        dataListDownloadedFile: nextProps.listDownloadedFile
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    return true;
  }

  openModal(data) {
    // console.log(this.props.listDownloadedFile, "\n", this.props.listDownloadedFile.sort())
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



  renderHeader() {
    return (
      <HeaderRefineModal
        fontSize={global.sizeP18}
        onClick={this.onNewClose}
        styleTitleContainer={{backgroundColor: global.lightBlue}}
        heading={'Recent files'}
      />

    );
  }

  onSelectFile=(item)=>{
    this.onNewClose();
    let path = item.path;
    this.props.onSelectFile && this.props.onSelectFile(path)
  }

  onRemoveFile = (item) => {
    console.log(item)
    this.setState({
      dataListDownloadedFile: this.state.dataListDownloadedFile.filter(e=> e.name !== item.name)
    })
    // this.onNewClose();
    let path = item.path;
    console.log(path)
    RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
      })
      // `unlink` will throw an error, if the item to unlink does not exist
      .catch((err) => {
        console.log(err.message);
      });
  }

  renderItemMessage(item) {
    let _name = item.name ? item.name.toString() : "Noname";
    let _time = item.ctime ? item.ctime.toString() : "None";
    return (
      <View style={{}}>
        <FillterSortItem
          style={{ paddingBottom: 15, paddingTop: 15 }}
          divider={false}
          textLeft={_name}
          styleLeftTextProperty={[{
            lineHeight: 17,
            // fontFamily: global.fontBold,
            fontWeight: 'bold',
            color: global.color64,
            fontSize: global.sizeP16,
            // maxWidth: window.width * 0.6,
            flexWrap: "wrap",
            width: 350
          }]}
          numberOfLinesTextLeft={2}
          textLeftSub={_time}
          numberOfLinesTextSubLeft={2}
          itemRight={
            <View style={{ alignItems: 'center',}}>
              <IconTooltip
                onPress={this.onRemoveFile.bind(this, item)}
                textView={<TextComponent text={"X"} style={{ }} />}
              />
            </View>
          }
          onClickAction={this.onSelectFile.bind(this, item)}
          hideRight
          // disable
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
    // console.log(this.props.listDownloadedFile)
    if(this.props.listDownloadedFile.length === 0) return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <FlatList
              ref={'flatList'}
              data={this.props.listDownloadedFile}
              style={{marginBottom: 10, borderRadius: 10, paddingHorizontal: 15 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItemMessage(item)
              }
            /> */}
      </View>
    );
    return (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
              ref={'flatList'}
              data={this.state.dataListDownloadedFile}
              style={{marginBottom: 10, borderRadius: 10, paddingHorizontal: 15 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItemMessage(item)
              }
            />
          </View>
    );
  }

  renderBottom() {
    return null;
  }
}

DownloadedFileModal.proptypes = {
  dataCount: PropTypes.object,
  openFolderModal: PropTypes.func
};

DownloadedFileModal.defaultProps = {
  listDownloadedFile: []
};
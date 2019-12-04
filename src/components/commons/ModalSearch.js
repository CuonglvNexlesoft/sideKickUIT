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
// import FooterRefineModal from "../../modules/FooterRefineModal/index";
// import ButtonOutline from "../buttons/ButtonOutline";
// import * as CONSTANTS from '../../../../redhotpie-shared-lib/constants/constants';
// import CheckBoxLineItem from "../../modules/CheckBoxLineItem";
// import FillterSortItem from "../../modules/FilterMoreItemSetting";
//import {ListView} from 'deprecated-react-native-listview';

//const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let selectedIndexs = [];

export default class SearchModal extends ModalRefine {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
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
            timeOutselectOptionHasChange: 0
        };
        this.backdropOpacity = 0.95;
        // this.heightScrollView = 0;
        // this.isLoadMore = false;
        // this.selectOption = this.selectOption.bind(this);
        // this.selectOptionMatching = this.selectOptionMatching.bind(this);
        // this.renderHeader = this.renderHeader.bind(this);
        // //this.renderResult = this.renderResult.bind(this);
        // this.renderSearchTab = this.renderSearchTab.bind(this);
        // this.renderButtonGroup = this.renderButtonGroup.bind(this);
        // this.onChangeText = this.onChangeText.bind(this);
        // this.renderSeparator = this.renderSeparator.bind(this);
        // this.onFocusInput = this.onFocusInput.bind(this);
        // this.returnSelectOption = this.returnSelectOption.bind(this);
        // this.clearKeySearch = this.clearKeySearch.bind(this);
        // this._onHandleResetClick = this._onHandleResetClick.bind(this);
        // this._onHandleDoneClick = this._onHandleDoneClick.bind(this);
        // this.reset = this.reset.bind(this);
        // this.openFolderModal = this.openFolderModal.bind(this);
        // this.onScroll = this.onScroll.bind(this);
        // this.onLayoutScrollView = this.onLayoutScrollView.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.openModal = this.openModal.bind(this);
        // this.onCloseModal = this.onCloseModal.bind(this);
        // this.onBlurInput = this.onBlurInput.bind(this);
        // this.openSearchUserTab = this.openSearchUserTab.bind(this);
        // this.waitChangeText = null;
    }
    componentDidMount() {
        //this.onOpenListener = EventRegister.addEventListener(eventTypes.SHOW_SEARCH_MODAL, this.openModal);
    }

    componentWillUnmount() {
        // EventRegister.removeEventListener(this.onOpenListener);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (!utils.arraysShallowEqual(this.state.resultSearch, prevState.resultSearch)) {
        //     this.isLoadMore = false;
        // }

        return true;
    }

    openModal(data) {
        //let isSearch = this.props.search.isSearched;
        // let indexDefaultFolder = this.props.userInfo.messenger.defaultFolder === CONSTANTS.DEFAULT_FOLDER_OPTION.MATCHING ? 1 : 0;

        // this.setState({
        //     text: this.props.search.keyword,
        //     indexSelect: indexDefaultFolder,
        //     indexSelectAllmember: this.props.search.secondaryIndex,
        //     indexSelectMatching: this.props.search.primaryIndex,
        //     indexDefaultFolder: indexDefaultFolder
        // });
        super.openModal();
    }

    // onFocusInput() {
    //     this.setState({
    //         beginSearch: true,
    //         focus: true,
    //     });
    //     this.getConversation(this.state.text);
    // }

    // onBlurInput() {
    //     this.setState({
    //         focus: false,
    //     });
    // }

    onCloseModal() {
        clearTimeout();
        this.closeModal();
        super.onCloseModal();
    }

    closeModal() {
        return super.closeModal();
    }

    // onNewClose() {
    //     return super.onNewClose();
    // }

    // openFolderModal() {
    //     this.onNewClose();
    //     setTimeout(() => {
    //         if (this.props.openFolderModal) this.props.openFolderModal();
    //     }, 500);
    // }

    // openSearchUserTab() {
    //     this.setState({
    //         indexSelect: 2
    //     });
    // }

    // selectOption(index) {
    //     this.setState({ indexSelectAllmember: index, indexSelectMatching: 0 },
    //         () => setTimeout(this._onHandleDoneClick, 500)
    //     );
    // }

    // selectOptionMatching(index) {
    //     this.setState({
    //         indexSelectAllmember: index,
    //         indexSelectMatching: 1
    //     },
    //         () => setTimeout(this._onHandleDoneClick, 500)
    //     );
    // }

    // onLayoutScrollView(event) {

    //     if (this.heightScrollView === 0 && event.nativeEvent.layout.height != undefined) {

    //         this.heightScrollView = event.nativeEvent.layout.height;
    //     }
    // }

    // onScroll(e) {
    //     // let windowHeight = Dimensions.get('window').height,
    //     let addHeightforAndroid = Platform.OS == 'android' ? 1 : 0;
    //     let windowHeight = this.heightScrollView + addHeightforAndroid,
    //         height = e.nativeEvent.contentSize.height,
    //         offset = e.nativeEvent.contentOffset.y;

    //     if (windowHeight + offset >= height) {
    //         if (
    //             !this.isLoadMore

    //         ) {
    //             this.isLoadMore = true;
    //             let newPageNumber = this.state.pageNumber + 1;
    //             let searchCriteria = this.props.search;
    //             let conversations = utils.filterConversations(searchCriteria, this.props.data);
    //             let showConversations = conversations.splice(0, newPageNumber * CONSTANTS.PAGING_DEFAULT.PAGE_SIZE_CONVERSATION);
    //             let { dataPinned, data } = utils.separateConversation(showConversations);
    //             let currentItemCount =
    //                 newPageNumber * CONSTANTS.PAGING_DEFAULT.PAGE_SIZE_CONVERSATION + dataPinned.length;
    //             let photoData = conversations.splice(
    //                 currentItemCount,
    //                 CONSTANTS.PAGING_DEFAULT.PAGE_SIZE_CONVERSATION
    //             );

    //             let conversationsList = [...data];
    //             let conversationsPinned = [...dataPinned];
    //             let resultSearch = conversationsPinned.concat(conversationsList);
    //             let userIDs = [];
    //             for (let i = 0; i <= photoData.length; i++) {
    //                 if (photoData[i]) userIDs.push(photoData[i].peerVcard.userId);
    //             }

    //             if (userIDs != null && userIDs.length > 0) {
    //                 this.props.userActions.getMainPhotos(userIDs).then(res => {
    //                     if (res.success) {
    //                         this.setState({ pageNumber: newPageNumber, resultSearch: resultSearch });

    //                     } else {
    //                         this.props.userActions.getMainPhotosSuccess([], '');
    //                         this.setState({ pageNumber: newPageNumber, resultSearch: resultSearch });
    //                     }
    //                 }
    //                 );
    //             } else {
    //                 this.setState({ pageNumber: newPageNumber, resultSearch: resultSearch });
    //             }
    //         }
    //     }
    // }

    // renderSearchTab() {
    //     let haveText = this.state.text !== "";
    //     let styleRadius = null;
    //     if (!haveText) {
    //         styleRadius = stylesHome.noRadius;
    //     }
    //     return (
    //         <View>

    //             {/* textInput Search */}
    //             <View style={[stylesHome.showAllSearch, styleRadius]}>
    //                 <View style={[stylesHome.rowInput]}>
    //                     {/* <View style={stylesHome.icSearchModal}>
    //           <Image
    //             resizeMode={"cover"}
    //             source={Images.icSearchModal}
    //           />
    //         </View> */}

    //                     <TextInput
    //                         ref={input => {
    //                             this.textInput = input;
    //                         }}
    //                         key={"textInput"}
    //                         style={[stylesHome.boxInputModal]}
    //                         onChangeText={this.onChangeText}
    //                         //defaultValue={this.state.text}
    //                         value={this.state.text.toString()}
    //                         autoFocus
    //                         underlineColorAndroid={"rgba(0,0,0,0)"}
    //                         onFocus={this.onFocusInput}
    //                         onBlur={this.onBlurInput}
    //                         placeholder={I18n.t('Search')}
    //                         placeholderTextColor={"#BBBBBB"}
    //                     />

    //                     {haveText ?
    //                         <TouchableOpacity style={stylesHome.icRemoveTextModal}
    //                             onPress={this.clearKeySearch}
    //                         >
    //                             <Image
    //                                 resizeMode={"cover"}
    //                                 source={Images.icCross}
    //                             />
    //                         </TouchableOpacity>
    //                         : null
    //                     }

    //                 </View>
    //                 {/* {
    //         haveText ? */}
    //                 <TouchableOpacity style={stylesHome.textCancelWrapper}
    //                     onPress={this.returnSelectOption}
    //                 >
    //                     <Text style={stylesHome.textCancel} text={I18n.t('Cancel')} />
    //                 </TouchableOpacity>
    //                 {/* :
    //           null
    //       } */}


    //             </View>
    //         </View>
    //     );

    // }

    // renderOption() {
    //     const { dataCount, folders } = this.props;
    //     // let { resultSearch } = this.state;
    //     // if (this.state.beginSearch && this.state.indexSelect === 2) {

    //     //     if (resultSearch.length === 0 && this.state.text != "") {
    //     //         return (
    //     //             <View>
    //     //                 <Text text={I18n.t('NoResult')} />
    //     //             </View>);
    //     //     }
    //     //     return (

    //     //         <FlatList
    //     //             keyboardShouldPersistTaps="handled"
    //     //             onScroll={this.onScroll}
    //     //             style={stylesHome.listResultSearch}
    //     //             data={resultSearch}
    //     //             renderItem={this.renderResult}
    //     //             //renderSeparator={this.renderSeparator}
    //     //             onScrollBeginDrag={() => Keyboard.dismiss()}
    //     //         />
    //     //     );
    //     // }
    //     if (this.state.indexDefaultFolder === 1) {
    //         let indexSelectMatching = this.state.indexSelectMatching == 1 ?
    //             this.state.indexSelectAllmember
    //             :
    //             this.state.indexSelectAllmember === 4 ? 4 : -1;
    //         return (
    //             <View>

    //                 {/* <TooltipItem text={I18n.t('AllConversations') + " (" + dataCount.allConversation + ")"}
    //         indexSelect={this.state.indexSelectMatching}                                
    //         index={0}
    //         onPress={this.onSelect}
    //       />
    //       <View style={stylesHome.dividerRowModal} />
    //       <TooltipItem text={I18n.t('ConversationWithMatching_') + " (" + dataCount.matching + ")"}
    //         indexSelect={this.state.indexSelectMatching}
    //         index={1}
    //         onPress={this.onSelect}
    //       /> */}
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectMatching === -1 ? true : false}
    //                     onClickAction={
    //                         this.selectOption.bind(this, -1)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('AllConversations') + " (" + dataCount.allConversation + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesAllConversations')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     customDividerStyle={{ height: 10 }}
    //                     isCheck={indexSelectMatching === 0 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, 0)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('AllMatchingConversations') + " (" + dataCount.matching + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesAllMatchingConversations')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectMatching === 1 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, 1)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('MessagesIHaveNotRead') + " (" + dataCount.matchingUnread + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesMessagesIHaveNotRead')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectMatching === 2 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, 2)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('MessagesIHaveNotRepliedTo') + " (" + dataCount.matchingUnRep + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesMessagesIHaveNotRepliedTo')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectMatching === 3 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, 3)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t("MessagesWhichNotReplied") + " (" + dataCount.matchingSent + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t("DesMessagesWhichNotReplied")}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     customDividerStyle={{ height: 10 }}
    //                     isCheck={indexSelectMatching === 4 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, 4)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t("ConversationNonMatching") + " (" + dataCount.nonMatching + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t("DesConversationNonMatching")}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     type={"optionModalSearch"}
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={false}
    //                     onClickAction={
    //                         this.openFolderModal
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('Folder.Folders') + " (" + folders.length + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('Folder.SubDesFilterModalMobile')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 {/* <TooltipItem text={I18n.t('AllMatchingConversations') + " (" + dataCount.matching + ")"}
    //                     indexSelect={indexSelectMatching}
    //                     index={0}
    //                     onPress={this.selectOptionMatching}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t('MatchingMessagesIHaveNotRead') + " (" + dataCount.matchingUnread + ")"}
    //                     indexSelect={indexSelectMatching}
    //                     index={1}
    //                     onPress={this.selectOptionMatching}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem
    //                     text={I18n.t('MatchingMessagesIHaveNotRepliedTo') + " (" + dataCount.matchingUnRep + ")"}
    //                     indexSelect={indexSelectMatching}
    //                     index={2}
    //                     onPress={this.selectOptionMatching}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t("MessagesWhichNotReplied") + " (" + dataCount.matchingSent + ")"}
    //                     indexSelect={indexSelectMatching}
    //                     index={3}
    //                     onPress={this.selectOptionMatching}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t('Folder.Folders') + " (" + folders.length + ")"}
    //                     indexSelect={4}
    //                     index={4}
    //                     onPress={this.openFolderModal}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} /> */}
    //                 {/* <TooltipItem text={I18n.t('SearchModal.SearchByUsername')}
    //                              indexSelect={indexSelectMatching}
    //                              index={5}
    //                              onPress={this.openSearchUserTab}
    //                 />
    //                 <View style={stylesHome.dividerRowModal}/> */}

    //             </View>
    //         );
    //     }
    //     if (this.state.indexDefaultFolder === 0) {
    //         let indexSelectAll = this.state.indexSelectMatching == 0 ? this.state.indexSelectAllmember : -1;
    //         return (
    //             <View>
    //                 {/* Option */}
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectAll === 0 ? true : false}
    //                     onClickAction={
    //                         this.selectOption.bind(this, 0)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('AllConversations') + " (" + dataCount.allConversation + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesAllConversations')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     customDividerStyle={{ height: 10 }}
    //                     isCheck={indexSelectAll === -1 ? true : false}
    //                     onClickAction={
    //                         this.selectOptionMatching.bind(this, -1)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('AllMatchingConversations') + " (" + dataCount.matching + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesAllMatchingConversations')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectAll === 1 ? true : false}
    //                     onClickAction={
    //                         this.selectOption.bind(this, 1)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('MessagesIHaveNotRead') + " (" + dataCount.unReadCount + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesMessagesIHaveNotRead')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={indexSelectAll === 2 ? true : false}
    //                     onClickAction={
    //                         this.selectOption.bind(this, 2)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('MessagesIHaveNotRepliedTo') + " (" + dataCount.unRep + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('DesMessagesIHaveNotRepliedTo')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     customDividerStyle={{ height: 10 }}
    //                     isCheck={indexSelectAll === 3 ? true : false}
    //                     onClickAction={
    //                         this.selectOption.bind(this, 3)
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t("MessagesWhichNotReplied") + " (" + dataCount.sent + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t("DesMessagesWhichNotReplied")}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 <CheckBoxLineItem
    //                     type={"optionModalSearch"}
    //                     minHeight={0}
    //                     styleRadioSelected={{ marginLeft: 0, justifyContent: 'flex-end', paddingRight: 15 }}
    //                     divider
    //                     isCheck={false}
    //                     onClickAction={
    //                         this.openFolderModal
    //                     }
    //                     itemLeft={
    //                         <FillterSortItem
    //                             style={styles.searchOption}
    //                             divider={false}
    //                             textLeft={I18n.t('Folder.Folders') + " (" + folders.length + ")"}
    //                             styleLeftTextProperty={[styles.LeftTextProperty, { maxWidth: 305 }]}
    //                             textLeftSub={I18n.t('Folder.SubDesFilterModalMobile')}
    //                             numberOfLinesTextSubLeft={2}
    //                             textRight={null}
    //                             hideRight
    //                             disable
    //                             customStyleLeftSubContainer={{ width: 305, paddingBottom: 5 }}
    //                         />
    //                     }
    //                 />
    //                 {/* <TooltipItem text={I18n.t('AllConversations') + " (" + dataCount.allConversation + ")"}
    //                     indexSelect={indexSelectAll}
    //                     index={0}
    //                     onPress={this.selectOption}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t('MessagesIHaveNotRead') + " (" + dataCount.unReadCount + ")"}
    //                     indexSelect={indexSelectAll}
    //                     index={1}
    //                     onPress={this.selectOption}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t('MessagesIHaveNotRepliedTo') + " (" + dataCount.unRep + ")"}
    //                     indexSelect={indexSelectAll}
    //                     index={2}
    //                     onPress={this.selectOption}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t("MessagesWhichNotReplied") + " (" + dataCount.sent + ")"}
    //                     indexSelect={indexSelectAll}
    //                     index={3}
    //                     onPress={this.selectOption}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} />
    //                 <TooltipItem text={I18n.t('Folder.Folders') + " (" + folders.length + ")"}
    //                     indexSelect={4}
    //                     index={4}
    //                     onPress={this.openFolderModal}
    //                 />
    //                 <View style={stylesHome.dividerRowModal} /> */}
    //                 {/* <TooltipItem text={I18n.t('SearchModal.SearchByUsername')}
    //                              indexSelect={indexSelectAll}
    //                              index={5}
    //                              onPress={this.openSearchUserTab}
    //                 />
    //                 <View style={stylesHome.dividerRowModal}/> */}
    //             </View>
    //         );
    //     } else {
    //         return <View />;
    //     }
    // }

    // renderSeparator(sectionId, rowId) {

    //     if (rowId === this.state.resultSearch.length - 1) {
    //         return null;
    //     }

    //     return (
    //         <View style={stylesHome.dividerRowItem} key={rowId} />
    //     );
    // }

    // pressItem(rowData) {
    //     this.closeModal();
    //     this.props.conversationInboxAction.selectPeerVcard(rowData.peerVcard, this.props.userInfo, null, rowData.chatted);
    // }


    // renderResult = ({ item, index }) => {
    //     if (item.message && item.message.createdAt === null) return null;
    //     return (
    //         <View style={[stylesHome.rowConversationsItem]}>
    //             <ConversationItem
    //                 user={item.peerVcard} conversation={item}
    //                 onItemPress={() => this.pressItem(item)}
    //                 onNavigate={this.props.onNavigate}
    //             />
    //         </View>
    //     );
    // }

    // returnSelectOption() {
    //     this.setState({
    //         beginSearch: false,
    //         indexSelect: 0
    //     });

    // }

    // clearKeySearch() {
    //     this.onChangeText("");
    //     //this.textInput.clear();
    // }

    // reset() {
    //     this.setState({
    //         text: "",
    //         beginSearch: false,
    //         resultSearch: [],
    //         indexSelect: 0,
    //     });
    // }

    renderHeader() {
        return (
            <HeaderRefineModal
                fontSize={global.sizeP18}
                onClick={this.onNewClose}
                style={{ }}

            />

        );
    }

    // renderButtonGroup() {
    //     const { dataCount } = this.props;
    //     // let disableAllMembers = this.props.userInfo.messenger.defaultFolder === CONSTANTS.DEFAULT_FOLDER_OPTION.MATCHING ? true : false;
    //     const GroupButtonTittleOptions = [
    //         {
    //             label: I18n.t("SearchModal.AllMembers") + " (" + dataCount.unReadCount + ")",
    //             value: ''
    //         },
    //         {
    //             label: I18n.t("SearchModal.Matching") + " (" + dataCount.matchingUnread + ")",
    //             value: ''
    //         },
    //         // {
    //         //   label: I18n.t("SearchModal.Username"),
    //         //   value: ''
    //         // }
    //     ];

    //     const onSelectFilter = index => {


    //         switch (index) {
    //             case 0:
    //                 this.setState({
    //                     indexSelect: 0
    //                 });
    //                 break;
    //             case 1:
    //                 this.setState({
    //                     indexSelect: 1
    //                 });

    //                 break;
    //             // case 2: this.setState({
    //             //   indexSelect: 2
    //             // });

    //             //   break;
    //         }
    //     };
    //     return (
    //         <View style={stylesHome.buttonGroupContainer}>
    //             <ButtonGroup
    //                 isConversationFiler
    //                 onClick={onSelectFilter}
    //                 data={GroupButtonTittleOptions}
    //                 selectedIndexs={[this.state.indexSelect]}
    //             // isDisableFirstButton={disableAllMembers}
    //             />

    //         </View>
    //     );
    // }

    // renderShowMeText() {
    //     return (
    //         <View style={stylesHome.showMe}>
    //             <Text style={stylesHome.textShowMe} text={I18n.t('ShowMe')} />
    //             {this.renderButtonGroup()}
    //         </View>
    //     );
    // }

    // getConversation(keyword) {
    //     //let result = utils.searchConversations(keyword, this.state.indexSelect);
    //     let searchCriteria = { keyword: keyword, primaryIndex: 0, secondaryIndex: 0 };
    //     let conversations = utils.filterConversations(searchCriteria, this.props.data);
    //     let showConversations = conversations.splice(0, this.state.pageNumber * CONSTANTS.PAGING_DEFAULT.PAGE_SIZE_CONVERSATION);
    //     let photoData = conversations.splice(0, (this.state.pageNumber + 1) * CONSTANTS.PAGING_DEFAULT.PAGE_SIZE_CONVERSATION);
    //     //let { dataPinned, data } = utils.separateConversation(showConversations);

    //     let resultSearch = showConversations;

    //     let userIDs = [];
    //     for (let i = 0; i <= photoData.length; i++) {
    //         if (photoData[i]) userIDs.push(photoData[i].peerVcard.userId);
    //     }
    //     if (userIDs != null && userIDs.length > 0) {
    //         this.props.userActions.getMainPhotos(userIDs).then(res => {
    //             if (res.success) {
    //                 this.setState({ pageNumber: 1, resultSearch: resultSearch });

    //             } else {
    //                 this.props.userActions.getMainPhotosSuccess([], '');
    //                 this.setState({ pageNumber: 1, resultSearch: resultSearch });

    //             }
    //         }
    //         );
    //     } else {
    //         this.setState({ pageNumber: 1, resultSearch: resultSearch });

    //     }
    // }

    // _onHandleResetClick() {
    //     let defaultFolder = this.props.userInfo.messenger.defaultFolder === CONSTANTS.DEFAULT_FOLDER_OPTION.MATCHING;
    //     this.setState({ indexSelectAllmember: 0, indexSelectMatching: defaultFolder ? 1 : 0 });
    //     this.props.conversationInboxAction.filterConversations(this.props.search.keyword, defaultFolder ? 1 : 0, 0, true, defaultFolder);
    //     this.closeModal();
    // }

    // _onHandleDoneClick() {
    //     let _indexSelectMatching = this.state.indexSelectMatching;
    //     let _indexSelectAllmember = this.state.indexSelectAllmember;
    //     //OPEN filter non-matching in OptionMatching
    //     if (this.state.indexSelectMatching === 1 && this.state.indexSelectAllmember === 4) {
    //         _indexSelectMatching = 0
    //     }
    //     if (this.state.indexSelectAllmember === -1) {
    //         _indexSelectAllmember = 0
    //     }
    //     //CLOSE filter non-matching in OptionMatching
    //     let defaultFolder = this.props.userInfo.messenger.defaultFolder === CONSTANTS.DEFAULT_FOLDER_OPTION.MATCHING;
    //     this.props.conversationInboxAction.filterConversations(this.props.search.keyword, _indexSelectMatching, _indexSelectAllmember, true, defaultFolder);
    //     this.closeModal();
    // }

    // onChangeText(text) {
    //     this.setState({ text });
    //     clearTimeout(this.waitChangeText);
    //     this.state.text = text;
    //     this.waitChangeText = setTimeout(() => {
    //         this.getConversation(text);
    //     }, 200);

    //     // this.props.conversationInboxAction.filterConversations(text, this.props.search.primaryIndex, this.props.search.secondaryIndex);
    // }

    renderContent() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollView>
                    <View style={{flex: 1, backgroundColor: 'red'}}>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderBottom() {
        return null;
    }
}

SearchModal.proptypes = {
    dataCount: PropTypes.object,
    openFolderModal: PropTypes.func
};

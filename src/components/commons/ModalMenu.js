/**
 * Created by hieult on 11/1/17.
 */
import React, { Component } from "react";
import { View, Alert, Linking } from "react-native";
import ModalDropDown from "./ModalDropDown";
import SeparatorLineList from "../commons/SeparatorLineList";
import stylesCommon from "./styles";
import PropTypes from 'prop-types';
import Button from "./ButtonRHP";
import ProfileOptionItem from "./ProfileOptionItem";
// import * as commonUtils from "../../../utils/commonUtils";
// import global from '../../../styles/_var';


export default class ModalMenu extends ModalDropDown {

    constructor(props) {
        super(props);
        // console.disableYellowBox = true;
        this.unpinOrPinConversation = this.unpinOrPinConversation.bind(this);
        //this.deleteConversation = this.deleteConversation.bind(this);
        this.reportConversation = this.reportConversation.bind(this);
        this.pressDeleteConversation = this.pressDeleteConversation.bind(this);
        this.pressAddDeleteFolder = this.pressAddDeleteFolder.bind(this);
        this.showModal = this.showModal.bind(this);
        this.backdropOpacity = 0.5;
        this.onCloseModal = this.onCloseModal.bind(this);
        this.pressBlockUser = this.pressBlockUser.bind(this);
        //this.conversationInfor = null;
    }

    componentDidMount() {
        //this.onShow = EventRegister.addEventListener(eventTypes.SHOW_CONVERSATION_OPTION_MODAL, this.showModal);

    }

    showModal(data){
        //this.conversationInfor = data.conversationInfor;
        this.openModal();
    }

    onCloseModal(){
        clearTimeout();
        this.closeModal();
        super.onCloseModal();
    }

    onNewClose() {
        return super.onNewClose();
    }

    componentWillUnmount() {
        //EventRegister.removeEventListener(this.onShow);
    }

    pressDeleteConversation() {
        // this.closeModal().then(
        //     () => setTimeout(() => {
        //         // commonUtils.sendEvtMessage({
        //         //     from: "ModalConversationMenu",
        //         //     eventType: eventTypes.PRESS_DELETE_CONVERSATION,
        //         //     data: this.conversationInfor
        //         // });
        //         if(this.props.onOpenModalDeleteConversation) this.props.onOpenModalDeleteConversation();
        //     }, 500)
        // );
        this.onNewClose();
        setTimeout(() => {
            if(this.props.onOpenModalDeleteConversation) this.props.onOpenModalDeleteConversation();
        }, 500)
    }

    pressBlockUser(){
        // this.closeModal().then(()=>{
        //     commonUtils.sendEvtMessage({
        //         from: "ModalConversationMenu",
        //         eventType: eventTypes.PRESS_BLOCK_USER,
        //         data: {id: this.props.selectedPeerVcard.userId}
        //     });
        // });
        // this.onNewClose();
        // setTimeout(() => {
        //     commonUtils.sendEvtMessage({
        //         from: "ModalConversationMenu",
        //         eventType: eventTypes.PRESS_BLOCK_USER,
        //         data: {id: this.props.selectedPeerVcard.userId}
        //     });
        // }, 500)
    }

    pressAddDeleteFolder() {
        // this.closeModal().then(() => { this.props.onAddDeleteFolder();});
        this.onNewClose();
        setTimeout(() => {
            this.props.onAddDeleteFolder();
        }, 500)
    }

    // deleteConversation() {
    //     // let params = {
    //     //   conversationId : this.props.conversation.id,
    //     //   cb : () =>{
    //     //     this.closeModal();
    //     //     this.props.onDeleteConversation();
    //     //   }
    //     // };
    //     // this.props.conversationDetailAction.deleteConversation(params);
    //     //this.props.conversationDetailAction.updateModalDelete(true);
    // }

    reportConversation() {
        // Linking.openURL(config.EXTERNAL_LINKS.REPORT_CONVERSATION);
        // let url = config.EXTERNAL_LINKS.REPORT_CONVERSATION_APP.replace('{userName}', this.props.selectedPeerVcard.displayName).replace('{userId}', this.props.selectedPeerVcard.userId);
        // Linking.openURL(url);
        //this.closeModal();
        // setTimeout( () => {
        //   commonUtils.sendEvtMessage({from :"ModalConversationMenu", eventType :  eventTypes.SHOW_REPORT_MODAL, data :  {}} );
        // },500);
        //this.closeModal().then(() => this.props.onPressReport());
        this.onNewClose();
        setTimeout(() => {
            this.props.onPressReport();
        }, 500)
    }

    unpinOrPinConversation() {
        let data = this.props.selectedPeerVcard;
        if (data) {
            let params = {
                pinned: !this.props.pinned,
                xmppId: data.xmppId,
            };

            this.props.conversationDetailAction.pinOrUnpinConversation(params);
            // .then((res) => {
            //     this.closeModal();
            // });
            this.onNewClose();
        }

    }

    isMaxPin() {
        let all = [...this.props.conversations.filter(e => {
            return e.pinned;
        })];
        return all.length >= config.APP_SETTINGS.MAXIMUM_PIN_CONVERSATION;
    }

    renderContent() {
        let data = this.props.conversation;
        let textUnpin = {
            title: 'adsadasdas',
            description: 'sadsadasda'
        };

        let textLimit = "";
        const { disabled } = this.props;
        return (
            // {/*<View style={stylesCommon.contentProfileModal}>*/}
            <View style={stylesCommon.conversationModal}>
                <SeparatorLineList>

                    <ProfileOptionItem
                        title={textUnpin.title}
                        subText={textUnpin.description}
                        titleLast={textLimit}
                        limitedPinTitle={'I18n.t("LimitPin")'}
                    />
                    <ProfileOptionItem
                        title={"I18n.t('Folder.AddToFolder')"}
                        subText={"I18n.t('Folder.AddACopyOfThisConversationToAFolder')"}
                        onPress={this.pressAddDeleteFolder}
                        disabled = {disabled}   
                    />
                    <ProfileOptionItem
                        title={"I18n.t('DeleteConversation')"}
                        subText={"I18n.t('ThisWillRemoveTheConversation_')"}
                        onPress={this.pressDeleteConversation}
                        disabled = {disabled}
                    />

                </SeparatorLineList>
            </View>
            // </View>
        );
    }

    renderBottomButton() {
        return (
            <Button text={"Cancel"} size={"large"} color={"white"} onPress={this.pressBottomButton}
                // styleText={{
                //     fontFamily: global.fontBold,
                //     color: global.color33,
                //     fontSize: global.sizeP16
                // }}
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 8,
                    height: 50,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                }}

            />
        );
    }

    pressBottomButton() {
        this.onNewClose();
    }
}

ModalMenu.propTypes = {
    onDeleteConversation: PropTypes.func.isRequired,
    selectedPeerVcard: PropTypes.object,
};


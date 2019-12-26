import React, { Component } from "react";
import { RefreshControl, TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from "react-native";
import io from "socket.io-client";
import ModalInput from "../commons/ModalInput";
import { Actions, ActionConst } from "react-native-router-flux";
import ScreenName from '../../constants/ScreenName';
import ChatRoomCardItem from "../modules/ChatRoomCardItem";
import IconButton from "../commons/IconButton";
import { Metrics, Colors, Images } from '../../themes';
import FastImage from 'react-native-fast-image';
import { SwipeListView } from 'react-native-swipe-list-view';
import global from '../commons/_var'
import TextComponent from "../commons/Text";
import SearchModal from "../commons/ModalSearch";
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window')
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Strings from '../../constants/Strings';
export default class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            index: 0,
            routes: [
                { key: "0", title: Strings.daa.toUpperCase() },
                { key: "1", title: Strings.course.toUpperCase() },
            ],
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
        // console.log('aaaaa', this.props.user)

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
        if (this.refs.searchModal) this.refs.searchModal.openModal();
        // Actions[ScreenName.DETAIL]({ class: item })
    }

    hideSpinner = () => {
        this.setState({ visible: false });
    }

    renderRow(item) {
        return (
            <View style={{ paddingBottom: 15 }}>
                <TouchableOpacity
                    onPress={this.onPressNext.bind(this, item)}
                    activeOpacity={1}
                    style={{ borderWidth: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FastImage
                            //source={{ uri: this.state.avatarUrl, priority: FastImage.priority.normal }}
                            style={{ width: '25%', height: '90%', borderRadius: 5, padding: 10, }}
                            source={{ uri: item.coverUrl }}
                        />
                        <View style={{ padding: 10, paddingLeft: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.name}>Class:</Text>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.name}>GVHD:</Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ width: '100%', height: 1, backgroundColor: 'black' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton nameIcon={Images.icCommentHomeStream} iconSize={{ width: 25, height: 25 }} />
                            <Text style={styles.email}>1 comment</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton nameIcon={Images.icLikesHomeStream} iconSize={{ width: 25, height: 25 }} />
                            <Text style={styles.email}>1 Follow</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    renderRowHide = (item) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 15 }}>
                {/* <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#979797',
                    backgroundColor: '#D8D8D8',
                    width: 80,
                }}
                    onPress={() => {
                        
                    }}
                >
                    <IconButton
                        nameIcon={Images.icBlockSwipeCard}
                        disabled
                    />
                    <Text
                        // text={I18n.t("Btn.Block")}
                        color={global.color33}
                        // fontFamily={global.fontSemiBold}
                        size={global.sizeP14}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#979797',
                    backgroundColor: global.colorRed,
                    width: 80,
                    marginLeft: 5
                }}
                    onPress={() => {
                        // this.refs.modalDeleteConversation.showModal(conversationItem, conversationItem.message.id);
                    }}
                >
                    <IconButton
                        nameIcon={Images.icDeleteSwipeCard}
                        disabled
                    />
                    <TextComponent
                        text={"Delete"}
                        color={global.colorFF}
                        // fontFamily={global.fontSemiBold}
                        size={global.sizeP14}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderLoadingView() {
        return (
            <ActivityIndicator
                animating={this.state.visible}
                color='#bc2b78'
                size="large"
                style={styles.activityIndicator}
                hidesWhenStopped={true}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TabView
                    navigationState={this.state}
                    renderScene={({ route, jumpTo }) => {
                        return (
                            <WebView
                                onLoad={this.hideSpinner}
                                style={{ flex: 1 }}
                                source={{ uri: route.key == "0" ? 'https://daa.uit.edu.vn/thongbaochinhquy' : 'https://courses.uit.edu.vn/' }}
                            />
                        );

                    }
                    }
                    onIndexChange={index => {
                        this.setState({ index: index })
                    }
                    }
                    initialLayout={{ width: width, height: 0 }}
                    // getLabelText={({ route }) => route.title}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            tabStyle={{}} // here
                            renderLabel={({ route, focused, color }) => {
                                return (
                                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                                        {route.title}
                                    </Text>
                                )
                            }
                            }
                        />}

                />
                {/* <WebView
                    onLoad={this.hideSpinner}
                    style={{ flex: 1 }}
                    source={{ uri: 'https://daa.uit.edu.vn/thongbaochinhquy' }}
                /> */}
                {this.state.visible && (
                    <ActivityIndicator
                        style={{ position: "absolute", top: height * 0.4, left: width / 2 }}
                        size="large"
                    />
                )}
                {/* <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => this.onOpendCreateForm()}>
                    <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.name}>Add class</Text>
                    </View>
                </TouchableOpacity> */}
                {/* <SwipeListView
                    disableRightSwipe
                    rightOpenValue={-80}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={null}
                        />
                    }
                    data={this.state.users}
                    extraData={this.state}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        this.renderRow(item)
                    }
                    renderHiddenItem={({ item }) =>
                        this.renderRowHide(item)
                    }
                    keyExtractor={item => item.email}
                /> */}
                <ModalInput
                    ref={'modalInput'}
                    styleModalPopupCustom={{ width: '95%', paddingLeft: 10, paddingRight: 10 }}
                    onSubmmit={(value) => this.createClass(value)} />
                <SearchModal
                    // type = {'eventFilter'}
                    styleRefineModal={{ height: 800, backgroundColor: 'transparent' }}
                    ref={'searchModal'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
});
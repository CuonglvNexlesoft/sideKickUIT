import React, { Component } from "react";
import { RefreshControl, TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity,  } from "react-native";
import io from "socket.io-client";
import ModalInput from "../commons/ModalInput";
import { Actions, ActionConst } from "react-native-router-flux";
import ScreenName from '../../constants/ScreenName';
import ChatRoomCardItem from "../modules/ChatRoomCardItem";
import IconButton from "../commons/IconButton";
import { Metrics, Colors, Images } from '../../themes';
import FastImage from 'react-native-fast-image';

export default class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log('aaaaa', this.props.user)

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
        Actions[ScreenName.DETAIL]({ class: item })
    }

    renderRow(item) {
        return (
            <TouchableOpacity
                onPress={this.onPressNext.bind(this, item)}
                style={{ borderWidth: 1,  marginBottom: 20, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}>
                    <FastImage
                    //source={{ uri: this.state.avatarUrl, priority: FastImage.priority.normal }}
                    style={{width: '25%', height: '90%', borderRadius: 5, padding: 10,}}
                    source ={{uri : item.coverUrl }}
                  />
                    <View style={{padding: 10, paddingLeft: 15}}>
                        <View style={{ flexDirection: 'row'}}>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
                        <IconButton nameIcon={Images.icCommentHomeStream} iconSize={{width: 25, height: 25}}/>
                        <Text style={styles.email}>1 comment</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
                        <IconButton nameIcon={Images.icLikesHomeStream} iconSize={{width: 25, height: 25}}/>
                        <Text style={styles.email}>1 like</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => this.onOpendCreateForm()}>
                    <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.name}>Add class</Text>
                    </View>
                </TouchableOpacity>
                <FlatList
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
                    keyExtractor={item => item.email}
                />
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
        backgroundColor: "white",
        padding: 10
    }
});
import React, { PureComponent } from "react";
import {
    View,
    Dimensions,
    ScrollView, StyleSheet
} from "react-native";

import global from "../../../components/commons/_var";
// component



import Placeholder from "rn-placeholder";

const { height, width } = Dimensions.get("window");

export default class ClassSkelaton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        // ======================= bind function
        this._renderChatRoom = this._renderChatRoom.bind(this);
        this.numberChatRoom = [];

    }
    // componentDidMount() {
    //     let numberChatRoom = Math.round((height * 0.8) / 200);
    //     let numberArray = [];
    //     for (let i = 0; i < numberChatRoom; i++) {
    //         numberArray.push({});
    //     }
    //     this.numberChatRoom = numberArray;
    // }
    _renderChatRoom() {
        const renderChatRoom = [1,2,3,4,5,6,7].map((item, index) => {
            return (
                <View key={item + index + " "} style={styles.roomContainer}>
                    <View style={styles.room} >
                        <View style={styles.imageRoom}>
                            <View style={styles.line} >
                                <Placeholder.Line
                                    textSize={40}
                                    animate={'fade'}
                                    width={"100%"}
                                    color={global.colorA2}

                                />
                            </View>
                        </View>
                        <View style={styles.switch}>
                            <Placeholder.Box
                                height={20}
                                width="15%"
                                radius={10}
                                color={global.D8}
                            />
                        </View>
                    </View>

                </View>
            );
        });
        return (
          <View>
              {renderChatRoom}
          </View>
        );
    }


    render() {
        return (
          <View style={[styles.ChatRoom]}>
              <ScrollView style={[styles.ChatRoom]}>
                  <View style={styles.ChatRoomContainer}>
                      {this._renderChatRoom()}
                  </View>
              </ScrollView>
          </View>

        );
    }
}

const styles = StyleSheet.create({
    ChatRoom: {
        flex: 1
    },

    roomContainer: {
        alignItems: "center",
    },

    ChatRoomContainer: {
        height: height,
        width: width,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        elevation: 2,
        //  marginBottom: 5,
        paddingBottom: 10,
        //flex: 1,
        backgroundColor: global.colorF3
    },
    room: {
        height: 200,
        width: width * 0.92,
        backgroundColor: global.colorFF,
        marginTop: 18,
        borderRadius: 8
    },
    imageRoom: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 140,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.colorD8
    },
    line: {
        width: 200
    },
    switch: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 15
    }
});
ClassSkelaton.defaultProps = {};

ClassSkelaton.propTypes = {};

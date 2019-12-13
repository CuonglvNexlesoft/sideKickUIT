//import liraries
import React, { Component } from 'react';
import {
    View, StyleSheet,
    TouchableOpacity, Animated, Easing, Image
} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
// import Metrics from '../../../../redhotpie-shared-lib/themes/Metrics';
import Images from '../../../themes/Images';
import ButtonOutline from '../../commons/ButtonOutline';
import Text from '../../commons/Text';
import styles from "./styles";
import _var from "../../commons/_var";

// create a component
class ChatRoomCardItem extends Component {
    constructor() {
        super();
    }

    render() {
        const { memberLive }  = this.props;
        //let numberLive = this.props.memberLive !== 0 ? this.props.memberLive.toString() : '';
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <FastImage
                        style={styles.imageBackground}
                        // source={{
                        //     uri: this.props.backgroundImage,
                        //     priority: FastImage.priority.normal,
                        // }}
                        source={this.props.backgroundImage}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                <View style={styles.imageBackgroundContainer}/>
                <View style={styles.textCenter}>
                        <Text text={this.props.roomName} style={styles.titleRoom} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.memberInRoom}>
                        <ButtonOutline
                            name={"" + this.props.memberInRoom}
                            textStyle={{
                                fontWeight: 'bold',
                                color: _var.colorC8,
                                fontSize: _var.sizeP14
                            }}
                            btnStyle={styles.buttonMemberInRoom}
                            icSrc={Images.icGroupChat}
                        />
                    </View>
                    <View>
                        {/* <ButtonOutline
                            name={"Active"}
                            disable
                            textStyle={{
                                fontWeight: 'bold',
                                fontSize: _var.sizeP14
                            }}
                            btnStyle={styles.buttonOutline}
                            icSrc={Images.icVideoCall}
                            iconStyle={{width:16, height: 16}}
                        /> */}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


}
ChatRoomCardItem.defaultProps = {

};

ChatRoomCardItem.propTypes = {
    memberLive: PropTypes.number,
    memberInRoom: PropTypes.number,
    roomName: PropTypes.string,
    backgroundImage: PropTypes.string,
    onPress: PropTypes.func
};

export default ChatRoomCardItem;

import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import * as CommonUtils from '../../utils/CommonUtils';
import Locale from '../../utils/Locale';
import GlobalKeys from '../../constants/GlobalKeys';
import { Metrics, Colors, Images } from '../../themes';
import TextComponent from '../commons/Text';
import Avatar from '../commons/Avatar';
import LinearGradient from "react-native-linear-gradient";
import RoundAvatar from '../commons/RoundAvatar';
import IconButton from '../commons/IconButton';
import Strings from '../../constants/Strings';
import global from '../commons/_var'
export default class MenuComponent extends Component {

    constructor(props) {
        super(props);
        const { userInfo } = props;
        // console.log('userInfo', userInfo)
        this.state = {
            isEditInfo: false,
            textEmail: userInfo.email ? userInfo.email.toString() : 'null',
            textPhone: userInfo.phoneNumber ? userInfo.phoneNumber.toString() : 'null',
            textAddress: userInfo.address ? userInfo.address.toString() : 'null',
        };
    }

    render() {
        const { userInfo } = this.props;
        let _userType = "";
        switch (userInfo.userType) {
            case 0:
                _userType = "Teacher"
                break;
            case 1:
                _userType = "Student"
                break;
        }
        return (
            <ScrollView style={[styles.container, { backgroundColor: 'white', paddingBottom: 350 }]}>
                <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
                    <View>
                        <Avatar
                            ref="avatar"
                            showOnline={false}
                            user={{ userId: 1 }}
                            size="large"
                            canPress={false}
                            isDynamicallyAvatar
                        />
                    </View>

                    <View style={{ justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                        <TextComponent text={userInfo.displayName} style={{ paddingTop: 5, paddingBottom: 15, fontSize: 20, fontWeight: 'bold' }} />
                        <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TextComponent text={_userType} />
                        </View>
                    </View>
                </View>
                {!this.state.isEditInfo && <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 25 }}>
                    <View style={{}}>
                        <IconButton
                            onClick={() => Actions.drawerOpen()}
                            nameIcon={Images.icSettingSetting} />
                        <TextComponent text={Strings.setting} />
                    </View>
                    <View style={{ width: 80, height: 80, backgroundColor: '#2db300', borderRadius: 50, justifyContent: 'center' }}>
                        <IconButton nameIcon={Images.icPhotoSetting} />
                        <View style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', position: 'absolute', right: 0, bottom: 3, borderWidth: 5, borderColor: '#2db300' }}>
                            <IconButton nameIcon={Images.icAddPhotoSetting} />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isEditInfo: true
                            })
                        }}
                        style={{}}>
                        <IconButton nameIcon={Images.icEditSetting} disabled />
                        <TextComponent text={Strings.editInfo} />
                    </TouchableOpacity>
                </View>}

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '80%', paddingBottom: 30 }}>
                        <TextComponent text={"MSSV: "} style={{ color: '#73264b', position: 'absolute', backgroundColor: 'white', zIndex: 10, top: -8, left: 20, textAlign: 'center', paddingHorizontal: 10, fontStyle: 'italic', }} />
                        <LinearGradient
                            // start={[0, 0.5]}
                            // end={[1, 0.5]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#cc0099', '#4AAE9B']}
                            style={{ borderRadius: 50, height: 34, width: '100%' }}>
                            <View style={{
                                margin: 2,
                                backgroundColor: "white",
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 30
                            }}>
                                <TextComponent text={userInfo.userId} style={{ fontWeight: 'bold' }} />
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ width: '80%', paddingBottom: 30 }}>
                        <TextComponent text={"E-mail: "} style={{ color: '#73264b', position: 'absolute', backgroundColor: 'white', zIndex: 10, top: -8, left: 20, textAlign: 'center', paddingHorizontal: 10, fontStyle: 'italic', }} />
                        <LinearGradient
                            // start={[0, 0.5]}
                            // end={[1, 0.5]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#cc0099', '#4AAE9B']}
                            style={{ borderRadius: 50, height: 34, width: '100%' }}>
                            <View style={{
                                margin: 2,
                                backgroundColor: "white",
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 30
                            }}>
                                {!this.state.isEditInfo ?
                                    <TextComponent text={this.state.textEmail} style={{ fontWeight: 'bold' }} />
                                    :
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            textAlign: 'center'
                                        }}
                                        placeholder={this.state.textEmail}
                                        onChangeText={text => this.onChangeTextEmail(text)}
                                        value={this.state.textEmail}
                                    />}
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ width: '80%', paddingBottom: 30 }}>
                        <TextComponent text={"Address: "} style={{ color: '#73264b', position: 'absolute', backgroundColor: 'white', zIndex: 10, top: -8, left: 20, textAlign: 'center', paddingHorizontal: 10, fontStyle: 'italic', }} />
                        <LinearGradient
                            // start={[0, 0.5]}
                            // end={[1, 0.5]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#cc0099', '#4AAE9B']}
                            style={{ borderRadius: 50, height: 34, width: '100%' }}>
                            <View style={{
                                margin: 2,
                                backgroundColor: "white",
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 30
                            }}>
                                {!this.state.isEditInfo ?
                                    <TextComponent text={this.state.textAddress} style={{ fontWeight: 'bold' }} />
                                    :
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            textAlign: 'center'
                                        }}
                                        placeholder={this.state.textAddress}
                                        onChangeText={text => this.onChangeTextAddress(text)}
                                        value={this.state.textAddress}
                                    />}
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ width: '80%', paddingBottom: 30 }}>
                        <TextComponent text={"Phone: "} style={{ color: '#73264b', position: 'absolute', backgroundColor: 'white', zIndex: 10, top: -8, left: 20, textAlign: 'center', paddingHorizontal: 10, fontStyle: 'italic', }} />
                        <LinearGradient
                            // start={[0, 0.5]}
                            // end={[1, 0.5]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#cc0099', '#4AAE9B']}
                            style={{ borderRadius: 50, height: 34, width: '100%' }}>
                            <View style={{
                                margin: 2,
                                backgroundColor: "white",
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 30
                            }}>
                                {!this.state.isEditInfo ?
                                    <TextComponent text={this.state.textPhone.toString()} style={{ fontWeight: 'bold' }} />
                                    :
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            textAlign: 'center'
                                        }}
                                        placeholder={this.state.textPhone}
                                        onChangeText={text => this.onChangeTextPhone(text)}
                                        value={this.state.textPhone}
                                    />}
                            </View>
                        </LinearGradient>
                        
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                            <TouchableOpacity
                                style={{ borderWidth: 1, borderColor: 'white', borderRadius: 25, height: 30, width: 150, justifyContent: 'center', alignItems: 'center', padding: 5, backgroundColor: global.primaryColor }}
                                onPress={this.onUpdate}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>{Strings.update.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </ScrollView>
        )
    }

    componentDidMount() {
    }

    onUpdate=()=>{
        const { userInfo } = this.props;
        this.setState({
            isEditInfo: false
        });
        let params = {
            ID: userInfo.userId,
            Email: this.state.textEmail,
            SDT: this.state.textPhone,
            DiaChi: this.state.textAddress,
        }
        this.props.userActions.updateUserInfo(params).then(res=>{
            console.log(res)
        });
    }

    onChangeTextEmail(text){
        this.setState({
            textEmail: text
        })
    }

    onChangeTextAddress(text){
        this.setState({
            textAddress: text
        })
    }

    onChangeTextPhone(text){
        this.setState({
            textPhone: text
        })
    }

}

MenuComponent.defaultProps = {

};

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        paddingHorizontal: 20
    }
}));
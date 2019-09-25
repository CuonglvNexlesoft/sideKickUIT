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
    TouchableWithoutFeedback
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

export default class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: null,
            email: null,
            password: null,
            // keyboard: false,
            focusEmail: false,
            focusFullname: false,
            focusPass: false,
            borderTextinputColor: '#070707'
        };
    }

    render() {
        return (

            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={styles.container} >

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {this.renderLogo()}
                    </View>
                    <View style={[{ flex: 1, alignItems: 'center' }, { justifyContent: 'flex-start' }]}>
                        {this.renderUserInfosInput()}
                    </View>
                    <View style={{
                        width: Themes.Metrics.width,
                        flex: 0.5,
                        justifyContent: 'flex-end',
                        backgroundColor: Themes.Colors.background
                    }}>
                        {this.agreeTernsOfService()}
                        {this.renderButtonAction()}
                        <View style={{ height: 15 }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        );
    }

    componentDidMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        if (this.props.editProfile) {
            this.setUserProfileData()
        }
    }
    componentWillUnmount() {
        this.keyboardWillShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardWillShow() {
        // this.setState({ keyboard: true })
    }
    _keyboardDidHide() {
        // this.setState({ keyboard: false })
    }

    renderLogo() {
        return (
            <View style={{ width: '60%', marginVertical: 40 }}>
                <Image
                    style={{ width: '100%' }}
                    source={Themes.Images.signup_logo_icon}
                    resizeMode={'contain'}
                />
            </View>
        )
    }

    renderUserInfosInput() {
        return (
            <View style={styles.inputPanel}>
                <View style={{ marginBottom: 5 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: 70 }}>
                            <View style={{ height: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 12.5, fontFamily: Themes.Fonts.type.light }}>{Strings.fullname_signup}</Text>
                            </View>
                            <TextInput ref={ref => { this.txtFullname = ref }} style={[styles.input, { borderBottomWidth: this.state.focusFullname ? 3 : 2, borderColor: this.state.focusFullname ? '#070707' : Themes.Colors.grey }]}
                                autoCapitalize={'none'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.fullname}
                                // placeholder={Strings.username}
                                placeholder={'Username'}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.txtPassword.focus()}
                                onChangeText={fullname => this.setState({ fullname })}
                                onFocus={() => { this.setState({ focusEmail: false, focusPass: false, focusFullname: true }) }}
                            />
                        </View>
                        <View style={{ height: 70 }}>
                            <View style={{ height: 20, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 12.5 }}>{Strings.password.toUpperCase()}</Text>
                            </View>
                            <TextInput ref={ref => { this.txtPassword = ref }} style={[styles.input, { borderBottomWidth: this.state.focusPass ? 3 : 2, borderColor: this.state.focusPass ? '#070707' : Themes.Colors.grey }]}
                                autoCapitalize={'none'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.password} secureTextEntry
                                placeholder={Strings.password}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.txtEmail.focus()}
                                onChangeText={password => this.setState({ password })}
                                onFocus={() => { this.setState({ focusEmail: false, focusPass: true, focusFullname: false }) }}
                            />
                            <TouchableOpacity style={{ position: 'absolute', top: 20, width: 20, alignSelf: 'flex-end', backgroundColor: 'transparent' }}>
                                <Image
                                    style={{ width: 20, backgroundColor: 'transparent' }}
                                    resizeMode={'contain'}
                                    source={Themes.Images.eye_icon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 70, justifyContent: 'center' }}>
                            <View style={{ height: 20 }}>
                                <Text style={{ fontSize: 12.5 }}>E-MAIL</Text>
                            </View>
                            <TextInput ref={ref => { this.txtEmail = ref }} style={[styles.input, { borderBottomWidth: this.state.focusEmail ? 3 : 2, borderColor: this.state.focusEmail ? '#070707' : Themes.Colors.grey }]}
                                autoCapitalize={'none'}
                                underlineColorAndroid={'transparent'}
                                value={this.state.email}
                                placeholder={'mssv@gm.uit.com'}
                                returnKeyType={'done'}
                                onSubmitEditing={() => this.onSubmit()}
                                onChangeText={email => this.setState({ email })}
                                onFocus={() => { this.setState({ focusEmail: true, focusPass: false, focusFullname: false }) }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    agreeTernsOfService() {
        return (
            // <View><Text>Term</Text></View>
            null
        )
    }
    renderButtonAction() {
        return (
            <View style={{ height: 70, width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: '5%' }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => { this.onSubmit() }}
                            style={{
                                width: '90%',
                                height: '80%',
                                justifyContent: 'center',
                                borderRadius: 5,
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{ width: '100%', height: '100%' }}
                                resizeMode='contain'
                                source={Themes.Images.background_button_signup}
                            />
                            <Text style={{
                                paddingBottom: 15,
                                position: 'absolute',
                                marginHorizontal: 5,
                                textAlign: 'center',
                                fontSize: 18,
                                color: 'white',
                                fontFamily: Themes.Fonts.type.base,
                                fontWeight: '500'
                            }}>{Strings.signup2}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end'}}>
                        <View style={{ height: '60%', width: '100%',alignItems: 'flex-end',justifyContent:'center' }}>
                            <TouchableOpacity 
                            onPress={()=>Actions.pop()}
                            style={{ flexDirection: 'row', height: 20, alignItems: 'center', }}>
                                <Image
                                    style={{ maxHeight: 20, maxWidth: 20, marginHorizontal: 5 }}
                                    source={
                                        Themes.Images.user_icon_signup_screen
                                    }
                                    resizeMode={'contain'}
                                />
                                <Text style={{ fontSize: 12, fontFamily: Themes.Fonts.type.thin }}>
                                    <Text>I've already </Text>
                                    <Text style={{ fontWeight: '400' }}>member</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    onSubmit() {
        const user = this.getUser();
        if (user) {
            this.props.appActions.showLoading();
            console.log(this.props.userActions)
            this.props.userActions.setUser(user).then(result => {
                this.props.appActions.hideLoading();
                Actions[ScreenName.DRAWER]({ type: ActionConst.RESET });
            }, error => {
                this.showError(error);
            });
        }
    }


    getUser() {
        const { fullname, password } = this.state;
        if (CommonUtils.isEmpty(fullname)) {
            this.showError('Username Empty!');
            return false;
        }
        if (CommonUtils.isEmpty(password)) {
            this.showError('Password Empty!');
            return false;
        }
        return { fullname, password };
    }

    showError(message, timeout = 4000) {
        this.props.showToast(ToastTypes.ERROR, message, timeout);
    }

}

SignUpComponent.defaultProps = {
    // name: null,
};



const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        backgroundColor: Themes.Colors.background,
        justifyContent: 'center'
    },
    contents: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    infoText: {
        color: Themes.Colors.background,
        fontSize: 20,
        marginBottom: 20,
    },

    inputPanel: {
        width: '85%',
    },
    input: {
        width: '100%',
        height: 30,
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: Themes.Colors.background,
        paddingHorizontal: 10,
        // borderRadius: 5,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: Themes.Colors.background,
        borderWidth: Themes.Metrics.borderWidth,
        borderColor: Themes.Colors.border,
        borderRadius: 5,
    },
    // loading: {
    //     position: 'absolute',
    //     marginLeft: -40,
    //     marginTop: -15,
    // },
    // loadingText: {
    //     alignSelf: 'center',
    //     color: 'white',
    //     marginTop: 10,
    // },
    loginSocial: {
        flexDirection: 'row',
        marginVertical: 10,
    },




}));
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

import LinearGradient from 'react-native-linear-gradient';

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


import * as Themes from '../../themes';
import Strings from '../../constants/Strings';
import * as CommonUtils from '../../utils/CommonUtils';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            // keyboard: false,
            focusUser: false,
            focusPass: false,
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
                        {this.renderLoginSocial()}
                        {this.renderUserInfosInput()}
                    </View>
                    <View style={{
                        width: Themes.Metrics.width,
                        flex: 0.5,
                        justifyContent: 'flex-end',
                        backgroundColor: Themes.Colors.background
                    }}>
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

    renderLoginSocial() {
        return (
            <View style={{
                width: '85%',
            }}>
                <View style={{
                    width: '100%'
                }}>
                    <Text style={{ fontSize: 15.5}}>{'Access your side-kick'}</Text>
                </View>
                {/* <View style={styles.loginSocial}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => { }}>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={
                                Themes.Images.google_icon
                            }
                            resizeMode={"contain"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginHorizontal: 10 }}
                        onPress={() => { }}>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={
                                Themes.Images.facebook_icon
                            }
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
    renderLogo() {
        return (
            <View style={{ width: '60%', marginVertical: 40 }}>
                <Image
                    style={{ width: '100%' }}
                    source={Themes.Images.logo_icon}
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
                        <TextInput ref={ref => { this.txtUserName = ref }} style={[styles.input, { borderBottomWidth: this.state.focusUser ? 3 : 2, borderColor: this.state.focusUser ? '#070707' : Themes.Colors.grey }]}
                            autoCapitalize={'none'}
                            underlineColorAndroid={'transparent'}
                            value={this.state.username}
                            // placeholder={Strings.username}
                            placeholder={'mssv@gm.uit.com'}
                            returnKeyType={'next'}
                            onSubmitEditing={() => this.txtPassword.focus()}
                            onChangeText={username => this.setState({ username })}
                            onFocus={() => { this.setState({ focusUser: true, focusPass: false }) }}
                        />
                        <Image
                            style={{ width: 20, position: 'absolute', top: 20, alignSelf: 'flex-end', backgroundColor: 'transparent' }}
                            resizeMode={'contain'}
                            source={Themes.Images.tick_icon}
                        />
                        <TextInput ref={ref => { this.txtPassword = ref }} style={[styles.input, { marginTop: 20, borderBottomWidth: this.state.focusPass ? 3 : 2, borderColor: this.state.focusPass ? '#070707' : Themes.Colors.grey }]}
                            autoCapitalize={'none'}
                            underlineColorAndroid={'transparent'}
                            value={this.state.password} secureTextEntry
                            placeholder={Strings.password}
                            returnKeyType={'done'}
                            onSubmitEditing={() => this.onSubmit()}
                            onChangeText={password => this.setState({ password })}
                            onFocus={() => { this.setState({ focusUser: false, focusPass: true }) }}
                        />
                        <TouchableOpacity
                            style={{
                                height: 40,
                                position: 'absolute',
                                alignSelf: 'flex-end',
                                backgroundColor: 'transparent',
                                top: 100
                            }}
                        >
                            <Text style={{ fontSize: 12, color: Themes.Colors.grey }}>{Strings.forgotPassword}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    renderButtonAction() {
        return (
            <View style={{ height: 75, width: '100%' }}>
                {/* <View style={{ flex: 1 }}></View> */}
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: '5%' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => { this.onSubmit() }}
                            style={{
                                width: '90%',
                                height: '80%',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                borderRadius: 5,
                            }}
                        >
                            <Image
                                style={{ width: '100%', height: '100%' }}
                                resizeMode='contain'
                                source={Themes.Images.background_button_login}
                            />

                            <View style={{
                                height: '100%',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    marginHorizontal:5,
                                    textAlign:'center',
                                    fontSize: 18,
                                    color: 'white',
                                    fontFamily: Themes.Fonts.type.base,
                                    fontWeight:'500'
                                }}>{Strings.login.toUpperCase()}</Text>
                                <Image
                                    style={{maxHeight:32,maxWidth:32,marginHorizontal:5}}
                                    source={
                                        Themes.Images.icon_button_login
                                    }
                                    resizeMode={'contain'}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View
                            style={{
                                width: '90%',
                                height: '80%',
                                backgroundColor: Themes.Colors.background,
                            }}
                        >
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Text style={{
                                    fontSize: 12, color: Themes.Colors.grey, fontFamily: Themes.Fonts.type.base
                                }}>
                                    <Text >Are you a </Text>
                                    <Text style={{ fontWeight: '300', color: 'black' }}>Newer </Text>
                                    <Text>?</Text>
                                </Text>
                            </View>
                            <View style={{ flex: 2, borderBottomWidth: 3, borderColor: Themes.Colors.grey }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => Actions[ScreenName.SIGNUP]()}
                                >
                                    <Text style={{
                                        fontSize: 18, fontFamily: Themes.Fonts.type.base,
                                        fontWeight: '400'
                                        , color: 'black'
                                    }}>{Strings.signup.toUpperCase()}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    onSubmit() {
        Actions[ScreenName.DRAWER]({ type: ActionConst.RESET });
        // const user = this.getUser();
        // if (user) {
        //     this.props.appActions.showLoading();
        //     console.log(this.props.userActions)
        //     this.props.userActions.setUser(user).then(result => {
        //         this.props.appActions.hideLoading();
        //         Actions[ScreenName.DRAWER]({ type: ActionConst.RESET });
        //     }, error => {
        //         this.showError(error);
        //     });
        // }
    }


    getUser() {
        const { username, password } = this.state;
        if (CommonUtils.isEmpty(username)) {
            this.showError('Username Empty!');
            return false;
        }
        if (CommonUtils.isEmpty(password)) {
            this.showError('Password Empty!');
            return false;
        }
        return { username, password };
    }

    showError(message, timeout = 4000) {
        this.props.showToast(ToastTypes.ERROR, message, timeout);
    }

}

LoginComponent.defaultProps = {
    // name: null,
};

LoginComponent.propTypes = {
    // name: React.PropTypes.string,
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
        height: 40,
        marginTop: 10,
        marginBottom: 10,
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
import React, { Component, PropTypes } from 'react';
import {
    View, Animated,
    Text, Easing,
    TouchableOpacity,
    Image, Platform,
    AsyncStorage,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import * as CommonUtils from '../../utils/CommonUtils';
import Locale from '../../utils/Locale';
import GlobalKeys from '../../constants/GlobalKeys';
import StatusBar from '../commons/StatusBar';
import { Metrics, Colors } from '../../themes';

import SplashScreen from 'react-native-splash-screen';

export default class SplashComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animmate: new Animated.Value(1)
        };
    }

    render() {
        return (
            <Animated.View style={[styles.container, { opacity: this.state.animmate }]}>
                <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
                <Animated.Image source={{ uri: 'logo_icon' }}
                    resizeMode={'contain'}
                    style={[styles.logo, {
                        marginTop: Platform.OS === 'android' ? -Metrics.statusBarHeight : 0,
                        opacity: this.state.animmate
                    }]}
                />
            </Animated.View>
        )
    }

    // componentDidMount() {
    //     this.checkLocale().then(() => {
    //         this.checkLogin();
    //         //    this.navigate(ScreenName.DRAWER);
    //     });
    // }
    componentDidUpdate() {
        this.props.userState.rehydrate === true ?
            this.checkLogin() : null

    };
    checkLocale() {
        return new Promise((resolve) => {
            this.props.settingActions.getSettings().then(settings => {
                if (settings && settings.locale) {
                    Locale.locale = settings.locale;
                }
                resolve(true)
            }, error => {
                CommonUtils.log('SPLASH GET SETTING ERROR', error);
                resolve(true)
            });
        })
    }
    checkLogin() {
        this.start = Date.now();
        const check = CommonUtils.isEmpty(this.props.userState.user)
        console.log(check)
        if (check === false) {
            SplashScreen.hide()
            this.navigate(ScreenName.LOGIN);
        } else
            if (check === true) {
                SplashScreen.hide()
                this.navigate(ScreenName.LOGIN);
            }

    }

    navigate(screenName, arg = null) {
        const timeout = this.props.timeout;
        const remain = timeout - (Date.now() - (this.start || Date.now()));
        this.splashAminate((remain > timeout / 6 ? timeout / 6 : remain), (remain > timeout / 6 ? (remain - timeout / 6) : 0))
        this.naviTimeout = setTimeout(() => {
            if (arg != null) {
                SplashScreen.hide();
                Actions[screenName]({ type: ActionConst.RESET, ...arg });
            } else {
                SplashScreen.hide();
                Actions[screenName]({ type: ActionConst.RESET });
            }
            clearTimeout(this.naviTimeout);
        }, remain > timeout ? 0 : remain)
    }

    splashAminate(duration, delay) {
        Animated.timing(
            this.state.animmate,
            { toValue: 0, duration: duration || (this.props.timeout / 6), delay: delay || (this.props.timeout * 5 / 6), ease: Easing.out }
        ).start();
    }

}

SplashComponent.defaultProps = {
    timeout: 1500,
};

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    logo: {

        width: '50%',
        height: '100%',

    },
}));
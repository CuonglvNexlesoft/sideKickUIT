import React from 'react';
import {
    View,
    Text,
    Platform,
    TouchableOpacity,
    Animated, Easing,
    UIManager, LayoutAnimation,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import Spinner from './Spinner';
import Ripples from './Ripples';
import Strings from '../../constants/Strings';
import * as Themes from './../../themes';

import * as CommonUtils from './../../utils/CommonUtils';

export const ToastTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    LOADING: 'loading',
}

export default class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: null,
            showAnim: new Animated.Value(this.props.loading ? 0 : this.props.height),
            color: this.props.loading ? Themes.Colors.warn : this.props.color,
            message: '',
            length: 1000,
            loading: this.props.loading,
        };

        this.SUCCESS = ToastTypes.SUCCESS;
        this.ERROR = ToastTypes.ERROR;
        this.WARN = ToastTypes.WARN;
        this.INFO = ToastTypes.INFO;
        this.LOADING = ToastTypes.LOADING;

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }



    render() {
        const { message, loading } = this.state;
        const toastStyle = {
            ...this.props.style,
            backgroundColor: this.state.color,
        }

        return (this.state.show || loading ? (
            <Animated.View style={[styles.container, (this.props.toastContainerStyle || null), { height: this.props.height, transform: [{ translateY: this.state.showAnim }] }]}>
                <Ripples rippleColor={'#ffffff'} onPress={() => this.onToastPress()}
                    style={[styles.toast, toastStyle, {
                        height: this.props.height,
                        justifyContent: loading ? 'flex-start' : 'center',
                    }]}>
                    {loading && <Spinner style={{ marginLeft: 10 }} color={this.props.textColor} loading={loading} strokeWidth={0.5} size={30} />}
                    {typeof message === 'string' || message instanceof String ?
                        (<Text style={[styles.toastText, { color: this.props.textColor, marginLeft: loading ? 20 : 0, fontSize: loading ? 18 : 15 }]}>
                            {loading ? (Strings.loading || 'Loading') : message}</Text>)
                        :
                        (message)
                    }
                </Ripples>
            </Animated.View>
        ) : null)

    }
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loading !== nextProps.loading) {
            this.toggleLoading(nextProps.loading);
        }
        if(CommonUtils.isObjectUndefinedOrNull(this.props.errorMessage) && nextProps.errorMessage){
            this.show(this.ERROR, nextProps.errorMessage, -1);
        }
        if(CommonUtils.isObjectUndefinedOrNull(nextProps.errorMessage) && this.props.errorMessage){
            this.dismiss();
        }
    }

    toggleLoading(loading) {
        this.setState({ color: this.getColor(this.LOADING), message: '' });
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        if (loading) { this.setState({ loading }); }
        Animated.timing(
            this.state.showAnim,
            { toValue: loading ? 0 : this.props.height, duration: this.props.duration, delay: this.props.delay, ease: Easing.inOut }
        ).start(() => {
            if (!loading) {
                this.setState({ loading });
            }
        });
    }

    show(type = 'info', message = '', length = 1000) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ show: true, loading: false, type: type, color: this.getColor(type), message: message, length: length != -1 ? length : 1000, });
        Animated.timing(
            this.state.showAnim,
            { toValue: 0, duration: this.props.duration, delay: this.props.delay, ease: Easing.inOut }
        ).start(() => {
            if (this.props.autoHide || length == -1) {
                if(this.animTimeout){
                    clearTimeout(this.animTimeout);
                }
                this.animTimeout = setTimeout(() => {
                    this.dismiss();
                    clearTimeout(this.animTimeout);
                }, this.state.length);
            }
            this.onToastStateChange(true);
        });
    }

    dismiss() {
        Animated.timing(
            this.state.showAnim,
            { toValue: this.props.height, duration: this.props.duration, delay: this.props.delay, ease: Easing.inOut }
        ).start(() => {
            this.setState({ show: false });
            this.onToastStateChange(false);
        });
    }

    onToastStateChange(state){
        if(this.props.onStateChange){
            return this.props.onStateChange(state);
        }
    }

    getColor(type) {
        switch (type) {
            case this.ERROR:
                return Themes.Colors.error;
            case this.SUCCESS:
                return Themes.Colors.success;
            case this.INFO:
                return Themes.Colors.info;
            case this.WARN:
                return Themes.Colors.warn;
            case this.LOADING: 
                return Themes.Colors.warn;
            default:
                return Themes.Colors.info;
        }
    }

    onToastPress() {
        if (this.props.onPress) {
            return this.props.onPress();
        } else if(!this.state.loading) {
            return this.dismiss();
        }
    }

}

Toast.defaultProps = {
    color: Themes.Colors.info,
    textColor: '#ffffff',
    height: 60,
    autoHide: true,
    duration: 200,
    delay: 200,
    loading: false,
    errorMessage: null,
    toastContainerStyle: null,
};

// Toast.propTypes = {
//     color: React.PropTypes.string,
//     textColor: React.PropTypes.string,
//     height: React.PropTypes.number,
//     autoHide: React.PropTypes.bool,
//     duration: React.PropTypes.number,
//     delay: React.PropTypes.number,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
        position: 'absolute',
        left: 0,bottom: 0,
        backgroundColor: 'transparent',
    },
    toast: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: Themes.Metrics.screen.width*(CommonUtils.isTablet() ? 0.6 : 1),
        marginHorizontal: Themes.Metrics.screen.width*(CommonUtils.isTablet() ? 0.2 : 0),
        borderTopLeftRadius: CommonUtils.isTablet() ? 10 : 0,
        borderTopRightRadius: CommonUtils.isTablet() ? 10 : 0,
    },
    toastText: {
        
    },

}));



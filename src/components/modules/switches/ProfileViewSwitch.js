import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Text as NavtiveText,
    StyleSheet,
    Animated,
    Easing,
    PanResponder,
    Image,
    View
} from "react-native";
import styles from "./styles";

const SCALE = 6 / 5;

export default class SwitchButton extends Component {
    constructor(props, context) {
        super(props, context);
        const {width, height, value} = props;

        this.offset = width - height + 1;
        this.handlerSize = height + 10 ;

        this.state = {
            value,
            toggleable: true,
            alignItems: value ? "flex-end" : "flex-start",
            handlerAnimation: new Animated.Value(this.handlerSize + 5),
            switchAnimation: new Animated.Value(value ? -1 : 1)
        };
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant,
            onPanResponderMove: this._onPanResponderMove,
            onPanResponderRelease: this._onPanResponderRelease
        });
    }

    componentWillReceiveProps(nextProps) {
        // unify inner state and outer props
        if (nextProps.value === this.state.value) {
            return;
        }

        if (
            typeof nextProps.value !== "undefined" &&
            nextProps.value !== this.props.value
        ) {
            /**
             /* you can add animation when changing value programmatically like following:
             /* this.animateHandler(this.handlerSize * SCALE, () => {
      /*   setTimeout(() => {
      /*    this.toggleSwitchToValue(true, nextProps.value)
      /*    }, 800)
      /* })
             */
            this.toggleSwitchToValue(true, nextProps.value);
        }
    }
    _onPanResponderGrant = (evt, gestureState) => {
        const {disabled} = this.props;
        if (disabled) return;

        this.setState({toggleable: true});
        this.animateHandler(this.handlerSize * SCALE);
    };

    _onPanResponderMove = (evt, gestureState) => {
        const {value} = this.state;
        const {disabled} = this.props;
        if (disabled) return;

        this.setState({
            toggleable: value ? gestureState.dx < 10 : gestureState.dx > -10
        });
    };

    _onPanResponderRelease = (evt, gestureState) => {
        const {toggleable} = this.state;
        const {disabled, onAsyncPress, onSyncPress} = this.props;

        if (disabled) return;

        if (toggleable) {
            if (onSyncPress) {
                this.toggleSwitch(true, onSyncPress);
            } else {
                onAsyncPress(this.toggleSwitch);
            }
        } else {
            this.animateHandler(this.handlerSize);
        }
    };

    /**
     *
     * @param result result of task
     * @param callback invoke when task is finished
     */
    toggleSwitch = (result, callback = () => null) => {
        const {value} = this.state;
        this.toggleSwitchToValue(result, !value, callback);
    };

    /**
     * @param result result of task
     * @param toValue next status of switch
     * @param callback invoke when task is finished
     */
    toggleSwitchToValue = (result, toValue, callback = () => null) => {
        const {switchAnimation} = this.state;

        this.animateHandler(this.handlerSize);
        if (result) {
            this.animateSwitch(toValue, () => {
                this.setState(
                    {
                        value: toValue,
                        justifyContent: toValue ? "flex-end" : "flex-start"
                    },
                    () => {
                        callback(toValue);
                    }
                );
                switchAnimation.setValue(toValue ? 1 : -1);
            });
        }
    };

    animateSwitch = (value, callback = () => null) => {
        const {switchAnimation} = this.state;

        Animated.timing(switchAnimation, {
            toValue: value ? -this.offset : this.offset,
            duration: 200,
            easing: Easing.linear
        }).start(callback);
    };

    animateHandler = (value, callback = () => null) => {
        const {handlerAnimation} = this.state;

        Animated.timing(handlerAnimation, {
            toValue: value + 5,
            duration: 200,
            easing: Easing.linear
        }).start(callback);
    };

    render() {
        const {switchAnimation, handlerAnimation, justifyContent, value} = this.state;
        const {
            backgroundActive,
            backgroundInactive,
            width,
            height,
            circleColorActive,
            circleColorInactive,
            style,
            circleStyle,
            ...rest
        } = this.props;

        const interpolatedBackgroundColor = switchAnimation.interpolate({
            inputRange: value ? [-this.offset, -11] : [1, this.offset],
            outputRange: [backgroundInactive, backgroundActive],
            extrapolate: "clamp"
        });

        const interpolatedCircleColor = switchAnimation.interpolate({
            inputRange: value ? [-this.offset, -1] : [1, this.offset],
            outputRange: [circleColorInactive, circleColorActive],
            extrapolate: "clamp"
        });

        const interpolatedTranslateX = switchAnimation.interpolate({
            inputRange: value ? [-this.offset, -1] : [1, this.offset],
            outputRange: value ? [-this.offset, -1] : [1, this.offset],
            extrapolate: "clamp"
        });

        return (
            <Animated.View
                {...this._panResponder.panHandlers}
                style={[
                    style,
                    {
                        width: width -2,
                        height: height + 10,
                        alignItems:'center',
                        justifyContent,
                        flexDirection:'row',
                        borderRadius: 11,
                       // backgroundColor: interpolatedBackgroundColor
                    }
                ]}
            >
                <Animated.View
                    {...rest}
                    {...this._panResponder.panHandlers}
                    style={[
                        style,
                        {
                            width: width-2,
                            height: height-2,
                            alignItems:'center',
                            justifyContent,
                            flexDirection:'row',
                            borderRadius: 12,
                            backgroundColor: interpolatedBackgroundColor
                        }
                    ]}
                >
                    <Image source={this.props.imageInactiveDisable} style={{ position: 'absolute',left:8,}}/>

                    <Image source={this.props.imageActiveDisable} style={{ position: 'absolute', right:8}}/>
                </Animated.View>
                <Animated.View
                    style={[
                        {
                            backgroundColor: interpolatedCircleColor,
                            width: 28 ,
                            height: 28 ,
                            borderRadius: 11,
                            justifyContent: "center",
                            alignItems: "center",
                            position: 'absolute',
                            // borderWidth:1.5,
                            borderColor:"#e3e3e3",
                            zIndex: 1,
                            transform: [{translateX: interpolatedTranslateX}]
                        },
                        circleStyle
                    ]}
                >
                    {value &&
                    this.props.imageActive !== "" &&
                    this.props.imageInactive !== "" ? (
                        this.props.imageActive ?
                            <Image source={this.props.imageActive}/> : <Image source={this.props.imageInactiveDisable}/>
                    ) : (
                        this.props.imageInactive ?
                            <Image source={this.props.imageInactive}/> : <Image source={this.props.imageActiveDisable}/>
                    )}
                </Animated.View>
            </Animated.View>

        );
    }
}
SwitchButton.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    circleColorActive: PropTypes.string,
    circleColorInactive: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundInactive: PropTypes.string,
    onAsyncPress: PropTypes.func,
    onSyncPress: PropTypes.func,
    style: NavtiveText.propTypes.style,
    circleStyle: NavtiveText.propTypes.style,
    renderInsideCircle: PropTypes.func,
    imageActive: PropTypes.node,
    imageInactive: PropTypes.node,
    imageActiveDisable:PropTypes.node,
    imageInactiveDisable:PropTypes.node,

};

SwitchButton.defaultProps = {
    width: 55,
    height: 26,
    value: false,
    disabled: false,
    circleColorActive: "#7BCB45",
    circleColorInactive: "#7BCB45",
    backgroundActive: "black",
    backgroundInactive: "gray",
    imageActive: "",
    imageInactive: "",
    // renderInsideCircle: () => {},
    onAsyncPress: callback => {
        callback(true);
    }
};

/**
 * Created by hieult on 10/30/17.
 */
import PropTypes from 'prop-types';
import React, {Component, PureComponent} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform,
    Dimensions,
    Easing
} from "react-native";
import Modal from './ModalBox'; //eslint-disable-line import/no-unresolved
import styles from "./styles";

const {height, width} = Dimensions.get("window");


export default class ModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            animationType: "none",
            pressBackgroundClose: true,
            pressBackToClose: true,
            easing: Easing.elastic(0.8),
            animationDuration: 0,
            swipeToClose: true,
            swipeThreshold: 50,
            swipeArea: height,
            coverScreen:true,
        };
        console.disableYellowBox = true;
        this.pressClose = false;
        this.onLayout = this.onLayout.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onOpenedModal = this.onOpenedModal.bind(this);
        this.renderPopup = this.renderPopup.bind(this);
        this.onNewClose = this.onNewClose.bind(this);
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.visible !== this.props.visible) {

            this.setState({
                visible: nextProp.visible
            });
        }
    }

    onCloseModal() {
        // this.setState({
        //   visible: false
        // });
        if (this.props.onCloseModal) {
            this.props.onCloseModal();
        }
        this.pressClose = false;
    }

    onOpenedModal() {
        if (this.props.onOpenedModal) {
            this.props.onOpenedModal();
        }
    }

    renderPopup() {
        return null;
    }

    openModal() {
        return new Promise((resolve, reject) => {
            this.setState({
                visible: true
            });
            setTimeout(() => {
                if (this.state.visible) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 500);
        });
    }

    closeModal() {
        return new Promise((resolve, reject) => {
            this.setState({
                visible: false
            });
            if (this.props.closeModal) {
                this.props.closeModal();
            }
            setTimeout(() => {
                if (!this.state.visible) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 500);
        });
    }

    onNewClose() {
        if(!this.pressClose){
            this.pressClose = true;
            setTimeout(() => {
                if(this.refs.modal1 && this.refs.modal1.close){
                    this.refs.modal1.close();
                }
                this.pressClose = false;
            }, 500);
        }

    }

    onLayout(e) {
        this.refs.modal.measure((x, y, width, height, pageX, pageY) => {
            if (width !== 0 && height !== 0) {
                this.setState({
                    width: width,
                    height: height,
                });
            }
        });
    }

    render(component = null, center = false, isLoader = false) {
        let styleSecond = styles.modalViewCenter;
        let styleBackgroundColor = "black";
        if (!center) {
            styleSecond = styles.modalViewBottom;
        }
        if (this.backgroundColor) {
            styleBackgroundColor = this.backgroundColor;
        }
        let backdropOpacity = this.props.backdropOpacity ? this.props.backdropOpacity : 0.5;
        if (this.backdropOpacity) {
            backdropOpacity = this.backdropOpacity;
        }

        return (
            <Modal
                ref={"modal1"}
                style={[styles.bgTransparent, {
                    height: this.state.height,
                    width: this.state.width
                }, this.props.styleModal]}
                isOpen={this.state.visible}
                animationType={this.state.animationType}
                animationDuration={this.state.animationDuration}
                backdropPressToClose={this.state.pressBackgroundClose}
                onClosed={this.onCloseModal}
                onOpened={this.onOpenedModal}
                coverScreen={this.state.coverScreen}
                backdropColor={styleBackgroundColor}
                backdropOpacity={backdropOpacity}
                position={center ? "center" : "bottom"}
                entry={center? 'top' : 'bottom'}
                backButtonClose={this.state.pressBackToClose}
                swipeToClose={this.state.swipeToClose}
                swipeThreshold={this.state.swipeThreshold}
                swipeArea={this.state.swipeArea}
                easing={this.state.easing}
                backdropCustomStyle={this.props.backdropCustomStyle}
            >
                <View ref="modal" onLayout={this.onLayout.bind(this)}>
                    {component()}
                </View>
            </Modal>

        );
    }
}

ModalComponent.defaultProps = {
    visible: false,
    backdropOpacity: .9,
    swipeToClose: false
};

ModalComponent.propTypes = {
    visible: PropTypes.bool,
    onCloseModal: PropTypes.func,
    closeModal: PropTypes.func,
    openModal: PropTypes.func,
    onOpenedModal: PropTypes.func,
    styleModal: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    backdropOpacity: PropTypes.number,
    swipeToClose: PropTypes.bool,
    transparent: PropTypes.bool,
    backdropCustomStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};




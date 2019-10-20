import React, {Commponent} from "react";
import {
    Platform, Dimensions, ScrollView, View, Keyboard
} from "react-native";
import Modal from "./Modal";
import PropTypes from "prop-types";
import styles from "./styles";

const {width, height} = Dimensions.get('window');
export default class ModalInfo extends Modal {

    constructor(props) {
        super(props);
        this.renderPopup = this.renderPopup.bind(this);
        this.state = {
            ...this.state,
            keyboardSpace: null,
            marginBottom: 0
        };
        
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {
      
    }

    

    renderBottom() {
        return null;
    }

    renderHeader() {
        return null;
    }

    renderContent() {
        return null;
    }

    ratioHeight() {
        if (height < 812 && height > 570) {
            return -25;
        }
        if (height >= 812) {
            return -65;
        }
        if (height <= 570) {
            return -15;
        }
    }

    renderPopup() {
        const styleModalInput = {
            bottom: Platform.OS === "ios" ? this.ratioHeight() : 10

        };
        const stylesModal = this.props.type && this.props.type === "textInput" ? styleModalInput : styles.modalPopup;
        return (
            <View style={[stylesModal, this.props.styleModalPopupCustom]}>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderBottom()}
            </View>
        );
    }

    render() {
        return super.render(this.renderPopup, true);
    }
}

ModalInfo.defaultProps = {};

ModalInfo.propTypes = {
    styleModalPopupCustom: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    type: PropTypes.string
};

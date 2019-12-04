import React from "react";
import {View, Dimensions} from "react-native";
import Modal from "./Modal";
import styles from "./styles";
import PropTypes from 'prop-types';

export default class ModalRefine extends Modal {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
        };
        this.renderPopup = this.renderPopup.bind(this);
        this.getStyleModal = this.getStyleModal.bind(this);
        // this.isProfileModal = false;
        this.backdropOpacity = props.backdropOpacity || 0.95;

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

    getStyleModal() {
        if (this.props.type) {
            if (this.props.type === "full" || this.props.type === "textInput") {
                return styles.modalRefineFull;
            }
            if (this.props.type === 'conversationFull') {
                return styles.modalConversation;
            }
            if (this.props.type === "option"){
                return styles.modalRefineOption;
            }
            if(this.props.type === "eventFilter"){
                return styles.modalEventFilter;
            }
        } else {
            return styles.modalRefine;
        }
    }

    // onCloseModal(){
    //     console.log("vao day");

    //     super.closeModal();
    // }

    renderPopup() {
        const styleModal = this.getStyleModal();
        return (
            <View style={[styleModal, this.props.styleRefineModal]}>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderBottom()}
            </View>
        );
    }

    render() {
        if (this.state.visible) {
            return super.render(this.renderPopup, false);
        } else {
            return null;
        }
    }
}

ModalRefine.defaultProps = {
    
};

ModalRefine.propTypes = {
    styleRefineModal: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    type: PropTypes.string, // fullImageScreen , type , textInput
};

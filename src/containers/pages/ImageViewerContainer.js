import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import ImageViewerComponent from '../../components/views/ImageViewerComponent';

function mapStateToProps(rootState) {
    return {
    };
}

function mapDispatchToProps(dispatch) {

    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageViewerComponent)
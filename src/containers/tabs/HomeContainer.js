import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import HomeComponent from '../../components/tabs/HomeComponent';
import * as AppActions from '../../actions/AppActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        user: rootState.userState
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
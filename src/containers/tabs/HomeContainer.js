import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import HomeComponent from '../../components/tabs/HomeComponent';
import * as AppActions from '../../actions/AppActions';
import * as ClassActions from '../../actions/ClassActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userInfo: rootState.userState.user,
        classState: rootState.classState,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        ClassActions: bindActionCreators(ClassActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
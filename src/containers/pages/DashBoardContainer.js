import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import DashBoardComponent from '../../components/views/DashBoardComponent';

import * as AppActions from '../../actions/AppActions';
import * as ClassActions from '../../actions/ClassActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        productState: rootState.productState,
        settingState: rootState.settingState
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        classActions: bindActionCreators(ClassActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoardComponent)
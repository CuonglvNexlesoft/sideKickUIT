import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import MenuComponent from '../../components/tabs/MenuComponent';
import * as AppActions from '../../actions/AppActions';
import * as UserActions from '../../actions/UserActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userInfo: rootState.userState.user,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuComponent)
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import MenuComponent from '../../components/tabs/MenuComponent';
import * as AppActions from '../../actions/AppActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
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
)(MenuComponent)
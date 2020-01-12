import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as AppActions from '../../actions/AppActions';
import * as UserActions from '../../actions/UserActions';
import * as DocsActions from '../../actions/DocsActions';
import ClassDetailComponent from '../../components/views/ClassDetailComponent'
// import * as ProductActions from '../../actions/ProductActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userInfo: rootState.userState.user,
        classState: rootState.classState,
        settingState: rootState.settingState
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
        DocsActions: bindActionCreators(DocsActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassDetailComponent)
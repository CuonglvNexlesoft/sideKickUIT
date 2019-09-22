import SplashComponent from '../../components/views/SplashComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as AppActions from '../../actions/AppActions';
import * as UserActions from '../../actions/UserActions';
import * as ProductActions from '../../actions/ProductActions';
import * as SettingActions from '../../actions/SettingActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userState: rootState.userState,
        productState: rootState.productState,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
        productActions: bindActionCreators(ProductActions, dispatch),
        settingActions: bindActionCreators(SettingActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashComponent)
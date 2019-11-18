import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as AppActions from '../../actions/AppActions';
import * as UserActions from '../../actions/UserActions';
import CreateTestComponent from '../../components/views/CreateTestComponent'
// import * as ProductActions from '../../actions/ProductActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        userInfo: rootState.userState.user,
        // productState: rootState.productState,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        userActions: bindActionCreators(UserActions, dispatch),
        // productActions: bindActionCreators(ProductActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTestComponent)
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import DashBoardComponent from '../../components/views/DashBoardComponent';

import * as AppActions from '../../actions/AppActions';
import * as ProductActions from '../../actions/ProductActions';

function mapStateToProps(rootState) {
    return {
        appState: rootState.appState,
        productState: rootState.productState,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        appActions: bindActionCreators(AppActions, dispatch),
        productActions: bindActionCreators(ProductActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoardComponent)
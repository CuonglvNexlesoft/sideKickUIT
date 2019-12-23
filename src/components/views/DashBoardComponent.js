import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, TextInput,
    LayoutAnimation,
    Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import GlobalKeys from '../../constants/GlobalKeys';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FTIcon from 'react-native-vector-icons/Feather';

import Button from './../commons/Button';
import CustomTab from './../commons/CustomTab';
import Container from './../commons/Container';
import { ToastTypes } from './../commons/Toast';

import Home from '../../containers/tabs/HomeContainer';
import News from '../../containers/tabs/NewsContainer';
import Menu from '../../containers/tabs/MenuContainer';

import * as CommonUtils from '../../utils/CommonUtils';
import BuildUtils from '../../utils/BuildUtils';
import * as Themes from '../../themes';
import Strings from '../../constants/Strings';
import global from '../commons/_var'
import IconButton from '../commons/IconButton';

export default class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    }

    render() {
        const tabLabels = ['HOME', 'News feed', 'Account', 'SCORES', 'MENU']; // [Strings.checklist, Strings.notifications, Strings.favorite, Strings.admin]
        const initialTab = 0;
        const {activeTab} = this.state;
        return (
            <Container 
            headerLeft={
                <IconButton nameIcon={Themes.Images.footerIcMenu} onClick={() => {
                    Actions.drawerOpen()
                }} btnStyle={{ paddingLeft: 15 }} />
              }
            title={tabLabels[activeTab]} style={styles.container}
                titleTextStyle={{ color: global.color33, fontWeight: 'bold', fontSize: 20, color: global.color33 }}
                // statusBarColor={global.colorFb}
                // headerColor={global.colorFb}
                statusBarProps={{ barStyle: "dark-content" }}>
                <ScrollableTabView style={{ borderBottomColor: 'transparent', flex: 1 }}
                    locked
                    initialPage={initialTab} tabBarPosition={'bottom'}
                    renderTabBar={(props) =>
                        <CustomTab {...props} initialPage={initialTab}
                             activeColor={Themes.Colors.windowTint}
                            hideLabelInactive={false}
                            inActiveColor={Themes.Colors.grey}
                            style={{
                                ...props.style,
                                height: Themes.Metrics.tabHeight,
                                // borderTopColor: global.color0B,
                                // borderTopWidth: 2,
                                // backgroundColor: global.colorFb,
                                paddingHorizontal: CommonUtils.isTablet() ? '20%' : 0,
                                paddingBottom: 10,
                                paddingTop: 5
                            }}
                            iconStyle={{}}
                            labelStyle={{ fontFamily: Themes.Fonts.type.regular, fontWeight: 'bold', fontSize: 12, color: global.colorFF }}
                        />}
                    ref={(tabView) => { this.tabView = tabView; }}
                    onChangeTab={({ i, ref }) => this.onChangeTab(i, ref)}
                >
                    <Home tabLabel={{ label: tabLabels[0], icon: 'ios-home', iconComponent: Icon }} />

                    <News tabLabel={{ label: tabLabels[1], icon: 'newspaper-o', iconComponent: FAIcon }} />

                    <Menu tabLabel={{ label: tabLabels[2], icon: 'user', iconComponent: EIcon }} />


                </ScrollableTabView>
            </Container>
        );
    }

    componentDidMount() {
        // this.props.productActions.fetchProducts(1, 10).then(products => {
        //     // TODO: Do somethings with product
        //     CommonUtils.log(products);
        // }, error => {
        //     // show Toast Error
        //     CommonUtils.log("=== ERROR:", error.message);
        //     this.showError(error.message || error);
        // });
        this.props.classActions.getClassList()
    }

    onChangeTab(index, ref) {
        this.setState({ activeTab: index });
    }

    onMenuPress() {
        Actions.drawerOpen();
    }

    showError(message, timeout = 4000) {
        this.props.showToast(ToastTypes.ERROR, message, timeout);
    }


}

DashboardComponent.defaultProps = {
    // name: null,
};

// DashboardComponent.propTypes = {
//     // name: React.PropTypes.string,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        // backgroundColor: global.colorFb,
    },
    contents: {
    },
    headerImg: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: Themes.Colors.background
    }
}));
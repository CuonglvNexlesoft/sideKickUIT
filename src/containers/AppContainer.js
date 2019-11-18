import React, { Component } from 'react';
import {
    NetInfo,
    AppState
} from 'react-native'
import ScreenName from '../constants/ScreenName';
import * as CommonUtils from '../utils/CommonUtils';
import {
    Scene,
    Router,
    ActionConst,
} from 'react-native-router-flux';

import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';

import LeftMenuContainer from './pages/LeftMenuContainer';
import DashBoardContainer from './pages/DashBoardContainer';
import ClassDetailContainer from './pages/ClassDetailContainer';
import CreateTestContainer from './pages/CreateTestContainer';
import SpashContainer from './pages/SpashContainer';
import LoginContainer from './pages/LoginContainer';
import SignUpContainer from './pages/SignUpContainer'
import ImageViewerContainer from './pages/ImageViewerContainer';

import Toast from './../components/commons/Toast';

import * as Themes from '../themes';

const { width, height } = Themes.Metrics.screen;

import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build();
console.disableYellowBox = true;

export default class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnectNetWork: '',
        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.isAppBackground = false;
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
            this.isAppBackground = true;
            
        } else {
            this.isAppBackground = false
            if(appState === 'active'){
                SplashScreen.hide();
            }
        }
    }

    componentDidMount() {
        // AppState.addEventListener('change', this.handleAppStateChange);
        // NetInfo.addEventListener('connectionChange', (conn) => this.handleConnectionInfoChange(conn));
    }

    componentWillUnmount() {
        // AppState.removeEventListener('change', this.handleAppStateChange);
        // NetInfo.removeEventListener('connectionChange', (conn) => this.handleConnectionInfoChange(conn));
    }

    handleConnectionInfoChange = (conn) => {
        conn.type.toLowerCase() !== "none" ?
            this.setState({ isConnectNetWork: true }) :
            this.setState({ isConnectNetWork: false });
    }

    checkConnectNetWork() {
        if (!CommonUtils.isStringEmpty(this.state.isConnectNetWork) && this.state.isConnectNetWork === false) {
            return false;
        }
        return true;
    }

    showToast = (...params) => {
        return this.Toast.show(...params);
    }

    render() {
        return (
            <MenuProvider backHandler customStyles={{ backdrop: { backgroundColor: 'black', opacity: 0.5 } }}>
                <Router>
                    <Scene key={ScreenName.ROOT} passProps showToast={this.showToast}>
                        <Scene key={ScreenName.SPLASH} component={SpashContainer} hideNavBar initial={true} />
                        <Scene key={ScreenName.LOGIN} component={LoginContainer} hideNavBar />

                        {/* <Scene key={ScreenName.DRAWER} 
                            drawer 
                            overlay
                            hideNavBar hideTabBar passProps
                            type={ActionConst.RESET}
                            contentComponent={LeftMenuContainer}
                            drawerWidth={Themes.Metrics.leftMenuWidth}
                        >
                            <Scene key={ScreenName.DASHBOARD} component={DashBoardContainer} hideNavBar />
                           
                        </Scene> */}
                        <Scene key={ScreenName.DASHBOARD} component={DashBoardContainer} hideNavBar />
                        <Scene key={ScreenName.DETAIL} component={ClassDetailContainer} hideNavBar />
                        <Scene key={ScreenName.TEST} component={CreateTestContainer} hideNavBar />
                        <Scene key={ScreenName.IMAGE_VIEWER}
                            hideNavBar={true} direction="vertical"
                            component={ImageViewerContainer} >
                        </Scene>
                        <Scene key={ScreenName.SIGNUP} component={SignUpContainer} hideNavBar />
                    </Scene>
                    
                </Router>
                <Toast ref={ref => {this.Toast = ref;}} autoHide={true} />
            </MenuProvider>
        );
    }

}
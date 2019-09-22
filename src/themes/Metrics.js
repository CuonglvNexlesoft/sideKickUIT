import { Dimensions, Platform, StyleSheet } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android';
import DeviceInfo from 'react-native-device-info';
let { width, height } = Dimensions.get('window');
if (Platform.OS == 'android') {
    height = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
    width = ExtraDimensions.get('REAL_WINDOW_WIDTH');
}

// Used via Metrics.baseMargin
const metrics = {
    marginHorizontal: 10,
    marginVertical: 10,
    section: 25,
    baseMargin: 10,
    doubleBaseMargin: 20,
    smallMargin: 5,
    doubleSection: 50,
    horizontalLineHeight: 1,
    headerHeight: 50,
    tabHeight: 60,
    headerButtonWidth: 50,
    searchBarHeight: 30,
    screen: {
        width: width < height ? width : height,
        height: width < height ? height : width,
    },
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 20 : ExtraDimensions.get('STATUS_BAR_HEIGHT'),
    leftMenuWidth: (width < height ? width : height) * (DeviceInfo.isTablet() ? 3/6 : 5/6),
    borderWidth: StyleSheet.hairlineWidth,
    buttonRadius: 4,
    listMarginLeft: 20,
    listTitleHeight: 45,
    uploadImageMaxSize: {
        width: 2560,
        height: 1440,
    },
    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 50
    },
    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 200
    },
    shadow: {
        thin: 0.5,
        small: 1,
        normal: 5,
        large: 10,
    },
}

export default metrics

import React from 'react';
import {
    View, Platform,
    Text, UIManager,
    TouchableOpacity,
    Image, ListView,
    Modal, StyleSheet,
    Keyboard, LayoutAnimation,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import * as Themes from './../../themes';

import StatusBar from './StatusBar';
import Header from './Header';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Themes.Metrics.screenHeight,
            keyboardHeight: 0,
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    keyboardDidShowListener = {};
    keyboardDidHideListener = {};

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow = (e) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        let newSize = Themes.Metrics.screenHeight - e.endCoordinates.height;
        this.setState({
            keyboardHeight: e.endCoordinates.height,
            visibleHeight: newSize
        })
    };

    keyboardDidHide = (e) => {
        // Animation types easeInEaseOut/linear/spring
        // console.log('keyboardDidHide e: ', e);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({
            keyboardHeight: 0,
            visibleHeight: Themes.Metrics.screenHeight
        })
    };

    render() {
        const { visibleHeight, keyboardHeight } = this.state;
        const { statusBarColor } = this.props;
        const title = this.props.title || "";
        console.log(this.props)
        return (
            <View {...this.props} style={[styles.container, (this.props.style || null), {marginBottom: Platform.OS == 'ios' ? keyboardHeight : null}]}>
                {this.props.hadStatusBar &&
                    <StatusBar backgroundColor={statusBarColor} barStyle="light-content"
                        style={[styles.statusBar, (this.props.statusBarStyle || null)]} {...this.props.statusBarProps} />
                }
                {this.props.hadHeader &&
                    <Header {...this.props.headerProps} style={[styles.header, (this.props.headerStyle || null)]}
                        color={this.props.headerColor || Themes.Colors.primary}
                        left={this.props.headerLeft || null}
                        right={this.props.headerRight || null}
                    >
                        {this.props.headerContent ? this.props.headerContent :
                            <Text ellipsizeMode={'tail'} numberOfLines={1} style={[styles.title, Themes.Styles.header, (this.props.titleTextStyle || null)]}>{title}</Text>
                        }
                    </Header>
                }
                <View style={[styles.content, this.props.contentStyle]}>
                    {this.props.children}
                </View>
            </View>
        )

    }
    componentDidMount() {

    }

}

Container.defaultProps = {
    statusBarColor: Themes.Colors.primary,
    hadStatusBar: true,
    statusBarProps: {},
    hadHeader: true,
    headerProps: {},
    contentStyle: {}
};
// Container.propTypes = {
//     statusBarColor: React.PropTypes.string,
//     hadStatusBar: React.PropTypes.bool,
//     statusBarProps: React.PropTypes.object,
//     hadHeader: React.PropTypes.bool,
//     headerProps: React.PropTypes.object,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
    },
    statusBar: {
        
    },
    header: {

    },
    title: {
        color: Themes.Colors.darkText,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginHorizontal: 50,
    },
    content: {
        flex: 1,
    }
}));



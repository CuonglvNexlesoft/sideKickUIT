import React from 'react';
import {
    View,
    Text, Keyboard,
    TouchableOpacity,
    Image, ListView,
    Modal, StyleSheet,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import * as Themes from './../../themes';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const shadowStyle = this.props.shadow ? Themes.Styles.headerShadow : {};
        return (
            <TouchableOpacity style={[styles.container, shadowStyle, {
                    backgroundColor: this.props.color ? this.props.color : 'white',
                    borderBottomWidth: this.props.borderWidth,
                    borderBottomColor: this.props.borderColor,
                }]} activeOpacity={1}
                              onPress={() => Keyboard.dismiss()}
            >
                {this.props.bgImage &&
                    <Image style={styles.headerBg}
                        resizeMode={Image.resizeMode.stretch}
                        source={this.props.bgImage}
                    />
                }
                <View style={styles.contents}>
                    {this.props.children}
                </View>
                <View style={styles.left}>
                    {this.props.left}
                </View>
                <View style={styles.right}>
                    {this.props.right}
                </View>
            </TouchableOpacity>
        )
    }

}

Header.defaultProps = {
    borderWidth: 0,
    borderColor: '#F3F3F3',
    shadow: true,
};

const styles = EStyleSheet.create(shorthand({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Themes.Metrics.headerHeight,
        width: '100%',
        '@media ios': {
            marginTop: 20,
        },
    },
    headerBg: {
        width: '100%',
        height: Themes.Metrics.headerHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    left: {
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: Themes.Metrics.headerHeight,
    },
    right: {
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: Themes.Metrics.headerHeight,
    },
    contents: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: Themes.Metrics.headerHeight,
        width: '100%',
    },

}));



import React from 'react';
import {
    View, Platform,
    Text, UIManager, TouchableOpacity,
    StyleSheet, LayoutAnimation,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import * as Themes from './../../themes';

import Button from './Button';

export default class Collapsable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed,

        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        const title = this.props.title || "";
        return (
            <View {...this.props} style={[styles.container, (this.props.style || null)]}>
                {this.props.renderTitle == null ?
                    <View style={[styles.title, (this.props.titleStyle || null), { backgroundColor: this.props.color }]}>
                        {this.props.renderLeft != null &&
                            <View style={[styles.left, {
                                width: this.props.leftWidth,
                                height: this.props.titleHeight,
                            }]}>
                                {this.props.renderLeft()}
                            </View>
                        }
                        <Button color={this.props.color} height={this.props.titleHeight} rippleColor={this.props.textColor}
                            style={[styles.headerTouchable, (this.props.titleTouchStyle || null)]}
                            onPress={() => this.onTitlePress()}>
                            {this.props.renderTitle ? this.props.renderTitle() :
                                <Text style={[styles.titleText, Themes.Fonts.style.h5, (this.props.titleTextStyle || null), { color: this.props.textColor }]}>{title}</Text>
                            }
                        </Button>
                        {this.props.renderRight != null &&
                            <View style={[styles.right, {
                                width: this.props.rightWidth,
                                height: this.props.titleHeight,
                            }]}>
                                {this.props.renderRight()}
                            </View>
                        }
                    </View>
                    : this.props.renderTitle({ onPress: () => this.onTitlePress(), collapsed: this.state.collapsed })
                }
                <View style={[styles.contents, { maxHeight: this.state.collapsed ? 0 : null }]}>
                    {!this.state.collapsed ? this.props.children : null}
                </View>
            </View>
        )

    }
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.collapsed !== nextProps.collapsed) {
            this.setState({ collapsed: nextProps.collapsed })
            if (this.props.onCollapsed) {
                this.props.onCollapsed(nextProps.collapsed)
            }
        }
    }

    onTitlePress() {
        this.collapse();
        if (this.props.onTitlePress) {
            return this.props.onTitlePress()
        }
    }

    collapse() {
        const collapsed = !this.state.collapsed;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ collapsed });
        if (this.props.onCollapsed) {
            this.props.onCollapsed(collapsed)
        }
    }

}

Collapsable.defaultProps = {
    color: Themes.Colors.primary,
    textColor: Themes.Colors.background,
    collapsed: false,
    titleHeight: 55,
    rightWidth: null,
    right: null,
    left: null,
    renderTitle: null
};

const styles = EStyleSheet.create(shorthand({
    container: {
    },
    title: {
        flexDirection: 'row',

    },
    titleText: {
        fontWeight: 'bold',
    },
    headerTouchable: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    right: {},
    left: {},
    contents: {
    },
}));



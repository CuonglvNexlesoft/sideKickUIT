import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Ripples from './Ripples';
import Button from './Button';
import * as Themes from './../../themes';

export default class CustomTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.tabIcons = [];
        this.tabLabels = [];
    }

    render() {
        const { activeColor, inActiveColor, iconSize, showActiveUnderline, activeTab } = this.props;
        const containerWidth = this.props.containerWidth || Themes.Metrics.screenWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 4,
            backgroundColor: activeColor,
            left: this.props.initialPage * (containerWidth / numberOfTabs),
            bottom: 0,
        };
        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        });
        return <View style={[styles.tabs, this.props.style, { alignItems: 'center', justifyContent: 'center' }]}>
            {this.props.tabs.map((tab, i) => {
                const IconComponent = tab.iconComponent || Icon;
                const badge = tab.badge && tab.badge > 0 ? tab.badge : null;
                return (
                    <Button transparent key={i} rippleColor={activeColor}
                        badge={badge} badgeStyle={styles.tabBadge}
                        onPress={() => this.props.goToPage(i)} style={[styles.tab, (this.props.tabStyle || null)]}>
                        {tab.renderIcon
                            ? tab.renderIcon({
                                color: inActiveColor,
                                size: iconSize,
                                style: [styles.tabIcon, (this.props.iconStyle || null)],
                                ref: (ref) => { this.tabIcons[i] = ref; }
                            })
                            : (tab.icon &&
                                <IconComponent
                                    name={tab.icon}
                                    size={iconSize}
                                    color={inActiveColor}
                                    ref={(ref) => { this.tabIcons[i] = ref; }}
                                    style={[styles.tabIcon, (this.props.iconStyle || null)]}
                                />
                            )
                        }
                        {tab.label &&
                            <Text ref={(ref) => { this.tabLabels[i] = ref; }} ellipsizeMode={'tail'} numberOfLines={1}
                                style={[styles.tabLabel, (this.props.labelStyle || null), {}]}>
                                {tab.label}
                            </Text>
                        }
                    </Button>

                );
            })}
            <Animated.View
                style={[
                    tabUnderlineStyle,
                    {
                        transform: [
                            { translateX },
                        ]
                    },
                    this.props.underlineStyle,
                ]}
            />
        </View>;
    }

    componentDidMount() {
        this._listener = this.props.scrollValue.addListener(value => this.setAnimationValue(value));
        this.setNativePropsInitTab()
    }

    //color between rgb(245,128,32) and rgb(156,156,156)
    iconColor(progress, activeColor = this.props.activeColor, inActiveColor = this.props.inActiveColor) {
        let acComponent; let inComponent;
        if (activeColor.startsWith('#')) {
            acComponent = this.hexToRgb(activeColor);
        } else {
            acComponent = this.rgbToValues(activeColor);
        }
        if (inActiveColor.startsWith('#')) {
            inComponent = this.hexToRgb(inActiveColor);
        } else {
            inComponent = this.rgbToValues(inActiveColor);
        }
        const red = acComponent[0] + (inComponent[0] - acComponent[0]) * progress;
        const green = acComponent[1] + (inComponent[1] - acComponent[1]) * progress;
        const blue = acComponent[2] + (inComponent[2] - acComponent[2]) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    }

    setAnimationValue({ value, }) {
        const { hideLabelInactive, activeColor } = this.props;
        this.tabIcons.forEach((icon, i) => {
            const progress = Math.min(1, Math.abs(value - i))
            this.tabIcons[i].setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
            this.tabLabels[i].setNativeProps({
                style: {
                    color: this.iconColor(progress),
                    maxHeight: hideLabelInactive ? ((this.props.labelStyle.height || 16) * (1 - progress)) : undefined,
                    transform: hideLabelInactive ? [{ scale: 1 - progress }] : undefined,
                },
            });
        });
    }

    setNativePropsInitTab() {
        const { hideLabelInactive, activeColor } = this.props;
        const initialTab = this.props.initialPage;
        this.tabIcons.forEach((icon, i) => {
            const active = initialTab === i;
            this.tabIcons[i].setNativeProps({
                style: {
                    color: this.iconColor(active ? 0 : 1),
                },
            });
            this.tabLabels[i].setNativeProps({
                style: {
                    color: this.iconColor(active ? 0 : 1),
                    maxHeight: hideLabelInactive ? ((this.props.labelStyle.height || 16) * (1 - (active ? 0 : 1))) : undefined,
                },
            });
        });
    }

    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }
    rgbToValues(rgb) {
        return rgb.match(/\d+/g).map(value => parseInt(value));
    }
}

CustomTab.defaultProps = {
    activeColor: 'rgb(75,145,220)', // only rgb and hex color
    inActiveColor: 'rgb(156,156,156)',
    initialPage: 0,
    labelStyle: {
        maxHeight: 16,
    },
    iconSize: 24,
    hideLabelInactive: true,
    renderTabIcon: undefined,
    showActiveUnderline: true,
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        textAlign: 'center',
        minWidth: 72,
    },
    tabIcon: {
        textAlign: 'center'
    },
    tabBadge: {
        top: -3,
        right: 15
    },
    tabs: {
        height: Themes.Metrics.tabHeight,
        // borderTopWidth: Themes.Metrics.borderWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
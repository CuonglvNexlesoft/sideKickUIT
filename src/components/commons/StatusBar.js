import React from 'react';
import { Platform, StyleSheet, StatusBar, Image, View } from 'react-native';
import { Metrics } from '../../themes';

export default class StatusBarLight extends React.Component {
    render() {
        return (Platform.OS === 'android' && Platform.Version >= 21 && this.props.custom ?
            (
                <Image style={styles.statusBarBG} source={this.props.source}>
                    <StatusBar animated
                        backgroundColor="rgba(0,0,0,0)"
                        barStyle="light-content"
                        translucent={true}
                        {...this.props}
                    />
                </Image>
            ) : (
                <View style={[styles.statusBarBG, { backgroundColor: this.props.backgroundColor || 'white' }]}>
                    <StatusBar animated
                        backgroundColor="rgba(0,0,0,0)"
                        translucent={false}
                        barStyle="dark-content"
                        {...this.props}
                    />
                </View>
            )
        )
    }
}
StatusBarLight.defaultProps = {
    custom: false
};

const styles = StyleSheet.create({
    statusBarBG: {
        marginBottom: -Metrics.statusBarHeight,
        height: Metrics.statusBarHeight,
    },
});
import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import * as CommonUtils from '../../utils/CommonUtils';
import Locale from '../../utils/Locale';
import GlobalKeys from '../../constants/GlobalKeys';
import { Metrics, Colors } from '../../themes';

export default class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <View style={[styles.container, {  }]}>
                <Text>MENU TAB</Text>
            </View>
        )
    }

    componentDidMount() {
    }

}

MenuComponent.defaultProps = {
    
};

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
    }
}));
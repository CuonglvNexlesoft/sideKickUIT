import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import * as Progress from 'react-native-progress';

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Progress.CircleSnail style={[styles.container, (this.props.style || null)]}
                color={[this.props.color]}
                size={this.props.size}
                duration={this.props.duration}
                thickness={this.props.strokeWidth}
                hidesWhenStopped={this.props.hideOnUnload}
                animating={this.props.loading} />
        )
    }

}

Spinner.defaultProps = {
    size: 50,
    strokeWidth: 2,
    loading: false,
    duration: 1000,
    color: '#FFFFFF',
    hideOnUnload: true
};

// Spinner.propTypes = {
//     size: React.PropTypes.number,
//     strokeWidth: React.PropTypes.number,
//     loading: React.PropTypes.bool,
//     shapes: React.PropTypes.number,
//     duration: React.PropTypes.number,
//     color: React.PropTypes.string,
//     hideOnUnload: React.PropTypes.bool,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
    },

}));



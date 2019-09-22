import React from 'react';
import {
    View, Platform,
    Text, Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import * as Themes from '../../themes';

import Ripples from './Ripples';

export default class CircleImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Ripples style={[styles.container, {
                borderRadius: this.props.size,
                borderColor: this.props.borderColor,
                borderWidth: this.props.borderWidth,
                minHeight: this.props.size,
                minWidth: this.props.size,
                backgroundColor: '#e9e9e9',
            }]}
                onPress={() => this.onPress()}
            >
                <Image source={this.props.source ?  this.props.source : this.props.defaultImage}
                    defaultSource={this.props.defaultImage}
                    resizeMode={'cover'}
                    style={[styles.image, {
                        height: this.props.size,
                        width: this.props.size,
                        borderRadius: Platform.OS == 'android' ? this.props.size : 0,
                    }]}
                />
            </Ripples>
        )
    }

    onPress(){
        if(this.props.onPress){
            return this.props.onPress()
        }
    }

}

CircleImage.defaultProps = {
    size: 80,
    defaultSource: Themes.Images.defaultImgURI,
    borderColor: Themes.Colors.grey,
    borderWidth: Themes.Metrics.borderWidth * 2
};

const styles = EStyleSheet.create(shorthand({
    container: {
        overflow: 'hidden',
    },
    image: {

    },

}));



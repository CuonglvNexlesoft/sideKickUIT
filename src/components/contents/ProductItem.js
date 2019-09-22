import React from 'react';
import {
    View,
    Text, Image,
} from 'react-native';
import Ripples from '../commons/Ripples';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

// import CacheableImage from 'react-native-cacheable-image';
import Strings from '../../constants/Strings';
import * as Themes from './../../themes';
import * as CommonUtils from '../../utils/CommonUtils';

export default class ProductItem extends React.PureComponent {

    render() {
        const { product, isHighlight } = this.props;
        return (
            <Ripples style={[styles.container, {  }]} onPress={() => this.onPress(product)}>
                <View style={[styles.product, this.props.style || {}, { backgroundColor: isHighlight ? Themes.Colors.accent : Themes.Colors.background }]}>
                    <Image source={{ uri: product.image }} style={[styles.image, { }]} resizeMode="contain" />
                    <Text style={[Themes.Fonts.style.description, { color: isHighlight ? 'white' : Themes.Colors.grey }, styles.name]}>{product.name}</Text>
                    {!CommonUtils.isEmpty(this.props.quantity) &&
                        <Text style={[Themes.Fonts.style.description, { color: Themes.Colors.darkText }, styles.price]}>
                            {this.props.quantity} {Strings.products}
                        </Text>
                    }
                    <Text style={[Themes.Fonts.style.description, { color: Themes.Colors.darkText }, styles.price]}>
                        {CommonUtils.formatCurrency(this.props.price || product.price)}
                    </Text>
                </View>
            </Ripples>
        )

    }

    onPress(product) {
        if (this.props.onPress) {
            return this.props.onPress(product);
        }
    }
}

ProductItem.defaultProps = {
    product: {},
    isHighlight: false,
};

const width = (Themes.Metrics.screenWidth - 5)/(CommonUtils.isTablet() ? 5 : 3) - 20;
const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        margin: 5,
    },
    product: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
    },
    image: {
        width: width,
        height: width,
    },
    name: {
        textAlign: 'center'
    },
    price: {
        textAlign: 'center'
    },

}));





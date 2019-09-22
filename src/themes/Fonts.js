const type = {
    // base: 'Roboto',
    // black: 'Roboto-Black',
    // black_italic: 'Roboto-BlackItalic',
    // bold: 'Roboto-Bold',
    // bold_italic: 'Roboto-BoldItalic',
    // italic: 'Roboto-Italic',
    // light: 'Roboto-Light',
    // light_italic: 'Roboto-LightItalic',
    // medium: 'Roboto-Medium',
    // medium_italic: 'Roboto-MediumItalic',
    // regular: 'Roboto-Regular',
    // thin: 'Roboto-Thin',
    // thin_italic: 'Roboto-ThinItalic',
    // emphasis: 'HelveticaNeue-Italic',

    base: 'Montserrat',
    regular: 'Montserrat-Regular',
    extra_bold: 'Montserrat-ExtraBold',
    black: 'Montserrat-Bold',
    medium: 'Montserrat-Medium',
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Light',
    semi_bold: 'Montserrat-SemiBold',
    extra_light: 'Montserrat-ExtraLight',
    thin: 'Montserrat-Thin',

    base_a: 'Montserrat Alternates',
    black_a: 'MontserratAlternates-Black',
    bold_a: 'MontserratAlternates-Bold',
    extra_bold_a: 'MontserratAlternates-ExtraBold',
    extra_light_a: 'MontserratAlternates-ExtraLight',
    light_a: 'MontserratAlternates-Light',
    medium_a: 'MontserratAlternates-Medium',
    regular_a: 'MontserratAlternates-Regular',
    semi_bold_a: 'MontserratAlternates-SemiBold',
    thin_a: 'MontserratAlternates-Thin'

}

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 8.5
}

const style = {
    h1: {
        fontFamily: type.base,
        fontSize: size.h1
    },
    h2: {
        fontWeight: 'bold',
        fontSize: size.h2
    },
    h3: {
        fontFamily: type.base,
        fontSize: size.h3
    },
    h4: {
        fontFamily: type.base,
        fontSize: size.h4
    },
    h5: {
        fontFamily: type.base,
        fontSize: size.h5
    },
    h6: {
        fontFamily: type.base,
        fontSize: size.h6
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium
    }
}

export default {
    type,
    size,
    style
}

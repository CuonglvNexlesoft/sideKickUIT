import Text from '../../commons/Text';
import images from '../../../themes/Images';
import PropTypes from 'prop-types';
import styles from './styles';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import ActionLineItem from '../../commons/lineItem/ActionLineItem';

const CheckBoxLineItem = ({isGuestMember, onClickAction, isCheck, textLeft, divider, customDividerStyle, styleLeftTextShow, minHeight, style, numberOfLines, type, itemLeft, styleRadioSelected}) => {
    return (
        <TouchableOpacity activeOpacity={isGuestMember ? 1 : 0.5} style={style} onPress={onClickAction}>
            <ActionLineItem
                minHeight={minHeight}
                divider={divider}
                customDividerStyle={customDividerStyle}
                itemLeft={
                    itemLeft ?
                    itemLeft
                    :
                    <Text
                        numberOfLines={numberOfLines}
                        style={[
                            styles.leftTextShow,
                            styleLeftTextShow,
                            isCheck ? {fontWeight: 'bold'} : null,
                        ]}
                        text={textLeft}
                    />
                }
                rightStyle={styleRadioSelected}
                itemRight={
                    <View style={[styles.textWithIoptionHolderconRightContainer, styleRadioSelected]}>
                        {isCheck ? (
                            <View style={[styles.imageContainer, styleRadioSelected]}>
                                <Image source={images.icRadioSelected} />
                            </View>
                        ) : type === "optionHolder" ? <View style={styles.imageContainer}>
                            <Image source={images.icEditInfoSelectedRaw} />
                        </View> : type === "optionModalSearch" ? <View style={styles.imageContainer}>
                            <Image source={images.arrowRightMsgSetting} />
                        </View> : null
                        }
                    </View>
                }
            />
        </TouchableOpacity>
    );
};
CheckBoxLineItem.defaultProps = {
    isCheck: false,
    divider: true,
    minHeight: 60,
    numberOfLines: 1,
    isGuestMember: false,
    itemLeft: null,
};
CheckBoxLineItem.propTypes = {
    isCheck: PropTypes.bool,
    isGuestMember: PropTypes.bool,
    divider: PropTypes.bool,
    textLeft: PropTypes.string,
    onClickAction: PropTypes.func,
    styleLeftTextShow: PropTypes.object,
    minHeight: PropTypes.number,
    numberOfLines: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    itemLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    styleRadioSelected: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};
export default CheckBoxLineItem;


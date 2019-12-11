import Text from "../../commons/Text";
import images from "../../../themes/Images";
import PropTypes from "prop-types";
import styles from "./styles";
import React from "react";
import {View, TouchableOpacity, Image} from "react-native";
import ActionLineItem from "../../commons/lineItem/ActionLineItem";

const FillterSortItem = ({style, onClickAction, textLeft, textLeftSub, textRight, divider, disable, styleLeftTextProperty, sizeIcon, iconLeftSub , hideRight, numberOfLinesTextLeft, numberOfLinesTextSubLeft, minHeight, itemRight, customStyleLeftSubContainer}) => {
  return (
    <TouchableOpacity onPress={onClickAction} disabled={disable} style={style}>
      <ActionLineItem
        divider={divider}
        minHeight={0}
        itemLeft={
        <View style = {styles.leftTextContainer}>
        <Text numberOfLines={numberOfLinesTextLeft} style={[styles.leftTextProperty, styleLeftTextProperty]} text={textLeft}/>
        {textLeftSub && 
        <View style={[styles.leftSubContainer, customStyleLeftSubContainer]}>
        {iconLeftSub && <Image source={iconLeftSub} style={styles.leftSubIcon} />}
        <Text numberOfLines={numberOfLinesTextSubLeft} style={styles.leftTextSubProperty} text={textLeftSub}/>
        </View>
        }
        </View>
        }
        itemRight={!itemRight ? (!hideRight &&
          <View style={styles.textWithIconRightContainer}>
            <Text style={styles.rightTextProperty} text={textRight}/>
            <TouchableOpacity style={{marginLeft: 10}} activeOpacity={1} onPress={onClickAction}>
              <Image source={images.arrowRightMsgSetting} style={sizeIcon}/>
            </TouchableOpacity>
          </View>)
          :
            itemRight
        }
        rightStyle={itemRight ? {marginLeft: 0} : null}

      />
    </TouchableOpacity>
  );
};
FillterSortItem.defaultProps = {
  isCheck: false,
  divider: true,
  textRight: "Premium Fillter",
  iconLeftSub: null,
  itemRight: null,
  style: null
};
FillterSortItem.propTypes = {
  isCheck: PropTypes.bool,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  onClickAction: PropTypes.func,
  divider: PropTypes.bool,
  disable:PropTypes.bool,
  textLeftSub: PropTypes.string,
  styleLeftTextProperty: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  sizeIcon: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  iconLeftSub: PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
  hideRight: PropTypes.bool,
  minHeight: PropTypes.number,
  numberOfLinesTextLeft: PropTypes.number,
  numberOfLinesTextSubLeft: PropTypes.number,
  itemRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  customStyleLeftSubContainer: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
};
export default FillterSortItem;

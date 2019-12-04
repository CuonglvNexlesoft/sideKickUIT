import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import IconButton from "../../../components/commons/IconButton";
import global from "../../../components/commons/_var";
import Image from "../../../themes/Images";
import TextComponent from "../../../components/commons/Text";

const HeaderRefineModal = ({
  heading,
  onClick,
  style,
  styleTitleContainer,
  type,
  onPressOut,
  headingLowerCase,
  fontSize,
  subText,
  styleTextSub
}) => {
  return (
    <View style={[styles.container, style]}>
      <IconButton
        onPressOut={onPressOut}
        nameIcon={Image.btnRectangle}
        onClick={onClick}
        btnStyle={styles.buttonHeaderStyle}
        //disabled
      />
      {heading ? (
        <View style={[styles.titleContainer, styleTitleContainer]}>
          <TextComponent
            text={headingLowerCase ? heading : heading.toUpperCase()}
            size={fontSize ? fontSize : global.sizeP16}
            fontFamily={global.fontBold}
            color={global.color33}
            style={styles.textHeading}
          />
            {
              subText &&  <TextComponent
                  numberOfLines={2}
                  text={subText}
                  size={global.sizeP14}
                  fontFamily={global.fontRegular}
                  color={global.color66}
                  style={[styles.textHeadingSub, styleTextSub]}
              />
            }

        </View>
      ) : type === "profile" ? null : (
        <View
          style={[styles.titleContainer, { height: 40 }, styleTitleContainer]}
        />
      )}
    </View>
  );
};
HeaderRefineModal.defaultProps = {
  heading: ""
};
HeaderRefineModal.propTypes = {
  heading: PropTypes.string,
  subText: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  styleTitleContainer: PropTypes.object,
  headingLowerCase: PropTypes.bool,
  fontSize: PropTypes.number,
  onPressOut: PropTypes.func
};
export default HeaderRefineModal;

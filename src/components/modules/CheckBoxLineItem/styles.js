import { StyleSheet, Platform } from "react-native";
import global from "../../commons/_var";

const styles = StyleSheet.create({
  textWithIconRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight:Platform.OS === 'ios' ? 0 : 25
  },
  leftTextShow: {
    // fontFamily: global.fontSemiBold,
    fontSize: global.sizeP16,
    color: global.color66
  },
  rightTextShow: {
    // fontFamily: global.fontRegular,
    fontSize: global.sizeP12,
    color: global.color71
  },
  imageContainer: { marginLeft: 10 },
});
export default styles;

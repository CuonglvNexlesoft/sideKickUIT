import { StyleSheet } from "react-native";
import global from "../../commons/_var";

const styles = StyleSheet.create({
  textWithIconRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftTextContainer: {
    flexDirection : "column",
    
  },
  leftTextProperty: {
    // fontFamily: global.fontSemiBold,
    fontSize: global.sizeP16,
    color: global.color66
  },
  leftTextSubProperty: {
    // fontFamily: global.fontRegular,
    fontSize: global.sizeP14,
    color: global.colorFb,
    fontStyle: 'italic',
    textDecorationLine: 'underline'

  },
  rightTextProperty: {
    // fontFamily: global.fontRegular,
    fontSize: global.sizeP14,
    color: global.colorA5
  },
  leftSubContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSubIcon:{
    marginRight: 5
  }
});
export default styles;

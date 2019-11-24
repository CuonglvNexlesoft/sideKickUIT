// import React, {Component} from "react";
// import {View} from "react-native";
// import PropTypes from "prop-types";
// import Divider from "../divider/Divider";
// import styles from "./styles";
// import Text from "../texts/Text";
// import global from "../../../styles/_var";
// import {MEMBER_TYPES_REGISTER} from '../../../../redhotpie-shared-lib/constants/memberTypesRegister';

// const TextLineItem = ({
//                           divider,
//                           leftText,
//                           rightText,
//                           minHeight,
//                           coupleText,
//                           memberType,
//                           customStyle
//                       }) => {
//     return (
//         <View style={{flex:1}}>
//             <View
//                 style={[
//                     styles.container,
//                     {minHeight: minHeight, alignItems: "flex-start"}, customStyle
//                 ]}
//             >
//                 <View style={{flex:0.5}}>
//                     <Text
//                         text={leftText}
//                         size={global.sizeP14}
//                         color={global.color33}
//                         fontFamily={global.fontSemiBold}
//                         style={{marginRight: 4, lineHeight: global.sizeP14 + 3}}
//                     />
//                 </View>
//                 <View style={{paddingLeft: 30,flex:1}}>
//                     {(rightText && !coupleText) ? (
//                         <Text
//                             text={rightText}
//                             size={global.sizeP14}
//                             color={global.color33}
//                             fontFamily={global.fontRegular}
//                             style={{textAlign: "right", flex:1, lineHeight: global.sizeP14 + 3}}
//                             numberOfLines={50}
//                         />
//                     ) : null}
//                     {coupleText ? (
//                         <View style={styles.textCoupleContainer}>
//                             <Text
//                                 text={coupleText[0]}
//                                 size={global.sizeP14}
//                                 color={memberType === MEMBER_TYPES_REGISTER.COUPLES  ? global.color56A : global.color33}
//                                 fontFamily={global.fontRegular}
//                                 style={{textAlign: "right",lineHeight: global.sizeP14}}
//                                 numberOfLines={50}
//                             />
//                             {coupleText[1] === null || coupleText[1] === "" || coupleText[1] === undefined ? null : (
//                                 <Text
//                                     text={" / "}
//                                     size={global.sizeP18}
//                                     color={memberType === MEMBER_TYPES_REGISTER.COUPLES ? global.colorFC5 : global.color33}
//                                     fontFamily={global.fontRegular}
//                                     style={{lineHeight: global.sizeP18}}
//                                 />
//                             )}

//                             <Text
//                                 text={coupleText[1]}
//                                 size={global.sizeP14}
//                                 color={memberType === MEMBER_TYPES_REGISTER.COUPLES  ? global.colorFC5 : global.color33}
//                                 fontFamily={global.fontRegular}
//                                 style={{textAlign: "right",lineHeight: global.sizeP14}}
//                                 numberOfLines={50}
//                             />
//                         </View>
//                     ) : null}
//                 </View>
//             </View>
//             {divider ? <Divider/> : null}
//         </View>
//     );
// };
// TextLineItem.defaultProps = {
//     divider: false,
//     minHeight: 30
// };
// TextLineItem.propTypes = {
//     leftText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     rightText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     coupleText: PropTypes.array,
//     minHeight: PropTypes.number,
//     divider: PropTypes.bool,
//     memberType:PropTypes.number
// };
// export default TextLineItem;

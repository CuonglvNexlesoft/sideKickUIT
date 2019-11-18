import EStyleSheet from 'react-native-extended-stylesheet'; //eslint-disable-line import/no-unresolved
import shorthand from 'react-native-styles-shorthand'; //eslint-disable-line import/no-unresolved
import global from '../../../components/commons/_var';
import { Dimensions } from 'react-native'
import Colors from "../../../themes/Colors";

const device = Dimensions.get("window");

export default EStyleSheet.create(shorthand({
    container:{
        width:device.width,
        height:device.height,
        justifyContent: 'flex-end',
        paddingBottom:12,
    },
    content:{
        width:189,
        height:118,
        paddingRight:10,
        paddingLeft:10,
        paddingVertical:15,
        justifyContent:'space-between'
    },
    background:{
        position:'absolute',
        zIndex:-2,
       
    },
    item:{
        marginLeft:10,
    },
    dividerLine:{
        height:1,
        backgroundColor:global.colorD8,
        opacity:0.3
    },
    availabeText:{
        color:global.primaryColor,
    },
    busyText:{
        color:global.orange
    } ,
    awayText:{
        color:global.grayColor,
    },
    iconTooltipIcon:{
        width:4,height:6.3
    },
    styleCirle:{
        height:15,width:15,borderRadius:7.5,justifyContent:'center',alignItems:'center'
    },
    backgroundColorPrimary:{
        backgroundColor:global.primaryColor
    },
    backgroundColorOrange:{
        backgroundColor:global.orange
    },
    backgroundColorGray:{
        backgroundColor:global.grayColor
    },
    styleText:{
        marginLeft:14,fontSize:14
    },
}));

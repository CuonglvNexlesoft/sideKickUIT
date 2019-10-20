import {Dimensions, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'; //eslint-disable-line import/no-unresolved
import shorthand from 'react-native-styles-shorthand'; //eslint-disable-line import/no-unresolved
import global from './_var';

const {height, width} = Dimensions.get('window');

export default EStyleSheet.create(shorthand({
    searchOption: { paddingBottom: 15, paddingTop: 15, paddingLeft: 15,
    '@media android': {
        maxWidth: 305
    },
    
    },
    // ModalProfile
    modalWrapper: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: height >= 810 ? 15 : 0,
        justifyContent: "flex-end"
    },

    modalViewCenter: {
        justifyContent: "center",
        flex: 1
    },

    bgTransparent: {
        backgroundColor: 'transparent'
    },

    modalViewBottom: {
        justifyContent: "flex-end",
        flex: 1
    },

    profileButtonText: {
        color: "white"
    },

    headerProfileModal: {
        backgroundColor: global.colorF4,
        height: 90,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },

    contentProfileModal: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },


    // optionItemModal

    rowIconWithText: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 10
    },

    rowIconTick: {
        flex: 0.2,
        alignItems: "flex-end",
        marginRight: 10
    },

    rowItemButton: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderColor: global.transparentWhite50,
        justifyContent: 'space-between'
    },

    rowItemModal: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: global.transparentWhite50
    },

    iconModal: {
        width: 22
    },


    //  modalConfirm
    modalConfirm: {
        borderRadius: 5,
        backgroundColor: global.colorFF,
        minHeight: 200,
        width: width * 0.95,
        //paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: height>= 815 && Platform.OS==='ios' ? 30: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    modalConfirmEmptyState:{
        borderRadius: 5,
        backgroundColor: global.colorFF,
        minHeight: 240,
        width: width * 0.95,
        //paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: height>= 815 && Platform.OS==='ios' ? 30: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    //headingModalConfirm
    headingModalConfirm: {
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textHeadingModalConfirm: {
        fontSize: 18,
        '@media android': {},
        fontFamily: 'fontBold'
    },
    textHeadingEmptyModalConfirm:{
        fontSize: 18,
        fontFamily: global.fontBold
    },
    textSubEmptyModalConfirm:{
        fontSize: 16,
        fontFamily: global.fontRegular
    },
    headingEmptyModalConfirm: {
        flex: 1,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    friendAndMatchImage:{
        marginBottom: 12
    },
    // descModalConfirm
    descModalConfirm: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
    },

    textDescModalConfirm: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'fontRegular'

    },
    // buttonModalConfirmWrapper
    buttonModalConfirmWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 44,
    },

    buttonModalConfirmFriendsWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        height: 70,
    },

    dividerButtonModalConfirm: {
        borderRightWidth: 1,
        borderColor: global.transparent77,
        height: 44,

    },

    buttonModalConfirm: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },

    textButtonModalConfirm: {
        fontSize: 16,
        //fontFamily: '$fontRegular',
        textAlign: 'center'

    },

    redButtonModalConfirm: {
        color: global.colorRed
    },

    blueButtonModalConfirm: {
        color: '#0076FF'
    },


    //  modalPopup
    modalPopup: {
        borderRadius: 6,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 24,
        paddingHorizontal: width >= 375 ? 20 : 14,

        alignSelf: 'center',
        justifyContent: 'center',
    },
    // headingModalPopup
    headingModalPopup: {
        alignItems: 'center'
    },

    textHeadingModalPopup: {
        fontSize: 20,
        fontFamily: global.fontBold,
        color: global.color66
    },
    // bodyModalPopup
    bodyModalPopup: {
        paddingTop: 10
    },

    textBodyModalPopup: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: global.fontSemiBold,
        color: global.color66,
        paddingBottom: 15
    },
    // footerModalPopupWrapper
    footerModalPopupWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },

    textForgotPopup: {
        fontSize: 14,
        fontFamily: global.fontBold,
        color: global.color66,
        justifyContent: 'flex-start',
    },

    buttonModalPopup: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 1
    },
   
    icCloseModal: {
        alignSelf: 'flex-end'
    },

    headingModalIntroduce: {
        fontSize: 20,
        marginTop: 10,
        fontFamily: global.fontLight,
        color: global.color66,
        marginBottom: 6,
        textAlign: 'center'
    },

    textSelectModalIntroduce: {
        fontSize: 12,
        fontFamily: global.fontSemiBold,
        color: global.color66,
        textAlign: 'center'
    },
    // tabModalIntroduce
    tabModalIntroduceWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 7,
        marginTop: 14
    },

    tabModalIntroduce: {
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: global.colorF4,
        // height: 40,

        // width: width >= 375 ? 106 : 86,
        // width: width -10,
        '@media android': {
            // width: width >= 375 ? 116 : 100
            // width: width -10
        },
        // marginRight: 5,
        // marginLeft: 5,
        borderColor: 'transparent',
        // borderWidth: 1,
        // flex : 1,
        minHeight: 40
        // backgroundColor:"red"
        // height : 40,
        // width : 120,
    },

    tabSelectedModalIntroduce: {
        borderColor: global.primaryColor,
        borderWidth: 1
    },

    tabSelectingModalIntroduce: {
        backgroundColor: global.primaryColor
    },

    textTabModalIntroduce: {
        fontSize: 14,
        fontFamily: global.fontLight,
        color: '#282F37'
    },

    textSelectedModalIntroduce: {
        color: global.primaryColor,
        fontFamily: global.fontSemiBold
    },

    textSelectingModalIntroduce: {
        color: 'white',
        fontFamily: global.fontSemiBold
    },

    icTriangleGreen: {
        alignSelf: 'center',
        marginTop: -1
    },

    //  contentModalIntroduce
    contentModalIntroduce: {},

    itemContentModalIntroduce: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textItemModalIntroduceWrapper: {
        borderBottomWidth: 1,
        borderColor: 'rgba(151, 151, 151, .2)',
        paddingBottom: 10,
        paddingTop: 10,
        flex: 1
    },

    textItemModalIntroduce: {
        fontSize: 14,
        fontFamily: global.fontRegular,
        color: global.color66
    },

    checkItemModalIntroduce: {
        backgroundColor: 'white',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20
    },

    checkItemActiveModalIntroduce: {
        backgroundColor: global.primaryColor,
        borderColor: global.primaryColor
    },
    modalRefine: {
        backgroundColor: 'white',
        height: Platform.OS === 'ios' ? height - 25 : height - 15,//>= 812 ? height - 50 : height - 30,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        //flex:1
        // height:813,
    },
    modalEventFilter:{
        height:  Platform.OS === 'ios' ? height - 25 : height - 15,//400,//>= 812 ? height - 50 : height - 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "transparent",
        padding: 0
    },
    modalRefineOption: {
        height: Platform.OS === 'ios' ? height - 25 : height - 15,//>= 812 ? height - 50 : height - 30,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        backgroundColor: "transparent",
        //height: "50%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        justifyContent: 'center'
        //flex:1
        // height:813,
    },
    modalConversation: {
        height: Platform.OS === 'ios' ? height - 25 : height - 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        backgroundColor: "transparent",
        justifyContent: 'flex-end'
        //flex:1
        // height:813,
    },
    modalRefineFull: {
        height: "100%",
        width: "100%",
        backgroundColor: global.color00
    },
    modalProfileMatch: {
        backgroundColor: "rgba(0,0,0,.65)",
        height: '100%',
    },
    dividerRowModal: {
        backgroundColor: global.transparent204,
        height: 1
    },
    ///////////////////////QUICK MESSAGE
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        //alignItems: 'center'
    },
    footerContainer: {
        // marginTop:5,
        backgroundColor: "white",
        alignItems: "center",
        // alignSelf: "center",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 60,
    },
    container: {
        // flex: 1
        backgroundColor: 'white'
    },
    heading: {
        width: "100%",
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 10,
        //flex:1
        //marginHorizontal: 10
    },
    buttonStyle: {
        marginTop: 6,
        backgroundColor: global.lightGreen,
        borderRadius: 15,
        borderColor: 'transparent',
        alignSelf: "flex-end",
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        //marginLeft:10
    },
    buttonDelete: {
        backgroundColor: global.red,
        borderRadius: 15,
        borderColor: 'transparent',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 20
        //marginLeft:10
    },
    btnTextStyle: {
        fontFamily: global.fontBold,
        fontSize: global.sizeP12,
        color: global.colorFF,
        marginLeft: 0
    },
    modalCenter: {},
    headerModalMessageForm: {
        backgroundColor: global.colorF4,
        height: 40,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 10
    },
    textHeaderModalMessageForm: {
        fontSize: 16,
        // fontWeight:'$fontWeightNormal',
        ////color: '$colorTextBlack',
        //fontFamily: '$fontExtraBold'
    },
    // contentModalMessageForm
    contentModalMessageForm: {
        backgroundColor: "#fff",
        padding: 10
    },
    textInputModalMessageForm: {
        fontSize: 14,
        // fontWeight: '$fontWeightNormal',
        color: global.color33,
        //fontFamily: '$fontRegular',
    },
    // textInputTitle: {
    //   fontSize: 14,
    //   color: global.colorTextBlack,
    //   height: 45,
    //   fontFamily: '$fontRegular',
    //   fontWeight: 'bold'

    // },
    textInputModalMessageForm: {
        fontSize: 14,
        // fontWeight: '$fontWeightNormal',
        //color: '$colorTextBlack',
        height: height * 1 / 3,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: global.colorCc,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 10,
        //fontFamily: '$fontRegular',

    },
    textInputTitle: {
        fontSize: 14,
        // fontWeight: '$fontWeightNormal',
        //color: '$colorTextBlack',
        height: 45,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: global.colorCc,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        //marginBottom: 10,
        //paddingBottom: 10,
        //fontFamily: '$fontRegular'

    },
    // footerModalMessageForm
    footerModalMessageForm: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    singleButtonModalMessageForm: {
        justifyContent: 'flex-end'
    },
    icRemoveTextModal: {
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        right: 8
    },
    rowInput: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: global.colorCc
    },
    boxInputModal: {
        fontSize: 14,
        // fontWeight: '$fontWeightNormal',
        //color: '$colorTextBlack',
        height: 45,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        //marginBottom: 10,
        //paddingBottom: 10,
        fontFamily: global.fontRegular,
        flex: 1,
        paddingBottom: 0,
    },
    greenButton:{
        paddingBottom: 3,
        borderRadius: 17.5,
        height: 30,
        width: 150,
        borderWidth: 0.5,
        backgroundColor: global.lightGreen,
        alignSelf: 'center',
    },
    whiteButton:{
        paddingBottom: 3,
        borderRadius: 15,
        height: 30,
        width: 150,
        borderWidth: Platform.OS === 'android' ? 0.5 : 0,
        borderColor: global.color97,
        backgroundColor: global.colorFF,
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: .1,
    },
   
    buttonText: {
        color: global.colorFF,
        fontSize: global.sizeP16,
        fontFamily: global.fontBold,
        marginLeft: 0
    },
    textEmptyFriends:{
        fontSize: 14,
        color: global.color64,
    },
    LeftTextProperty: {
        lineHeight: 17,
        fontFamily: global.fontBold,
        color: global.color64,
        fontSize: global.sizeP16,
        flexWrap: "wrap",
        width: '100%'
    },
}));
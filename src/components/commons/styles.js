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
        //fontFamily: global.fontRegular
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
        // fontFamily: global.fontSemiBold,
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
        // fontFamily: global.fontSemiBold,
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
        // fontFamily: global.fontSemiBold
    },

    textSelectingModalIntroduce: {
        color: 'white',
        // fontFamily: global.fontSemiBold
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
        // //fontFamily: global.fontRegular,
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
        // //fontFamily: global.fontRegular,
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
    fontBold: {
        // fontWeight: '$fontWeightBold'
      },
      rowContainer: {
        flexDirection: 'row'
      },
      leftContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight : 10,
      },
      flexEnd: {
        alignItems: 'flex-end',
        // flex: 1 ,
      },
      flexDirectionRow:{
        flexDirection: 'row'
      },
      flexDirectionColumn: {
        flexDirection: 'column'
      },
      alignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
      },
    
      margin6: {
        marginLeft: 6,
        marginRight: 6
      },
      marginRight6: {
          marginRight: 6
      },
      marginLeft6: {
        marginLeft: 6
      },
      marginLeft10: {
        marginLeft: 10
      },
      margin10: {
        marginLeft: 10,
        marginRight: 10
      },
    
      marginLeft12: {
        marginLeft: 10
      },
      marginLeft16: {
        marginLeft: 16
      },
      marginRight22: {
        marginRight: 22
      },
      font18: {
        fontSize: 18
      },
    
      colorSizeBold: {
        // color: '$colorTextBlack',
        //fontSize: '$fontPrimary',
        //fontFamily :"$fontBold"
      },
    
      colorSizeBold00: {
        color: global.color00,
        //fontSize: '$fontPrimary',
        //fontFamily :"$fontBold"
      },
    
      colorLightItalic: {
        //color: '$colorTextBlack',
        //fontSize: '$fontPrimary',
        // fontFamily: global.fontLightItalic
      },
    
    
      modalLoading: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
    
      modalViewCenter: {
        justifyContent: "center",
        flex: 1
      },
    
      bgOpacity8: {
        backgroundColor: 'rgba(0,0,0,.8)'
      },
    
      modalViewBottom: {
        justifyContent: "flex-end",
        flex: 1
      },
      profileButtonView: {
        backgroundColor: "#7EC34C"
      },
    
      profileButtonText: {
        color: "white"
      },
      headerProfileModal: {
        backgroundColor:global.colorF4,
        height: 90,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row'
      },
    
      avatarContainer:{
        flexDirection: 'row'
      },
      contentProfileModal: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
      },
      contentReportModal: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 6,
      },
    
      textProfileModal: {
        fontSize: 17,
        // fontWeight: '$fontWeightNormal',
        //color: '$colorTextBlack',
        // fontFamily :"$fontBold"
      },
      rightArrow:{
        width:20,
        height:20
      },
      textSexOld: {
        fontSize: 14,
        // fontWeight: '$fontWeightNormal',
        // color: '$colorTextBlack',
        // fontFamily :"$fontLight"
      },
      textLocation: {
        fontSize: 14,
        // color: '$colorTextBlack',
        // fontFamily :"$fontLight"
      },
    
      matchUser: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 20,
      },
      titleDontMatchUser: {
        fontSize: 18,
        // color: '$primaryColor',
        // fontFamily :"$fontBold"
      },
      titleMatchUser: {
        fontSize: 18,
        color: global.primaryColor,
        // fontFamily :"$fontBold"
      },
      descMatchUser: {
        fontSize: 18,
        // color: '$colorTextBlack',
        // fontFamily :"$fontLight"
      },
    
    // optionItemModal
      dividerRowModal: {
        backgroundColor: global.transparent204,
        height: 1
      },
    
      optionItemModal: {
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 10
      },
    
      rowIconWithText: {
        flexDirection: 'row',
        flex : 1,
        marginRight : 10
      },
    
      rowIconTick: {
        flex : 0.2 ,
        alignItems:"flex-end",
        marginRight : 10
      },
    
      rowItemButton: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderColor:global.transparent204,
        justifyContent:'space-between'
      },
    
      rowItemModal: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: global.transparent204
      },
      noneBorder: {
        borderBottomWidth: 0
      },
    
     
    
      iconModal: {
        width:22
      },
    
    
    
    //conversationModal
      conversationModal: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5
      },
    
      ReportModal:{
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 10,
       
      },
    
    //  modalConfirm
      modalConfirm: {
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,.84)',
        paddingTop: 20,
        marginLeft: 40,
        marginRight: 40,
        alignSelf:'center',
        justifyContent:'center'
      },
      //headingModalConfirm
      headingModalConfirm: {
        alignItems:'center'
      },
      textHeadingModalConfirm: {
        fontSize: 17,
        '@media android': {
        },
        // fontFamily:'$fontBold'
      },
      // descModalConfirm
      descModalConfirm: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
        paddingBottom: 20
      },
      textDescModalConfirm: {
        fontSize: 14,
        textAlign: 'center',
        // fontFamily:'$fontRegular'
    
      },
      // buttonModalConfirmWrapper
      buttonModalConfirmWrapper: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth: .6,
        height: 44,
        borderColor:global.transparent77,
        '@media android': {
          borderTopWidth: .8,
        },
      },
      dividerButtonModalConfirm: {
        width: .6,
        height: 44,
        backgroundColor: global.transparent77,
        '@media android': {
        },
      },
      buttonModalConfirm: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        flex: 1
      },
      textButtonModalConfirm: {
        fontSize: 16,
        // fontFamily:'$fontRegular',
        textAlign: 'center'
    
      },
      redButtonModalConfirm: {
        color: global.colorRed
      },
      blueButtonModalConfirm: {
        color: '#0076FF'
      },
    
      modalAddCustomStyle: {
        width: width,
        backgroundColor: "transparent"
      },
      avatarWrapper: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center'
    },
    bgAvatar: {
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    w140: {
        height: 140,
        width: 140,
        borderRadius: 70
    },
    w100: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    w50: {
        height: 50,
        width: 50,
        borderRadius: 25
    },

    width50: {
        width: 50
    },

    w30: {
        height: 30,
        width: 30,
        borderRadius: 15
    },

    w35: {
        height: 35,
        width: 35,
        borderRadius: 17.5
    },

    w25: {
        height: 25,
        width: 25,
        borderRadius: 12.5
    },
    w60: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    w66: {
        height: 66,
        width: 66,
        borderRadius: 33
    },
    w70: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    w40: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    status: {
        height: 11,
        width: 11,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },
    statusLarge: {
        height: 15,
        width: 15,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 8,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },
    status2: {
        height: 13,
        width: 13,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 5,
        right: 0,
        borderColor: 'white',
        borderWidth: 2
    },

    statusSmall: {
        height: 11,
        width: 11,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },

    timer: {
        backgroundColor: global.colorFF,
        width: 30,
        height: 18,
        position: 'absolute',
        bottom: 0,
        left: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    timerText: {
        fontSize: 10,
        fontFamily: global.fontExtraBold
    },

    icPin: {
        '@media android': {},
        height: 14,
        width: 14,
        position: 'absolute',
        top: 2,
        left: 9,
    },

    icPinSmall: {
        '@media android': {},
        height: 8,
        width: 8,
        position: 'absolute',
        top: 0,
        left: 1
    },

    textAvatar: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        // //fontFamily: global.fontRegular
    },
    textAvatarBig: {
        fontSize: 20
    },
    textAvatarNormal: {
        fontSize: 16
    },
    textAvatarSmall: {
        fontSize: 10
    },
    textLimit: {
        fontSize: 16,
        color: global.colorRed,
        lineHeight: global.sizeP18
    },
    userNameWrapper: {
        marginTop: 6,
        alignItems: "center"
    },

    userNameText: {
        fontSize: 12,
        color: global.colorTextBlack,
        // //fontFamily: global.fontRegular
    },
    // Detail Avatar
    nameText: {
        // //fontFamily: global.fontRegular
    },
    statusText: {
        fontSize: 12,
        color: global.color53,
        // //fontFamily: global.fontRegular
    },

    // buttonComponent
    buttonPrimaryContainer: {
        '@media android': {},
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        paddingBottom: 4
    },
    buttonTextGeneral: {
        fontSize: 18,
        // fontFamily: global.fontSemiBold
    },
    buttonTextBlack: {
        color: global.colorTextPrimary,
        fontSize: 18,
        // fontFamily: global.fontBold
    },
    // smallButton
    smallButtonContainer: {
        '@media android': {},
        height: 30,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 6
    },
    smallButtonWhite: {
        backgroundColor: 'white',
        borderColor: global.colorCc,
        borderWidth: 1
    },
    smallButtonText: {
        fontSize: 13,
        // fontFamily: global.fontSemiBold,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    // smallButtonReg1
    buttonSmallReg1: {
        //width: width >= 375 ? 100 : 80,
        minWidth: width >= 375 ? 120 : 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 3
    },
    buttonSmallReg2: {
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        paddingBottom: 4
    },
    textSmallReg: {
        fontSize: width >= 375 ? 18 : 16,
        // fontFamily: global.fontSemiBold
    },

    // background
    bkgPrimary: {
        backgroundColor: global.primaryColor
    },
    bkgWhite: {
        backgroundColor: 'white'
    },

    bkgTransparent: {
        backgroundColor: 'rgba(0,0,0,0)'
    },


    textColorWhite: {
        color: 'white'
    },
    textColorBlack: {
        color: global.colorTextBlack
    },


    //TimeCout
    timeText: {
        fontSize: 12,
        color: global.color53,
        // //fontFamily: global.fontRegular
    },

    //Item button
    textRowItemModal: {
        fontSize: 16,
        marginLeft: 12,
        // fontWeight: global.fontWeightLight',
        color: global.color33,
        fontFamily: global.fontBold

    },
    textDescItemModal: {
        fontSize: 13,
        marginLeft: 12,
        // fontWeight: global.fontWeightLight',
        color: global.colorBb,
        // //fontFamily: global.fontRegular
    },
    textLimitItemModal: {
        fontSize: 16,
        marginLeft: 4,
        // fontWeight: global.fontWeightLight',
        color: global.colorRed,
        //fontFamily: global.fontRegular
    },


    //  TextDropdown
    fontHeading: {
        fontSize: global.fontTitle,
        fontFamily: global.fontExtraBold,
        fontWeight: 'bold'
    },

    fontHeadingColorFocused: {
        color: global.grayColor
    },

    arrowColorFocused: {
        tintColor: global.grayColor
    },

    fontHeadingSmall: {
        fontSize: 16,
        color: global.color66,
        fontFamily: global.fontExtraBold,
        fontWeight: global.fontWeightDark
    },


    //Item Option Modal
    iconModal: {
        width: 25,
        alignItems: 'center',
    },

    rowItemButton: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderColor: global.transparent204,
        justifyContent: 'space-between'
    },

    rowIconWithText: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },

    rowIconTick: {
        flex: 0.2,
        alignItems: "flex-end",
        marginRight: 10
    },

    backIconReg: {
    },
    optionItemContainer: { flexDirection: "row", alignItems: "center", paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 15 },
    buttonOutlineStyle: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, 1)',
        height: 40,
        // width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnOutLineStyle: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        //fontFamily: global.fontRegular
    },
    styleContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -8 },
    styleDot: {
        backgroundColor: global.primaryColor,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#FFFF',
        borderWidth: 1
    },
    extraStyleText: {
        fontSize: 9, marginLeft: 2,
        color: '#7EC34D',
        backgroundColor: 'transparent',
    },
    onlineStatusText: {
        fontSize: 12, marginLeft: 7,
        color: '#333333',
        backgroundColor: 'transparent',
    },
    containerName: { flexDirection: 'row', alignItems: 'center', marginTop: -4 },
    filterButton: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        height: 48
    },

    actionFloatingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: global.primaryColor,
        position: 'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        elevation: 4,
    },
    unReadCount: {
        maxHeight: 20,
        borderRadius: 10,
        bottom: 15,
        right: -14,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderColor: global.colorFF,
        borderWidth: 1,
        paddingVertical: 2,
    },
    unReadCountNumber: {
        fontSize: global.sizeP12,
        lineHeight: global.sizeP12 + 3,
        // textAlign:'center',
        // fontFamily: global.fontSemiBold,
        color: global.colorFF,
    },
    colorSizePrimary: {
        // color: '$colorTextBlack',
        // fontSize: '$fontPrimary',
        // fontFamily: "$fontRegular",
        backgroundColor: 'transparent'
    },

    textUnderLine: {
        color: 'white',
        // fontSize: '$fontPrimary',
        // fontFamily: "$fontRegular",
        textDecorationLine: "underline",
        backgroundColor: 'transparent'
    },

    textGuide: {
        fontSize: 14,
        color: 'white',
        lineHeight: 15,
        marginBottom: 10,
        // margin: '22px 0 18px 0',
        // fontFamily: global.fontSemiBold,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },

    headingScreen: {
        color: global.color81,
        fontSize: 23,
        textAlign: 'center',
        marginTop: 25,
      //  fontWeight: "700",
        // fontFamily: global.fontSemiBold,
        lineHeight: 25,
        backgroundColor: 'transparent'
    },
    viewComment: {
        flexDirection: 'row'
    },
    styleTextComment: {
        textAlign: 'center',
        width: '60%',
        fontFamily: global.fontLightItalic,
        fontSize: global.sizeP14,
        color: global.color33
    },
    unReadCount:{
        color:global.colorFF,
       
        fontWeight:"200",
        fontSize:12,
    },
    textContent:{
        position:'absolute',
        left:0,
        bottom:7,
        width:20,
        height: 15,
        alignItems:'center'
    },
    iconMess : {
    height:20,
    width:20,
    },
    messageCountContainer:{
        justifyContent:'center',
        width:25,
        height:25,
    },
    avatarWrapper: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center'
    },
    bgAvatar: {
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    w140: {
        height: 140,
        width: 140,
        borderRadius: 70
    },
    w100: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    w50: {
        height: 50,
        width: 50,
        borderRadius: 25
    },

    width50: {
        width: 50
    },

    w30: {
        height: 30,
        width: 30,
        borderRadius: 15
    },

    w35: {
        height: 35,
        width: 35,
        borderRadius: 17.5
    },

    w25: {
        height: 25,
        width: 25,
        borderRadius: 12.5
    },
    w20: {
        height: 20,
        width: 20,
        borderRadius: 12.5
    },
    w60: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    w66: {
        height: 66,
        width: 66,
        borderRadius: 33
    },
    w70: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    w40: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    status: {
        height: 11,
        width: 11,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },
    statusLarge: {
        height: 15,
        width: 15,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 8,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },
    status2: {
        height: 13,
        width: 13,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 5,
        right: 0,
        borderColor: 'white',
        borderWidth: 2
    },

    statusSmall: {
        height: 11,
        width: 11,
        backgroundColor: '#7ccb45',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        right: -2,
        borderColor: 'white',
        borderWidth: 2
    },

    timer: {
        backgroundColor: global.colorFF,
        width: 30,
        height: 18,
        position: 'absolute',
        bottom: 0,
        left: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    timerText: {
        fontSize: 10,
        fontFamily: global.fontExtraBold
    },

    icPin: {
        '@media android': {},
        height: 14,
        width: 14,
        position: 'absolute',
        top: 2,
        left: 9,
    },

    icPinSmall: {
        '@media android': {},
        height: 8,
        width: 8,
        position: 'absolute',
        top: 0,
        left: 1
    },

    textAvatar: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        //fontFamily: global.fontRegular
    },
    textAvatarBig: {
        fontSize: 20
    },
    textAvatarNormal: {
        fontSize: 16
    },
    textAvatarSmall: {
        fontSize: 10
    },
    textLimit: {
        fontSize: 16,
        color: global.colorRed,
        lineHeight: global.sizeP18
    },
    userNameWrapper: {
        marginTop: 6,
        alignItems: "center"
    },

    userNameText: {
        fontSize: 12,
        color: global.colorTextBlack,
        //fontFamily: global.fontRegular
    },
    // Detail Avatar
    nameText: {
        //fontFamily: global.fontRegular
    },
    statusText: {
        fontSize: 12,
        color: global.color53,
        //fontFamily: global.fontRegular
    },

    // buttonComponent
    buttonPrimaryContainer: {
        '@media android': {},
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        paddingBottom: 4
    },
    buttonTextGeneral: {
        fontSize: 18,
        fontFamily: global.fontSemiBold
    },
    buttonTextBlack: {
        color: global.colorTextPrimary,
        fontSize: 18,
        fontFamily: global.fontBold
    },
    // smallButton
    smallButtonContainer: {
        '@media android': {},
        height: 30,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 6
    },
    smallButtonWhite: {
        backgroundColor: 'white',
        borderColor: global.colorCc,
        borderWidth: 1
    },
    smallButtonText: {
        fontSize: 13,
        fontFamily: global.fontSemiBold,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    // smallButtonReg1
    buttonSmallReg1: {
        //width: width >= 375 ? 100 : 80,
        minWidth: width >= 375 ? 120 : 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 3
    },
    buttonSmallReg2: {
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        paddingBottom: 4
    },
    textSmallReg: {
        fontSize: width >= 375 ? 18 : 16,
        fontFamily: global.fontSemiBold
    },

    // background
    bkgPrimary: {
        backgroundColor: global.primaryColor
    },
    bkgWhite: {
        backgroundColor: 'white'
    },

    bkgTransparent: {
        backgroundColor: 'rgba(0,0,0,0)'
    },


    textColorWhite: {
        color: 'white'
    },
    textColorBlack: {
        color: global.colorTextBlack
    },


    //TimeCout
    timeText: {
        fontSize: 12,
        color: global.color53,
        //fontFamily: global.fontRegular
    },

    //Item button
    textRowItemModal: {
        fontSize: 16,
        marginLeft: 12,
        // fontWeight: global.fontWeightLight',
        color: global.color33,
        fontFamily: global.fontBold

    },
    textDescItemModal: {
        fontSize: 13,
        marginLeft: 12,
        // fontWeight: global.fontWeightLight',
        color: global.colorBb,
        //fontFamily: global.fontRegular
    },
    textLimitItemModal: {
        fontSize: 16,
        marginLeft: 4,
        // fontWeight: global.fontWeightLight',
        color: global.colorRed,
        //fontFamily: global.fontRegular
    },


    //  TextDropdown
    fontHeading: {
        fontSize: global.fontTitle,
        fontFamily: global.fontExtraBold,
        fontWeight: 'bold'
    },

    fontHeadingColorFocused: {
        color: global.grayColor
    },

    arrowColorFocused: {
        tintColor: global.grayColor
    },

    fontHeadingSmall: {
        fontSize: 16,
        color: global.color66,
        fontFamily: global.fontExtraBold,
        fontWeight: global.fontWeightDark
    },


    //Item Option Modal
    iconModal: {
        width: 25,
        alignItems: 'center',
    },

    rowItemButton: {
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        borderColor: global.transparent204,
        justifyContent: 'space-between'
    },

    rowIconWithText: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },

    rowIconTick: {
        flex: 0.2,
        alignItems: "flex-end",
        marginRight: 10
    },

    backIconReg: {
    },
    optionItemContainer: { flexDirection: "row", alignItems: "center", paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 15 },
    buttonOutlineStyle: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255, 1)',
        height: 40,
        // width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnOutLineStyle: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        //fontFamily: global.fontRegular
    },
    styleContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -8 },
    styleDot: {
        backgroundColor: global.primaryColor,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#FFFF',
        borderWidth: 1
    },
    extraStyleText: {
        fontSize: 9, marginLeft: 2,
        color: '#7EC34D',
        backgroundColor: 'transparent',
    },
    onlineStatusText: {
        fontSize: 12, marginLeft: 7,
        color: '#333333',
        backgroundColor: 'transparent',
    },
    containerName: { flexDirection: 'row', alignItems: 'center', marginTop: -4 },
    filterButton: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        height: 48
    },

    actionFloatingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: global.primaryColor,
        position: 'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        elevation: 4,
    },
    unReadCount: {
        maxHeight: 20,
        borderRadius: 10,
        bottom: 15,
        right: -14,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderColor: global.colorFF,
        borderWidth: 1,
        paddingVertical: 2,
    },
    unReadCountNumber: {
        fontSize: global.sizeP12,
        lineHeight: global.sizeP12 + 3,
        // textAlign:'center',
        fontFamily: global.fontSemiBold,
        color: global.colorFF,
    }
}));
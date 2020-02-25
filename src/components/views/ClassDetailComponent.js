import React, { Component, PropTypes } from 'react';
import {
  View, TextInput,
  Text, Image,
  TouchableHighlight,
  StyleSheet, Keyboard,
  UIManager, Platform,
  LayoutAnimation,
  PixelRatio,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  Linking,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import GlobalKeys from '../../constants/GlobalKeys';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
const { SlideInMenu } = renderers;
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../commons/Container';
import Button from '../commons/Button';
import Ripples from '../commons/Ripples';
import CircleImage from '../commons/CircleImage';
import Spinner from '../commons/Spinner';
import Toast from '../commons/Toast';
import { ToastTypes } from './../commons/Toast';
import DismissKeyboard from 'dismissKeyboard';

import LinearGradient from 'react-native-linear-gradient';

import * as Themes from '../../themes';
import Strings from '../../constants/Strings';
import * as CommonUtils from '../../utils/CommonUtils';
import io from "socket.io-client";
import ModalMenu from '../commons/ModalMenu';
import IconButton from '../commons/IconButton';
import Avatar from '../commons/Avatar';
import ChatRoomUserStatusPopUp from '../modules/ChatRoomUserStatusPopUp';
import TextComponent from '../commons/Text';
import PDFView from 'react-native-view-pdf';
import ModalRollCall from '../modules/ModalRollCall';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import IconTooltip from '../commons/IconTooltip';
import ModalGetLink from '../commons/ModalGetLink';
import { DocumentView, RNPdftron } from 'react-native-pdftron';
import global from '../commons/_var'
import SelectLinkModal from '../commons/SelectLinkModal';
import SetupModal from '../commons/SetupModal';
import DownloadedFileModal from '../commons/DownloadedFileModal';
import LocationPulseLoader from '../modules/Pulse/PulseLoader';
import { throwStatement } from '@babel/types';
const { width, height } = Dimensions.get('window');
export default class ClassDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessages: [],
      text: '',
      isShowUserStatus: false,
      isShowChat: true,
      setMessageType: 1,
      memberInClass: 0,
      fileUrl: null,
      localFile: "",
      permissionGranted: Platform.OS === 'ios' ? true : false,
      listDownloadedFile: [],
      isShowPopupTest: false,
      listNotifyForTeacher:[],
      listNotifyForStudent:[],
      hasChangePDF: false,
      limitIHaveQuetion: false
    };
    this.openFile = this.openFile.bind(this);
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
    this._viewer = null;
  }

  createTest = () => {
    Actions[ScreenName.TEST]({})
    this.setState({isShowPopupTest: false})
  }

  renderEmptyState() {
    return (
      <View style={{ height: 200, backgroundColor: global.colorFF, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, borderWidth: 1, borderColor: global.lightBlue }}>
        <IconButton nameIcon={Themes.Images.icMssEmpty} iconSize={{ width: 60, height: 30 }} />
        <TextComponent text={"No chat message"} />
      </View>
    );
  }

  renderItemMessage(item) {
    switch (item.user.userType) {
      case 1:
        if (item.message.type === 3)
          return (
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingVertical: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                <View style={{}}>
                  <IconButton nameIcon={Themes.Images.icVerify} btnStyle={{ paddingHorizontal: 10 }} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.name}>{'Anonymous'}</Text>
                  <Text numberOfLines={5} style={{ fontStyle: 'italic' }}>{item.message.body}</Text>
                </View>
              </View>
            </View>
          );
        if (item.message.type === 2)
          if(this.props.userInfo.userType === 0 || this.props.userInfo.userId === item.user.userId)
          return (
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingVertical: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                <View style={{}}>
                  <Avatar
                    ref="avatar"
                    showOnline={false}
                    user={{ userId: 1 }}
                    size="s-small"
                    canPress={false}
                    isDynamicallyAvatar
                  />
                </View>
                <View style={{ justifyContent: 'center', borderRadius: 10, backgroundColor: global.colorEb, padding: 5 }}>
                  <Text style={styles.name}>{item.user.displayName}</Text>
                  <Text numberOfLines={5} style={{ fontStyle: 'italic' }}>{item.message.body}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton nameIcon={Themes.Images.icEyeWhisper} />
                    <Text style={{ color: '#c2c2d6', fontStyle: 'italic', fontSize: 8 }}>Only teacher can see your message</Text>
                  </View>
                </View>
              </View>
            </View>
          );
          else return null;
        if (item.message.type === 1)
        return (
          <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingVertical: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
              <View style={{}}>
                <Avatar
                  ref="avatar"
                  showOnline={false}
                  user={{ userId: 1 }}
                  size="s-small"
                  canPress={false}
                  isDynamicallyAvatar
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.name}>{item.user.displayName}</Text>
                <Text numberOfLines={5} style={{ fontStyle: 'italic' }}>{item.message.body}</Text>
              </View>
            </View>
          </View>
        );
        break;
      case 0:
          return (
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingVertical: 5, backgroundColor: global.orange, marginVertical: 10, borderRadius: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
                <View style={{}}>
                  <Avatar
                    ref="avatar"
                    showOnline={false}
                    user={{ userId: 1 }}
                    size="s-small"
                    canPress={false}
                    isDynamicallyAvatar
                  />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.name}>{item.user.displayName}</Text>
                  <Text numberOfLines={5} style={{ fontStyle: 'italic' }}>{item.message.body}</Text>
                </View>
              </View>
            </View>
          );
        break;
    }
  }

  renderListMessage() {
    if (this.state.chatMessages.length === 0) return this.renderEmptyState();
    return (
      <FlatList
        ref={'flatList'}
        data={this.state.chatMessages}
        style={{ minHeight: 200, maxHeight: 400, backgroundColor: 'white', paddingHorizontal: 15, borderWidth: 1, borderColor: global.lightBlue }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => this.renderItemMessage(item)
        }
      />
    );
  }

  async openFile() {
    //https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf
    // const localFile = `${RNFS.DocumentDirectoryPath}/1.pdf`;
    // const options = {
    //   fromUrl: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf',
    //   toFile: localFile
    // };
    // RNFS.downloadFile(options).promise
    // .then(() => 
    // console.log('downloaded'))
    // .then(() => {
    //   // success
    // })
    // .catch(error => {
    //   // error
    // });
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      this.setState({ localFile: res.uri.replace("file://", "") });
      // FileViewer.open(res.uri.replace("file://", "") )
      //   .then(() => {
      //     // success
      //   })
      //   .catch(error => {
      //     // error
      //   });
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  onDownLoadFile = (fileName) => {
    // let absolutePath = RNFS.DocumentDirectoryPath + '/aaaaa.pdf';
    const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    const options = {
      fromUrl: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf',
      toFile: localFile
    };
    RNFS.downloadFile(options).promise
      .then(() => this.setState({ localFile: localFile }))
    // FileViewer.open(localFile))
    // .then(() => {
    //   // success
    // })
    // .catch(error => {
    //   // error
    // });

  }

  onGetListFile = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        // console.log('GOT RESULT', result.filter(e => e.name.includes(".pdf")), result[0].isFile(), result[1].isFile())
        this.setState({
          listDownloadedFile: result.filter(e => e.name.includes(".pdf"))
        },
          () => this.refs.downloadedFileModal.openModal()
        )

        // stat the first file
        // return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
    // .then((statResult) => {
    //   if (statResult[0].isFile()) {
    //     // if we have a file, read it
    //     return RNFS.readFile(statResult[1], 'utf8');
    //   }

    //   return 'no file';
    // })
    // .then((contents) => {
    //   // log the file contents
    //   console.log(contents);
    // })
    // .catch((err) => {
    //   console.log(err.message, err.code);
    // });
  }

  renderToolbarInput() {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: global.colorFF,
      }}>
        <Avatar
          onPress={() => this.setState({ isShowUserStatus: !this.state.isShowUserStatus })}
          ref="avatar"
          showOnline={false}
          user={{ userId: 1 }}
          size="small"
          canPress={true}
          isDynamicallyAvatar
          styleAvatar={{ marginLeft: 15 }}
          borderColor={this.state.setMessageType == 1 ? '#7EC34D' : this.state.setMessageType == 2 ? '#E67E22' : '#757575'}
          isBorder
        />
        <View style={{ flex: 1 }}>
          <TextInput
            style={{
              height: 35,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 15,
              backgroundColor: 'white'
            }}
            placeholder={'Type message'}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.text}
          />
        </View>
        <IconButton
          nameIcon={Themes.Images.icSend}
          onClick={() => this.sendMessage()}
        />
      </View>
    );
  }

  onSelectFileFromModal = (path) => {
    this.setState({ localFile: path })
  }

  render() {
    // console.log(this.state.localFile)
    // const resourceType = 'url';
    // let absolutePath = RNFS.DocumentDirectoryPath + '/x1.pdf';
    // let resources = {
    //   file: this.state.fileUrl,
    //   url: 'https://www.cs.colorado.edu/~kena/classes/5828/s10/presentations/softwaredesign.pdf',
    //   base64: 'JVBERi0xLjMKJcfs...',
    // };
    // console.log(this.props.classState.selectedClass && this.props.classState.selectedClass.listDocs)
    let themeColor = this.props.settingState && this.props.settingState.colorTheme ? { backgroundColor: this.props.settingState.colorTheme} : null;
    return (
      <Container
        title={this.props.class.name.toUpperCase()}
        headerLeft={
          <IconButton nameIcon={Themes.Images.icBackArrowBlack} onClick={() => {
            this.state.hasChangePDF ? this._viewer && this._viewer.saveDocument().then((filePath) => {
              console.log('saveDocument', filePath);
              Actions.pop()
            }):
            Actions.pop()
          }} btnStyle={{ paddingLeft: 15 }} />
        }
        style={themeColor}
        headerRight={
          
          this.props.userInfo.userType === 0 && 
          <IconButton nameIcon={Themes.Images.icSettings} 
          iconSize={{height: 25, width: 25}}
          // onClick={() => this.refs.modalConversationMenu.showModal()} 
          onClick={() => this.refs.setupModal.openModal()} 
          btnStyle={{ paddingRight: 25 }} />
          //:
          // <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 10 }}>
          //     <IconButton nameIcon={Themes.Images.icSettingSetting} onClick={() => this.refs.setupModal.openModal()} />
          //     <TextComponent text={45} style={{ position: 'absolute', backgroundColor: 'red', borderRadius: 10, minWidth: 20, padding: 2, left: 20, top: 0 }} />
          // </View>
        }
        titleTextStyle={{ color: Themes.Colors.primary, fontSize: 25, fontWeight: 'bold', width: 250 }}
        statusBarColor={Themes.Colors.transparent}
        statusBarProps={{ barStyle: "dark-content" }}>
        <View style={{ flex: 1, paddingHorizontal: 5, paddingBottom: 15, backgroundColor: global.colorFF }}>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderBottomWidth: 3, borderBottomColor: global.color56A, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 10 }}>
              <IconButton nameIcon={Themes.Images.icNotificationOutLine} onClick={() => this.refs.selectLinkModal.openModal()} />
              {this.state.listNotifyForTeacher.length != 0 &&
              <View style={{justifyContent:'center', alignItems: 'center', backgroundColor: 'red', minWidth: 20, borderRadius: 20, padding: 2, position: 'absolute', top: 0, left: 18}}>
                <TextComponent text={this.state.listNotifyForTeacher.length} textAlign={'center'} />
              </View>}
              {this.props.classState.selectedClass && this.props.userInfo.userType === 1 && this.props.classState.selectedClass.listDocs && this.props.classState.selectedClass.listDocs.length != 0 &&
              <View style={{justifyContent:'center', alignItems: 'center', backgroundColor: 'red', minWidth: 20, borderRadius: 20, padding: 2, position: 'absolute', top: 0, left: 18}}>
                <TextComponent text={this.props.classState.selectedClass.listDocs.length} textAlign={'center'} />
              </View>}
            </View>

            <TouchableOpacity
              onPress={() => {
                this.refs.modalGetLink.openModal()
              }}
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10, }}>
              <IconButton nameIcon={Themes.Images.icSearch} />

              <TextComponent text={"Find"} style={{}} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10 }}>
              <IconTooltip
                style={{ paddingRight: 15 }}
                onPress={this.onGetListFile}
                textView={<TextComponent text={"Recent files"} style={{ textDecorationLine: 'underline', fontStyle: 'italic', }} />}
              />
              {/* <IconTooltip
                onPress={() => {
                  this.refs.modalGetLink.openModal()
                }}
                textView={<TextComponent text={"Read Online"} style={{ textDecorationLine: 'underline', fontStyle: 'italic', }} />}
              /> */}

              <IconButton nameIcon={Themes.Images.icFolderEditProfile} onClick={this.openFile} btnStyle={{ paddingLeft: 15 }} />
            </View>
          
          </View>
          <View style={{ flex: 1, backgroundColor: global.colorFF, justifyContent: 'flex-end' }}>
            {this.state.localFile !== "" && 
            <DocumentView
              ref={(c) => this._viewer = c}
              // document={resources['url']}
              document={this.state.localFile}
              // document={absolutePath}
              readOnly={false}
              showLeadingNavButton={true}
              leadingNavButtonIcon={Platform.OS === 'ios' ? 'ic_close_black_24px.png' : 'ic_arrow_back_white_24dp'}
              onLeadingNavButtonPressed={this.onLeadingNavButtonPressed}
              onAnnotationChanged={({action, annotations}) => { 
                console.log('annotations changed', action, annotations); 
                this.setState({hasChangePDF: true})
              }}
            />}
            <View style={{ backgroundColor: global.lightBlue, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                  <TextComponent text={'Question: '} style={{ paddingRight: 15 }} />
                  {this.props.userInfo.userType === 1 && <IconTooltip
                    style={{ borderWidth: 1, justifyContent: 'center', padding: 5, borderRadius: 15, backgroundColor: 'white', borderColor: global.colorF4,}}
                    onPress={this.onIhaveAQuestion}
                    disable={!this.state.limitIHaveQuetion}
                    textView={<TextComponent text={"I have a question!"} style={{ textDecorationLine: 'underline', fontStyle: 'italic', padding: 3 }} />}
                  />}
                </View>

                <IconButton
                  nameIcon={this.state.isShowChat ? Themes.Images.icArrowDownProfile : Themes.Images.icArrowDownProfile}
                  btnStyle={!this.state.isShowChat ? { transform: [{ rotate: '180deg' }], paddingLeft: 25 } : {paddingRight: 25}}
                  onClick={() => {
                    this.setState({ isShowChat: !this.state.isShowChat })
                  }}
                />
              </View>
              {this.state.isShowChat && this.renderListMessage()}
              {this.state.isShowChat && this.renderToolbarInput()}
            </View>
          </View>
          {this.state.isShowUserStatus && <View style={{
            position: 'absolute',
            bottom: 65,
            left: 0,
            zIndex: 2,
          }}>
            <ChatRoomUserStatusPopUp
              onItemClick={this.onUserStatusItemClick}
              closeView={this.onShowStatusPopup}
            />
          </View>}
        </View>

        {this.state.isShowPopupTest && <View style={{position: 'absolute', bottom: height*0.8, right: 30}}>
          <LocationPulseLoader
          backgroundColor={global.red}
            item={
              <TouchableOpacity 
              onPress={this.createTest}
              style={{width: 50, height: 50, backgroundColor: 'white',  borderRadius: 40, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#f54242'}}
              >
                  {/* <TextComponent text={'Quick test!'} style={{fontWeight: 'bold', fontSize: 10, justifyContent: 'center', alignItems: 'center' }} textAlign={'center'} numberOfLines={2}/> */}
                  <IconButton nameIcon={Themes.Images.icEditNotesProfile} onClick={this.createTest}/>
              </TouchableOpacity>
            }
          />
        </View>}
    
        <ModalMenu
          ref={"modalConversationMenu"}
          onCreateTest={this.createTest}
          onStartRollCall={this.onStartRollCall}

        />
        <ModalRollCall
          ref={'modalInput'}
          styleModalPopupCustom={{ width: '95%', paddingLeft: 10, paddingRight: 10 }}
          onSubmmit={this.onSubmitRollCall} />
        <ModalGetLink
          ref={'modalGetLink'}
          styleModalPopupCustom={{ width: '95%', paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}
          onDownLoadFile={this.onDownLoadFile}
          onSubmmit={(link) => this.setState({ fileUrl: link })} />
        <SelectLinkModal
          styleRefineModal={{ height: 500, backgroundColor: 'transparent' }}
          type={'full'}
          ref={'selectLinkModal'}
          forWho={this.props.userInfo.userType}
          selectedClass={this.props.classState.selectedClass}
          listNotifyForTeacher={this.state.listNotifyForTeacher}
          onClearList={()=>{this.setState({listNotifyForTeacher: []})}}
          onDownLoadFile={this.onDownLoadFile}
          />
        <DownloadedFileModal
          styleRefineModal={{ height: 500, backgroundColor: 'transparent' }}
          listDownloadedFile={this.state.listDownloadedFile.reverse()}
          onSelectFile={this.onSelectFileFromModal}
          type={'full'}
          ref={'downloadedFileModal'} />
        <SetupModal
          styleRefineModal={{ height: 800, backgroundColor: 'transparent' }}
          onStartTest={this.onStartTest}
          onStartRollCall={this.onStartRollCall}
          type={'full'}
          onCreateDoc={this.onCreateDoc}
          ref={'setupModal'} />
      </Container>
    );
  }

  onCreateDoc = (link) => {
    let currentDate = new Date
    let params = {
      LOP_FK: this.props.classState.selectedClass.id,
      URL: link,
      NgayTao: currentDate.getMilliseconds()
    }
    this.props.DocsActions.creatDoc(params)
  }

  onIhaveAQuestion=()=>{
    this.setState({
      limitIHaveQuetion: true
    }, ()=>setTimeout(()=>this.setState({
      limitIHaveQuetion: false
    }), 3000))
    let objMessage = {};
    this.socket.emit("i have a question", JSON.stringify(objMessage));
  }

  onShowStatusPopup = () => {
    this.setState({
      isShowUserStatus: false
    })
  }

  onUserStatusItemClick = (item) => {
    this.onShowStatusPopup();
    this.setState({
      setMessageType: item
    })
  }

  async requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          permissionGranted: true
        });
        console.log("Storage permission granted");
      } else {
        this.setState({
          permissionGranted: false
        });
        console.log("Storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  onLeadingNavButtonPressed = () => {
    console.log('leading nav button pressed');
    if (Platform.OS === 'ios') {
      Alert.alert(
        'App',
        'onLeadingNavButtonPressed',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: true }
      )
    } else {
      BackHandler.exitApp();
    }
  }

  componentDidMount() {
    // console.log('123')
    if (Platform.OS === 'android') {
      this.requestStoragePermission();
    }
    // this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    this.socket = io("https://stark-bayou-32028.herokuapp.com/");
    // this.socket = io("http://localhost:3000");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, JSON.parse(msg)] });
      console.log(JSON.parse(msg).message.type)
      if (JSON.parse(msg).message && JSON.parse(msg).message.type === 2) {
        let objRollCall = {
          title: JSON.parse(msg).user.displayName,
          link: JSON.parse(msg).message.body
        }
        this.setState({ listNotifyForTeacher: [objRollCall, ...this.state.listNotifyForTeacher] });
      }

    });
    if (this.props.userInfo.userType !== 0)
    {
      this.socket.on("roll call", msg => {
        let objRollCall = JSON.parse(msg)
        this.refs.modalInput && this.refs.modalInput.openModal(objRollCall.timeout, objRollCall.key);
      });
    }
  
    this.socket.on("roll call success", msg => {
      this.setState({ memberInClass: this.state.memberInClass + 1 });
    });

      this.socket.on("test", msg => {
        // console.log('test', this.socket)
        let objRollCall = JSON.parse(msg)
        if(this.props.userInfo.userType === 1) this.setState({isShowPopupTest: true}, ()=>setTimeout(()=>this.setState({isShowPopupTest: false}), 10000))
      });

      this.socket.on("i have a question", msg => {
        let objRollCall = {
          title: "Le Van Cuong",
          link: "I have a question!"
        }
        this.setState({ listNotifyForTeacher: [ objRollCall,...this.state.listNotifyForTeacher] });
      });

  }
  componentWillUnmount() {
    // this.keyboardWillShowListener.remove();
    // this.keyboardDidHideListener.remove();
  }

  onChangeText(_text) {
    this.setState({
      text: _text
    })
  }

  onSubmitRollCall = () => {
    let objMessage = {};
    this.socket.emit("roll call success", JSON.stringify(objMessage));
  }

  onStartRollCall = () => {
    let objMessage = { timeout: 1000, key: "123", };
    // console.log('000', this.socket)
    this.socket.emit("roll call", JSON.stringify(objMessage));
  }

  onStartTest = () => {
    let objMessage = { timeout: 1000, key: "123", };
    // console.log('000', this.socket)
    this.socket.emit("test", JSON.stringify(objMessage));
  }

  sendMessage() {
    Keyboard.dismiss();
    this.refs.flatList && this.refs.flatList.scrollToEnd();
    let objMessage = { user: this.props.userInfo, message: { body: this.state.text, type: this.state.setMessageType } };
    this.socket.emit("chat message", JSON.stringify(objMessage));
    this.setState({ text: "" });
  }

}

ClassDetailComponent.defaultProps = {
  // name: null,
};



const styles = EStyleSheet.create(shorthand({
  container: {
    flex: 1,
    backgroundColor: Themes.Colors.background,
    justifyContent: 'center'
  },
  contents: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  infoText: {
    color: Themes.Colors.background,
    fontSize: 20,
    marginBottom: 20,
  },

  inputPanel: {
    width: '85%',
  },
  input: {
    width: '100%',
    height: 30,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: Themes.Colors.background,
    paddingHorizontal: 10,
    // borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: Themes.Colors.background,
    borderWidth: Themes.Metrics.borderWidth,
    borderColor: Themes.Colors.border,
    borderRadius: 5,
  },
  // loading: {
  //     position: 'absolute',
  //     marginLeft: -40,
  //     marginTop: -15,
  // },
  // loadingText: {
  //     alignSelf: 'center',
  //     color: 'white',
  //     marginTop: 10,
  // },
  loginSocial: {
    flexDirection: 'row',
    marginVertical: 10,
  },




}));
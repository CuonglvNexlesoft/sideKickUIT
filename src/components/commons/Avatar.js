import React, { Component } from 'react';
import { View, TouchableOpacity, Image, AppRegistry, StyleSheet } from 'react-native';
import styles from './styles';
import global from "./_var";
import PropTypes from 'prop-types';
import Text from "./Text";
import Images from "../../themes/Images";
import * as constants from "../../constants/constant";
import * as userActions from "../../actions/UserActions";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// import * as myStore from "../../../../redhotpie-shared-lib/store/myStore";
import FastImage from 'react-native-fast-image';



class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fail: true,
      avatarUrl: "",
    };
    this.isLoadingPhotoAPI = false;
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  isEmptyString(str) {
    return str === undefined || str === "" || str === "";
  }

  randomColorAvatar(str) {
    let charCode = 0;
    if (str && str.length) charCode = str.charCodeAt(0) + str.length;
    let index = charCode % constants.AVATAR_COLOR_RANGE.length;
    return constants.AVATAR_COLOR_RANGE[
      index < constants.AVATAR_COLOR_RANGE.length ? index : 0
      ];
  }

  componentDidMount() {
    console.log(this.props.usersState.data)
    if (this.props.isDynamicallyAvatar) {
      // console.log("get avatar photo");
      let user = this.props.usersState.data.find(e => e.userId == this.props.user.userId);
      if (user && !this.isEmptyString(user.avatarUrl)) {
        this.updateUpdateAvatar(user.avatarUrl, false);
      }
      else if(!this.props.usersState.isWaitingAvatarLoading && this.props.isConversation && this.state.avatarUrl === ""){
        this.isLoadingPhotoAPI = true;
        // this.props.userActions.getMainPhoto(this.props.user.userId).then(res => {
        //   if (res.success) {
        //     //console.log("bbb", res.data.thumbUrl, this.props.user.userId)
        //     this.updateUpdateAvatar(res.data.thumbUrl, true);
        //   }
        // });
      }
      else if ( 
        this.state.avatarUrl == "" && !this.isLoadingPhotoAPI && !this.props.isConversation) {
        this.isLoadingPhotoAPI = true;
        // this.props.userActions.getMainPhoto(this.props.user.userId).then(res => {
        //   if (res.success) {
        //     //console.log("bbb", res.data.thumbUrl, this.props.user.userId)
        //     this.updateUpdateAvatar(res.data.thumbUrl, true);
        //   }
        // });
      }
    }
    else {
      this.updateUpdateAvatar(this.props.user.avatarUrl, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isDynamicallyAvatar && nextProps.user && nextProps.user.avatarUrl !== this.state.avatarUrl) {
      this.updateUpdateAvatar(nextProps.user.avatarUrl, false);

    }
    if (nextProps.user.userId !== this.props.user.userId) {
      this.updateUpdateAvatar("", false);
      this.isLoadingPhotoAPI = false;
      if (this.props.isDynamicallyAvatar) {
        let user = nextProps.usersState.data.find(e => e.userId == nextProps.user.userId);
        if (user && !this.isEmptyString(user.avatarUrl)) {
          this.updateUpdateAvatar(user.avatarUrl, false);
        } 
        else if(!this.isLoadingPhotoAPI && !nextProps.usersState.isWaitingAvatarLoading && nextProps.isConversation){
          this.isLoadingPhotoAPI = true;

          // this.props.userActions.getMainPhoto(nextProps.user.userId).then(res => {
          //   if (res.success) {
          //     //console.log("bbb", res.data.thumbUrl, this.props.user.userId)
          //     this.updateUpdateAvatar(res.data.thumbUrl, true);
          //   }
          // });
        }
        else if(!this.props.isConversation && this.state.avatarUrl === ""){
          this.isLoadingPhotoAPI = true;
          // this.props.userActions.getMainPhoto(nextProps.user.userId).then(res => {
          //   if (res.success) {
          //     this.updateUpdateAvatar(res.data.thumbUrl, true);
          //   }
          // });
        }
      }
      else {
        this.updateUpdateAvatar(nextProps.user.avatarUrl, false);
      }
    }

    if(!this.isLoadingPhotoAPI && !nextProps.usersState.isWaitingAvatarLoading && nextProps.isConversation && this.state.avatarUrl === ""){
      this.isLoadingPhotoAPI = true;
      let user = nextProps.usersState.data.find(e => e.userId == nextProps.user.userId);
        if (user && !this.isEmptyString(user.avatarUrl)) {
          this.updateUpdateAvatar(user.avatarUrl, false);
        } else {
          // this.props.userActions.getMainPhoto(nextProps.user.userId).then(res => {
          // if (res.success) {
          //   //console.log("bbb", res.data.thumbUrl, this.props.user.userId)
          //   this.updateUpdateAvatar(res.data.thumbUrl, true);
          // }
          // });
        }

    }
      else if (this.state.avatarUrl === "" && !this.isLoadingPhotoAPI && !nextProps.isConversation) {
        //console.log("aaa", this.state.avatarUrl)
        this.isLoadingPhotoAPI = true;
        // this.props.userActions.getMainPhoto(nextProps.user.userId).then(res => {
        //   //console.log("update",res);
        //   if (res.success) {
        //     this.updateUpdateAvatar(res.data.thumbUrl, true);
        //   }
        // });
      }
  }
  

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.fail !== this.state.fail 
      || nextProps.user.online !== this.props.user.online 
      || nextProps.pinned !== this.props.pinned 
      || nextState.avatarUrl !== this.state.avatarUrl
      || nextProps.isLive !== this.props.isLive 
      || nextProps.timer !== this.props.timer
      || nextProps.borderColor !== this.props.borderColor
      // || !utils.deepEqual(nextProps.usersState,this.props.usersState)
    ) {
      return true;
    }
    return false;
  }

  updateUpdateAvatar(url, fail) {
    this.setState({
      avatarUrl: url,
      fail: fail
    });
  }

  onLoad() {
    this.setState({
      fail: false
    });
    this.props.onLoadComplete();
  }

  onError() {
  }

  onPress() {
    this.props.user && this.props.onPress(this.props.user);
  }

  render() {

    let styleSize = styles.w50;
    let width = styles.width50;
    let styleStatus = styles.status;
    let styleName = styles.textAvatarNormal;
    let styleIconPinned = styles.icPin;
    let pinIcon = null;
    let user = this.props.user;
    let styleBorder = {};

    if (this.props.size === "large") {
      styleSize = styles.w100;
      styleName = styles.textAvatarBig;
      styleStatus = styles.statusLarge;
    }
    else {
      if (this.props.size === "small") {
        styleSize = styles.w30;
        styleName = styles.textAvatarSmall;
        styleIconPinned = styles.icPinSmall;
        styleStatus = styles.statusSmall;
      }
      else {
        if (this.props.size == "x-large") {
          styleSize = styles.w140;
          styleName = styles.textAvatarBig;
          styleStatus = styles.statusLarge;
        } else {
          if (this.props.size == constants.AVATAR_SIZE.w60) {
            styleSize = styles.w60;
            styleName = styles.textAvatarBig;
            styleStatus = styles.status2;
          } else {
            if (this.props.size == constants.AVATAR_SIZE.w70) {
              styleSize = styles.w70;
              styleName = styles.textAvatarBig;
              styleStatus = styles.statusLarge;
            } else {
              if (this.props.size == constants.AVATAR_SIZE.X_NORMAL) {
                styleSize = styles.w66;
                styleName = styles.textAvatarBig;
                styleStatus = styles.statusLarge;
              } else {
                if (this.props.size == constants.AVATAR_SIZE.MEDIUM) {
                  styleSize = styles.w40;
                } else {
                  if (this.props.size == constants.AVATAR_SIZE.S_SMALL) {
                    styleSize = styles.w25;
                    styleName = styles.textAvatarSmall;
                    styleIconPinned = styles.icPinSmall;
                    styleStatus = styles.statusSmall;
                  } else {
                    if (this.props.size == constants.AVATAR_SIZE.w35) {
                      styleSize = styles.w35;
                      styleName = styles.textAvatarSmall;
                      styleIconPinned = styles.icPinSmall;
                      styleStatus = styles.statusSmall;
                    }else {
                      if (this.props.size == constants.AVATAR_SIZE.READ_INBOX) {
                        styleSize = styles.w20;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (!user.online || !this.props.showOnline) {
      styleStatus = null;
    }
    if (this.props.pinned) {
      pinIcon = (
        <View style={styleIconPinned}>
          <Image
            resizeMode={'contain'}
            source={Images.icBack}
          />
        </View>
      );
    }


    let userName = user.displayName;
    let shortName = userName ? userName.substring(0, 1).toUpperCase() : "G";
    let randomBackground = { backgroundColor: this.randomColorAvatar(userName || "G") };
    let opacity = 0;
    if (!this.state.fail) {
      opacity = 1;
    }
    if (this.props.isBorder) {
      styleBorder = {
        borderWidth: 2,
        borderColor: this.props.borderColor ? this.props.borderColor :this.props.isLive ? global.primaryColor : global.colorFF,
        shadowColor: global.color98,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      };
    }
    return (
      <View>
        <View style={[styles.avatarWrapper, this.props.styleAvatar]}>
          <View>
            <TouchableOpacity
              disabled={!this.props.canPress}
              onPress={() => this.onPress()}
              style={[styleSize, styles.bgAvatar, styleBorder]}
            >
              {this.isEmptyString(this.state.avatarUrl) ?
                <View>
                  <FastImage
                    style={[styleSize, { opacity: opacity }, styles.bgAvatar, styleBorder]}
                    //source={{ uri: this.state.avatarUrl, priority: FastImage.priority.normal }}
                    source ={{uri :"https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp.jpg"}}
                    onLoad={this.onLoad}
                    onError={this.onError}
                  />

                  {!this.state.fail ?
                    null :
                    <View style={[styleSize, styles.bgAvatar, randomBackground, { position: "absolute" }]}>
                      <Text style={[styles.textAvatar, styleName]} text={shortName} />
                    </View>
                  }

                </View>

                :
                <View style={[styleSize, styles.bgAvatar, randomBackground]}>
                  <Text style={[styles.textAvatar, styleName]} text={shortName} />
                </View>}

            </TouchableOpacity>
            <View style={styleStatus} />

          </View>
          {
            this.props.showName ?
              <View style={[styles.userNameWrapper, width]}>
                <Text style={styles.userNameText} text={userName} />
              </View>
              :
              null
          }
        </View>
        {pinIcon}
        {this.props.timer &&
          <View style={styles.timer} >
            <Text style={styles.timerText} text={this.props.timer} />
          </View>
        }

      </View>
    );
  }
}

Avatar.defaultProps = {
  showOnline: true,
  size: "normal",
  showName: false,
  pinned: false,
  canPress: false,
  //screen: constants.SCREENS_NAME.MESSENGERS_INBOX,
  onLoadComplete: () => {
  },
  isDynamicallyAvatar: false,
  timer: null,
  isBorder: false,
  isConversation: false
};

Avatar.propTypes = {
  showOnline: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'normal', "x-large", constants.AVATAR_SIZE.w60, constants.AVATAR_SIZE.w70, constants.AVATAR_SIZE.w35,
    constants.AVATAR_SIZE.X_NORMAL, constants.AVATAR_SIZE.MEDIUM, constants.AVATAR_SIZE.S_SMALL, constants.AVATAR_SIZE.READ_INBOX]),
  pinned: PropTypes.bool,
  showName: PropTypes.bool,
  user: PropTypes.object.isRequired,
  canPress: PropTypes.bool,
  screen: PropTypes.string,
  onLoadComplete: PropTypes.func,
  isDynamicallyAvatar: PropTypes.bool,
  userActions: PropTypes.object,
  usersState: PropTypes.object,
  timer: PropTypes.string,
  onPress: PropTypes.func,
  isBorder: PropTypes.bool,
  isConversation: PropTypes.bool,
  borderColor: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    usersState: state.userState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Avatar
);
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
  FlatList
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

export default class ClassDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      password: null,
      // keyboard: false,
      focusEmail: false,
      focusFullname: false,
      focusPass: false,
      borderTextinputColor: '#070707'
    };
  }

  render() {
    return (
      <Container
        title={this.props.class.name}
        headerLeft={
          <Button width={Themes.Metrics.headerButtonWidth} color={'transparent'} onPress={() => Actions.pop()}>
              <Icon name='ios-menu' style={{ color: Themes.Colors.background, fontSize: 26 }} />
          </Button>
        }
        titleTextStyle={{ color: Themes.Colors.background }}
        statusBarColor={Themes.Colors.transparent}
        statusBarProps={{ barStyle: "dark-content" }}>
        <View style={{ flex: 1, paddingHorizontal: 10, paddingBottom: 15 }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,]}
            //style={{backgroundColor: 'red',}}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row', justifyContent: "flex-start", paddingBottom: 10, paddingLeft: 15 }}>
                <Text style={styles.name}>item.name</Text>
              </View>
            }
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center', alignItems: 'center',
            width: "100%",
          }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                width: '80%'
              }}
            // onChangeText={text => this.onChangeClassName(text)}
            // value={className}
            />
            <TouchableOpacity
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'gray',
              }}>
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }

  componentDidMount() {
    // this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));

  }
  componentWillUnmount() {
    // this.keyboardWillShowListener.remove();
    // this.keyboardDidHideListener.remove();
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
import React, { Component, PropTypes } from 'react';
import {
    View,
    Text, Alert, Image,
    TouchableOpacity,
    StyleSheet,
    PixelRatio,
    Platform,
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import GlobalKeys from '../../constants/GlobalKeys';

import Icon from 'react-native-vector-icons/Ionicons';

import Ripples from './../commons/Ripples';
import Container from './../commons/Container';
import Collapsable from './../commons/Collapsable';

import * as Themes from '../../themes';
import Strings from '../../constants/Strings';
import * as CommonUtils from '../../utils/CommonUtils';
import BuildUtils from '../../utils/BuildUtils';
import Locale from '../../utils/Locale';
import TextComponent from '../commons/Text';
import global from '../commons/_var'
import Avatar from '../commons/Avatar';
const defaultImage = Themes.Images.default_avatar;
const {height}=Dimensions.get('window')
const locales = [
    { locale: 'en-US', name: 'english' },
    { locale: 'vi-VN', name: 'vietnamese' },
];

export default class LeftMenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settings: this.props.settingState.settings,
            locales: locales,
            localeIndex: 0,
        };

    }

    render() {
        const { appState } = this.props;
        // const { } = this.state;
        return (
            <Container hadHeader={false} hadStatusBar={false} style={styles.container}
            >
                <View style={styles.contents}>
                    {this.renderSettings()}
                </View>
            </Container>
        );
    }

    componentDidMount() {
        // console.log('======LOCALE TEST:', this.state.settings)
        // this.changeLanguageSetting(this.state.settings.locale)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.settingState.settings !== nextProps.settingState.settings) {
            this.setState({ settings: nextProps.settingState.settings })
        }
    }

    renderSettings() {
        const { settings } = this.state;
        return (
            <View style={{ flex: 1, paddingHorizontal: 15, paddingBottom: 50}}>
                {/* {this.renderLanguages()} */}
                <View style={{  flexDirection: 'row' , alignItems: 'center'}}>
                    <View>
                        <Avatar
                            ref="avatar"
                            showOnline={false}
                            user={{ userId: 1 }}
                            size="w70"
                            canPress={false}
                            isDynamicallyAvatar
                        />
                    </View>

                    <View style={{ justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                        <TextComponent text={"Le Van Cuong"} style={{ paddingTop: 5, paddingBottom: 5, fontSize: 15, fontWeight: 'bold' }} />
                        <View style={{ height: 25, width: 100, borderRadius: 50, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                            <TextComponent text={"Student"} />
                        </View>
                    </View>
                </View>
                {this.renderChangeTheme()}
                {this.renderLanguages()}
                {this.renderLogout()}
            </View>
        )
    }

    renderChangeTheme(){
        return (
            <View style={{justifyContent: 'flex-start', paddingVertical: 15}}>
                <TextComponent text={Strings.theme}/>
                <View style={{paddingLeft: 60, flexDirection: 'row'}}>
                    <View style={{width: 25, height: 25, backgroundColor: 'rgb(156,156,156)', marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.red, marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.green, marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.colorFF8, marginRight: 5}}/>
                </View>
                <View style={{paddingLeft: 60, flexDirection: 'row', paddingTop: 5}}>
                    <View style={{width: 25, height: 25, backgroundColor: global.color33, marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.color35D, marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.lightBlue, marginRight: 5}}/>
                    <View style={{width: 25, height: 25, backgroundColor: global.purple, marginRight: 5}}/>
                </View>
            </View>
        )
    }

    renderLogout(){
        return (
            <View style={{justifyContent:'center', alignItems: 'center', paddingTop: 40}}>
                <TouchableOpacity 
                style={{borderWidth: 1, borderRadius: 20, width: 100, justifyContent:'center', alignItems: 'center', padding: 5, backgroundColor: global.red}}
                onPress={()=>{ 
                    this.props.userActions.logout();
                    Actions[ScreenName.LOGIN]({ type: ActionConst.RESET });
                }}>
                    <Text>{Strings.logout}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderLanguages() {
        const { settings, locales } = this.state;
        return (
            <Collapsable titleHeight={50} color={Themes.Colors.listTitle}
                textColor={Themes.Colors.listTitleText} titleTextStyle={{ fontWeight: 'normal', fontSize: 16 }}
                title={Strings.language} collapsed={true}
                rightWidth={60} renderRight={() => this.renderFlag()}>
                {this.renderLanguage()}
            </Collapsable>
        )
    }

    renderFlag() {
        const { settings } = this.state;
        return (
            <View style={styles.flag}>
                <Image resizeMode={'contain'} style={styles.flagImg} source={Themes.Images.locale[settings.locale.split('-')[0].toLowerCase()]} />
            </View>
        )
    }

    renderLanguage() {
        const { settings, locales } = this.state;
        return locales.map((locale, index) => (
            <Ripples key={index} style={[styles.language, {
                paddingLeft: locale.locale.split('-')[0].toLowerCase() == settings.locale.split('-')[0].toLowerCase() ? 0 : null,
                borderBottomWidth: locales.length - 1 == index ? 0 : 1,
            }]}
                onPress={() => this.onLanguageSelect(locale)}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={styles.languageSelectedCheck}>
                        {locale.locale.split('-')[0].toLowerCase() == settings.locale.split('-')[0].toLowerCase() &&

                            <Icon name={'ios-checkmark'} style={{ fontSize: 30 }} />
                        }
                    </View>

                    <Text>{Strings[locale.name]}</Text>
                </View>
                <Image resizeMode={'contain'} style={styles.flagImg} source={Themes.Images.locale[locale.locale.split('-')[1].toLowerCase()]} />
            </Ripples>
        ));
    }

    renderPickerMenu() {
        const { user } = this.props.userState;
        const canUpdate = true;
        return (
            <Menu ref={ref => {
                this.pickerMenu = ref
            }} renderer={SlideInMenu} style={styles.menu}
                onOpen={() => this.setState({ menuOpened: true })}
                onClose={() => this.setState({ menuOpened: false })}
                onSelect={value => this.avatarPickerSelect(value)}>
                <MenuTrigger />
                <MenuOptions customStyles={{
                    optionsContainer: {},
                    OptionTouchableComponent: Ripples,
                    optionTouchable: { style: { alignItems: 'center' } }
                }}>
                    {canUpdate &&
                        <MenuOption key={0} value={0} style={[styles.menuItem, {}]}>
                            <Icon name={'ios-camera'} style={styles.menuItemIcon} />
                            <Text style={[styles.menuItemText, {}]}>
                                {Strings.takeAPhoto}
                            </Text>
                        </MenuOption>
                    }
                    {canUpdate &&
                        <MenuOption key={1} value={1} style={[styles.menuItem, {}]}>
                            <Icon name={'ios-images'} style={styles.menuItemIcon} />
                            <Text style={[styles.menuItemText, {}]}>
                                {Strings.selectFromGallery}
                            </Text>
                        </MenuOption>
                    }
                    {user.avatar &&
                        <MenuOption key={2} value={2} style={[styles.menuItem, {}]}>
                            <Icon name={'ios-eye'} style={styles.menuItemIcon} />
                            <Text style={[styles.menuItemText, {}]}>
                                {Strings.viewPicture}
                            </Text>
                        </MenuOption>
                    }
                </MenuOptions>
            </Menu>
        );
    }

    onLanguageSelect(locale) {
        CommonUtils.log('PRESS LANGUAGE', locale.locale);
        const { settings } = this.state;
        if (settings.locale !== locale.locale) {
            Alert.alert(
                Strings.changingLanguageTo + ' ' + Strings[locale.name],
                Strings.appWillRestart,
                [
                    { text: Strings.cancel, style: 'cancel' },
                    {
                        text: Strings.ok, onPress: () => {
                            this.changeLanguageSetting(locale.locale);
                        }
                    },
                ],
                { cancelable: false }
            );
        }
    }

    getLocaleFromSelect() {

    }

    changeLanguageSetting(locale) {
        const settings = {
            ...this.state.settings,
            locale: locale,
        }
        Locale.locale = locale;
        this.props.settingActions.setSettings(settings).then(result => {
            CommonUtils.log('SET SETTINGS', result, settings);
            // Actions[ScreenName.ROOT]({ type: ActionConst.RESET });
            Actions[ScreenName.DRAWER]({ type: ActionConst.RESET });
        }, error => {
            console.warn('SET SETTINGS ERROR', error);
        });
    }

}

LeftMenuComponent.defaultProps = {
    // name: null,
};

// LeftMenuComponent.propTypes = {
//     // name: React.PropTypes.string,
// };

const styles = EStyleSheet.create(shorthand({
    container: {
        maxWidth: Themes.Metrics.leftMenuWidth,
        marginTop: Platform.OS === 'android' ? 20 :  height > 810 ? 45 : 32
    },
    contents: {
        flex: 1
    },
    settings: {
        flex: 1,
    },
    flag: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: 10,
    },
    flagImg: {
        width: 20, height: 16
    },
    languages: {},
    language: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: Themes.Colors.border,
    },
    languageSelectedCheck: {
        width: 40, height: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountPicture: {
        borderRadius: 100,
        overflow: 'hidden',
    },
    logo: {
        height: 40,
        width: 40,
        // margin: 15,
        '@media android': {
            borderRadius: 100,
        },
    },
}));
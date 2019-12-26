import React from 'react';
import {
    View, Platform,
    Text, Image, UIManager,
    LayoutAnimation,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import shorthand from 'react-native-styles-shorthand';
import { Actions, ActionConst } from 'react-native-router-flux';
import ScreenName from '../../constants/ScreenName';
import Icon from 'react-native-vector-icons/Ionicons';
import PhotoView from 'react-native-photo-view';
import Swiper from 'react-native-swiper';

import Button from '../commons/Button';
import Ripples from '../commons/Ripples';
import StatusBar from '../commons/StatusBar';
import Header from '../commons/Header';
import Spinner from '../commons/Spinner';

import * as Themes from '../../themes';

export default class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            images: this.props.images,
            activeIndex: this.props.activeIndex || 0,
            showBars: true,
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        const title = (this.state.activeIndex + 1) + '/' + (this.props.images.length);
        const loading = this.state.loading;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#000000'} barStyle="dark-content" />
                {this.renderContents()}
            </View>
        )
    }

    renderContents() {
        const { images, activeIndex } = this.state;
        const imageUrls = images; //.map(image => image.uri);

        return (
            <Swiper index={activeIndex}
                renderPagination={(index, total, context) => this.renderPagination(index, total)}
                dotColor={'#444444'} activeDotColor={'#FFFFFF'}
                showsButtons={this.state.showBars && this.props.images && this.props.images.length > 1}
                nextButton={
                    <View style={{
                        borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.3)',
                        width: Themes.Metrics.headerHeight, height: Themes.Metrics.headerHeight,
                        justifyContent: 'center', alignItems: 'center',
                        }}>
                        <Icon name='ios-arrow-forward' style={{ marginTop: Platform.OS == 'ios' ? 3 : 0, color: Themes.Colors.background, fontSize: 36 }} />
                    </View>
                }
                prevButton={
                    <View style={{
                        borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.3)',
                        width: Themes.Metrics.headerHeight, height: Themes.Metrics.headerHeight,
                        justifyContent: 'center', alignItems: 'center',
                        }}>
                        <Icon name='ios-arrow-back' style={{ marginTop: Platform.OS == 'ios' ? 3 : 0, color: Themes.Colors.background, fontSize: 36 }} />
                    </View>
                }
            >
                {imageUrls.map((image, i) =>
                <View key={i} style={styles.contents}>
                    <PhotoView 
                        source={{ uri: image }}
                        defaultSource={Themes.Images.default_picture}
                        minimumZoomScale={1}
                        maximumZoomScale={5}
                        resizeMode={'contain'}
                        onLoadStart={() => this.setState({ loading: true })}
                        onLoadEnd={() => this.setState({ loading: false })}
                        onTap={() => this.barsToggle()}
                        onViewTap={() => this.barsToggle()}
                        style={[styles.viewer, {}]} />
                </View>
                )}
            </Swiper>
        )
    }
    renderPagination(index, total) {
        return (this.state.showBars &&
            <View style={styles.header}>
                <Header color={'rgba(0,0,0,0.5)'}
                    left={
                        <View style={styles.loading}>
                            <Spinner color={Themes.Colors.background} size={25} loading={this.state.loading} />
                        </View>
                    }
                    right={
                        <Button width={Themes.Metrics.headerButtonWidth} color={'transparent'} rippleColor={'#ffffff'}
                            onPress={() => this.onBackPress()}>
                            <Icon name='ios-close' style={{ color: Themes.Colors.background, fontSize: 42 }} />
                        </Button>
                    }
                >
                    <Text style={[styles.title, Themes.Styles.header]}>{index + 1} / {total}</Text>
                </Header>
            </View>
        )
    }

    onBackPress() {
        Actions.pop()
    }

    barsToggle() {
        let touchTimeout = setTimeout(() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({ showBars: !this.state.showBars });
        }, 500);
    }

}

ImageViewer.defaultProps = {
    images: [],
    initIndex: 0,
};

const styles = EStyleSheet.create(shorthand({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        position: 'absolute',
        top: 0, left: 0,
        width: Themes.Metrics.screenWidth,
    },
    toolbar: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0, left: 0,
        width: Themes.Metrics.screenWidth,
        height: Themes.Metrics.headerHeight,
    },
    title: {
        color: 'white'
    },
    contents: {
        flex: 1,
        paddingTop: Platform.OS == 'ios' ? Themes.Metrics.statusBarHeight : 0,
    },
    viewer: {
        width: Themes.Metrics.screenWidth,
        height: Themes.Metrics.screenHeight - Themes.Metrics.statusBarHeight - (Platform.OS == 'ios' ? 0 : Themes.Metrics.statusBarHeight),
    },
    loading: {
        padding: 10
    },

}));



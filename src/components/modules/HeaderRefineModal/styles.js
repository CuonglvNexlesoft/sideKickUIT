import {StyleSheet, Platform, Dimensions} from 'react-native';
const {height, width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: Platform.OS === "ios" ? 15 : 15,
    },
    textHeading: {
        marginTop: 10,
        // lineHeight:20
    },
    textHeadingSub: {
        lineHeight:16,
        textAlign:'center',
    },
    titleContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop:15,
        paddingBottom:10
    },
    buttonHeaderStyle: {marginBottom: 10, height: 15, width: width}
});
export default styles;

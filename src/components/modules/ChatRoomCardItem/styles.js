import { StyleSheet } from "react-native";
// import global from "../../../styles/_var";
// import Metrics from "../../../../redhotpie-shared-lib/themes/Metrics";

const styles = StyleSheet.create({
    container: {
        height: 180,
        //width: 344,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#2c3e50',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        shadowOpacity: 0.4, shadowRadius: 3, shadowOffset: { height: 1, width: 1 } ,
        elevation: 4, 
        //position:'relative',
    },
    imageBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    imageBackgroundContainer: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCenter: {
        // borderColor: 'white',
        // borderWidth: 2,
        paddingLeft: 15,
        paddingBottom: 10
        //padding: 5
    },
    buttonContainer: {
        paddingBottom: 15,
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    memberInRoom: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    buttonOutline: {
        backgroundColor: 'red',
        paddingRight: 10,
        paddingLeft: 10,
        height: 35,
        borderWidth: 0,
        borderColor: 'transparent',
    },
    buttonMemberInRoom: { backgroundColor: 'white', borderColor: '#C8C8C8', paddingLeft: 10, paddingRight: 10, height: 35 },
    titleRoom: { color: 'white', fontWeight: "900", fontSize: 25 },
});

export default styles;

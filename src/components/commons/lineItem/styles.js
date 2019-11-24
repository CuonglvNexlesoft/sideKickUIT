import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

      //  flex:1
        //marginTop: 5,
        //marginHorizontal: 12,

      },
      leftContainer:{left: 0,marginTop:0, },
      rightContainer:{
        right: 0,
        marginTop: 0,
        marginLeft:10
      //  flexDirection: "row",
        //justifyContent: "space-between"
      },
      textCoupleContainer:{
          justifyContent:'flex-end',
        flexDirection: "row", alignItems: "center",flex:1, alignSelf: 'flex-end',flexWrap: 'wrap'// flex:1,
      }
});

export default styles;

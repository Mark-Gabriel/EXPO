import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({

    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    logoContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },

    logoText:{
        fontSize:25,
        color:"#00BF63",
        fontWeight:'bold'
    },

    loginBttn:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:"80%",
        borderWidth:1

    },
    image:{
        width:40, 
        height:40, 
        borderWidth:1
    }
})

export {loginStyle}
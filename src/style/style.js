import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#418CFC",
    },
    container_title_subtitle: {
        flex: 1, 
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        marginTop:100,
    },
    title_content: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',    
        justifyContent:'center',
        gap:10,
    },
    title_text: {
        color: "white",
        fontSize:40,   
        letterSpacing:2,
        fontWeight:'bold'
    },
    logo:{
        width: 35, 
        height: 35, 
        marginTop:10,
    },
    subtitle: {
        textAlign:'center',
        fontSize:21,
        color:'white',
        fontWeight:'300',
    },
    button_container: {
        paddingBottom: 40, // !
        justifyContent:'center',
        alignItems:'center',
        gap:30 // !
    },
    button_login: {
        backgroundColor:'white',
        padding:15,
        borderRadius:30,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
    },
    button_login_text: {
        color:'#418CFC',
        fontSize:20,
        fontWeight:'500'
    },
    button_register: {
        borderWidth:2,
        borderColor:'white',
        padding:15,
        borderRadius:30,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
    },
    button_register_text: {
        color:'white',
        fontSize:20,
        fontWeight:'500'
    },

 });

export default styles
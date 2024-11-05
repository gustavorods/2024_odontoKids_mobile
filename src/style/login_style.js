import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#418CFC', // Cor de fundo azul
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#FFFFFF', // Cor do texto branco
    },
    subtitle: {
        fontSize: 30,
        fontWeight: '300',
        color: '#FFFFFF', // Cor do texto branco
    },
    formContainer: {
        width: '90%',
    },
    inputContainer: {
        marginBottom: 15,
    },
    icon: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 10,
        top: 12,
    },
    label: {
        marginTop:13,
        fontSize: 16,
        color: '#FFFFFF', // Cor do texto branco
        marginLeft: 40, // Para evitar sobreposição do ícone
    },
    input: {
        borderWidth: 1,
        borderColor: '#FFFFFF', // Cor da borda branca
        borderRadius: 15,
        padding: 13,
        marginBottom:10,
        width: '100%',
        backgroundColor: '#FFFFFF', // Cor de fundo do input
    },
    errorMessage: {
        color: 'red',
        fontSize:20,
        fontWeight:'500',
        marginTop: 10,
        textAlign:'center'
    },
    actionsContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        backgroundColor: '#0e5ead', // Azul mais escuro para o botão
        padding: 15,
        borderRadius: 15,
        width: '70%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
    },
    
    forgotPasswordText: {
        color: '#fff', // Cor do texto para "Esqueci minha senha"
        fontSize: 18,
        textDecorationLine: 'underline',
    },
})

export default styles
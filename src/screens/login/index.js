import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./style"

export default function Login() {
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [error_mensage, setError_mensage] = useState(null);

    return (
        // Container
        <View style={styles.container}>
            {/* Container title and subtitle */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.subtitle}>É bom ter você de volta!</Text>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                {/* Email */}
                <View style={styles.inputContainer}>
                    <Image source={require('../../images/login/email_icon.png')} style={styles.icon} resizeMode="contain"/>
                    <Text style={styles.label}>Email</Text>
                </View>
                <TextInput 
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Clique aqui para digitar"
                    style={styles.input}
                />

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Image source={require('../../images/login/email_icon.png')} style={styles.icon} resizeMode="contain"/>
                    <Text style={styles.label}>Senha</Text>
                </View>
                <TextInput 
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Clique aqui para digitar"
                    secureTextEntry
                    style={styles.input}
                />

                {/* Error message */}
                <Text style={styles.errorMessage}>{error_mensage}</Text>
            </View>

            {/* User actions */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonForgotPassword}> 
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Function to test login functionality
const login_check = async (email, password) => {
    try {
      // Sending a POST request to the server to check login credentials
      const response = await fetch('http://localhost:3000/check_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specifying JSON content type for request
        },
        body: JSON.stringify({ email, password }), // Converting email and password into JSON format
      });
  
      // Parsing the response to JSON format and returning it
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      // Logging the error message if an exception occurs
      console.error('Error:', error.message);
    }
  };
    
  // Testing the login function with example credentials
  login_check("gu@gsu", "123");
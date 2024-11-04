import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./src/style/style"

export default function App() {
  return (
    // Container
    <View style={styles.container}>
      {/* container title and subtitle */}
      <View style={styles.container_title_subtitle}>
        <View style={styles.title_content}>
          <Text style={styles.title_text}>Odonto Kids</Text>
          <Image source={require('./src/img/geral/Logo.png')} style={styles.logo} resizeMode="contain"/>
        </View>
        <Text style={styles.subtitle}>O sorriso do seu filho começa {"\n"} aqui!</Text>
      </View>

       {/* Container dos botões */}
       <View style={styles.button_container}>
        <TouchableOpacity style={styles.button_login}>
          <Text style={styles.button_login_text}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button_register}>
          <Text style={styles.button_register_text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./style";
import login from "../login/index";

const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    // Container
    <View style={styles.container}>
      {/* container title and subtitle */}
      <View style={styles.container_title_subtitle}>
        <View style={styles.title_content}>
          <Text style={styles.title_text}>Odonto Kids</Text>
          <Image source={require('../../images/geral/Logo.png')} style={styles.logo} resizeMode="contain"/>
        </View>
        <Text style={styles.subtitle}>O sorriso do seu filho começa {"\n"} aqui!</Text>
      </View>

       {/* Button container*/}
       <View style={styles.button_container}>
        <TouchableOpacity style={styles.button_login} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button_login_text}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button_register}>
          <Text style={styles.button_register_text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

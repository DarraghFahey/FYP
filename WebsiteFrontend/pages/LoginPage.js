import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import  { AuthContext } from '../components/context.js'



const LoginPage =({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInput, setUserInput] = React.useState(' ');

  const { signIn } = React.useContext(AuthContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: () => (
        <View style={{marginHorizontal: 15, flexDirection: "row"}}>
          <TextInput
            style={styles.input}
            placeholder="Search Game"
            onChangeText={userInput => setUserInput(userInput)}
          />
         <Button
            onPress={() => navigation.navigate('searchPage', {
              paramKey: userInput,
            })}
            title="Search"
            color="#B1624EFF"
         />
        </View>
      ),
      
    })
  })

    return(
      <View style={styles.login}>
        <View >
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
 
        <View >
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        
        <Text
          style={styles.loginBtn}
          onPress={() => signIn(email, password)}         
         >LOGIN</Text>
         
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate('RegisterPage')} >Register</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default LoginPage;

  const styles = StyleSheet.create({
    login: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: "#fff"
    },
    TextInput: {
      height: 50,
      flex: 1,
      borderWidth: 2,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#B1624EFF",
    },
  });
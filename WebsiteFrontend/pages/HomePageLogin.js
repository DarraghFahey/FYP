import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import ListLogin from './listLogin.js'
import  { AuthContext } from '../components/context.js'

const HomePageLogin = ({ navigation }) => {
    const [userInput, setUserInput] = React.useState(' ');
    const { signOut } = React.useContext(AuthContext);

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
        headerRight: () => (
          <Button
          onPress = {() => {signOut()}}
          title="Log Out"
          color="#B1624EFF"
        />
        )
      })
    })

    return(
      <View style={styles.HomePage}>
        <ListLogin ></ListLogin>
      </View>
    );
  };

  export default HomePageLogin;

  const styles = StyleSheet.create({
    HomePage: {
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
    submit: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom: 50
    }
  });
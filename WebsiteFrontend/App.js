import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageNoLogin from './pages/HomePageNoLogin';
import HomePageLogin from './pages/HomePageLogin';
import SearchPage from './pages/SearchPage';
import SearchPageLogin from './pages/SearchPageLogin';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import  { AuthContext } from './components/context.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import validator from 'validator';


const Stack = createStackNavigator();

const App = () => {
  const [recievedEmail, setRecievedEmail] = React.useState('');
  const [recievedPassword, setRecievedPassword] = React.useState('');

  const initialLoginState = { 
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN' :
      return{
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
      case 'LOGIN' :
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
      case 'LOGOUT' :
      return{
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
      case 'REGISTER' :
      return{
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    }
  }
  
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
      
        fetch("http://127.0.0.1:5000/login/" + userName)
          .then(function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            response.json().then(function (data) {
              console.log(data.length);
              if(data.length !== 0){
                setRecievedEmail(data['0']['email']);
                setRecievedPassword(data['0']['password']);
                if(userName == recievedEmail && password == recievedPassword)
                {
                  try {
                    userToken = (data[0]['uuid']);
                    AsyncStorage.setItem('userToken', userToken)
                    global.userToken = userToken;
                  } catch(e) {
                    console.log(e);
                  }
                  dispatch({type: 'LOGIN', id: userName, token: userToken});
                }
              }
              else {
                alert('Username or Password incorrect');
              }
            });
        }
          )
          .catch(function (err) {
            console.log('Fetch Error :-S', err);
          });
      
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken')
        global.userToken = null;
      } catch(e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: async(name, email, password) => {
      let userToken;
      userToken = null;

      register(name, email, password);

      function register(name, email, password) {
        if(validator.isEmail(email) == true){
            fetch("http://127.0.0.1:5000/login/" + email)
              .then(function (response) {
                if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                  return;
                }
                response.json().then(function (data) {
                  console.log(data.length);
                  if(data.length !== 0){
                    alert('Email already in use');
                  }
                  else {
                    try {
                      userToken = generateUserToken();
                      AsyncStorage.setItem('userToken', userToken)
                      savetoDb(userToken, email, password, name);
                    } catch(e) {
                      console.log(e);
                    }
                    global.userToken = userToken;
                    dispatch({type: 'REGISTER', id: email, token: userToken});
                  }
                });
            }
              )
              .catch(function (err) {
                console.log('Fetch Error :-S', err);
              });
        }
        else {
            alert('Email is not valid')
        }
      }
    
      function generateUserToken() {
        var RandomNumber1 = Math.floor(Math.random() * Math.pow(16, 8)) + 1 ;
        var RandomNumber2 = Math.floor(Math.random() * Math.pow(16, 4)) + 1 ;
        var RandomNumber3 = Math.floor(Math.random() * Math.pow(16, 3)) + 1 ;
        var RandomNumber4 = Math.floor(Math.random() * Math.pow(16, 4)) + 1 ;
        var RandomNumber5 = Math.floor(Math.random() * Math.pow(16, 8)) + 1 ;

        let hexString;
        hexString = RandomNumber1.toString(16).toLowerCase() + "-" + RandomNumber2.toString(16).toLowerCase() 
        + "-" +RandomNumber3.toString(16).toLowerCase() + "-" +RandomNumber4.toString(16).toLowerCase() + "-" +RandomNumber5.toString(16).toLowerCase();

        return hexString;
      }

      function savetoDb(uuid, email, password, name) {
        fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            uuid : uuid,
            email : email,
            password : password,
            name : name,
          })
        });
      }
    },
  }))

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
        global.userToken = userToken;
      } catch(e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
      dispatch
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size = 'large'/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value= {authContext}>
      { loginState.userToken == null ? (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen
              name="Home"
              component={HomePageNoLogin}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' },  
              }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' },
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' }, 
              }}
            />
            <Stack.Screen
              name="searchPage"
              component={SearchPage}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' }, 
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
              
        ) :

        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen
              name="Home"
              component={HomePageLogin}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' },
              }}
            />
            <Stack.Screen
              name="searchPage"
              component={SearchPageLogin}
              options={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5CC8D7FF' }, 
              }}
            />
          </Stack.Navigator>    
        </NavigationContainer>
      }

    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  submit: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 50
  }
});

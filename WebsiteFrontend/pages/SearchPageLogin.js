import React from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
import  { AuthContext } from '../components/context.js'

const SearchPageLogin = ({ navigation , route}) => {

    const [name, setName] = React.useState(' ');
    const [platform, setPlatform] = React.useState(' ');
    const [alsoOn, setAlsoOn] = React.useState(' ');
    const [releaseDate, setReleaseDate] = React.useState(' ');
    const [developer , setDeveloper] = React.useState(' ');
    const [publisher, setPublisher] = React.useState(' ');
    const [genre, setGenre] = React.useState(' ');
    const [rating , setRating] = React.useState(' ');
    const [ageRating, setAgeRating] = React.useState(' ');
    const [userInput, setUserInput] = React.useState(' ');
    const [ratingInput, setRatingInput] = React.useState(' ');
    const [ugid, setUGID] = React.useState(' ');
    const { signOut } = React.useContext(AuthContext);

    getApiData(route.params.paramKey)
  
    function getApiData(input) {
      fetch("http://127.0.0.1:5000/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName(data['0']['title']);
              setPlatform(data['0']['platform']);
              setAlsoOn(data['0']['also_on'])
              setReleaseDate(data['0']['released']);
              setDeveloper(data['0']['developer']);
              setPublisher(data['0']['publisher']);
              setGenre(data['0']['genres']);
              setRating(data['0']['metascore']);
              setAgeRating(data['0']['age_rating']);
              setUGID(data['0']['ugid']);
            }
            else {
              alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function addRating(input) {
        if(input > 0 && input < 11){
            fetch('http://127.0.0.1:5000/addRating', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uuid: global.userToken,
                ugid: ugid,
                game_name: name,
                rating: input,
                })
            });
        }
        else{
            alert('Rating must be between 1 and 10');
        }

    }
  
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
              onPress={() => getApiData(userInput)}
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
      <View >
        <Text style = { styles.titleText} >{ name }</Text>
        <View style={styles.views}>
          <Text style={styles.rows}>Platforms :  { platform }</Text>
          <Text style={styles.rows}>Also On:  { alsoOn }</Text>
          <Text style={styles.rows}>Realease Date:  { releaseDate }</Text>
        </View>
        <View style={styles.views}>
          <Text style={styles.rows}>Developer :  { developer }</Text>
          <Text style={styles.rows}>Publisher :  { publisher }</Text>
          <Text style={styles.rows}>Genres:  { genre }</Text>
        </View>
        <Text style={styles.score} >Metacritic Score :  { rating }</Text>
        <Text style={styles.rows} >Age Rating :  { ageRating }</Text>
        <TextInput
          style={styles.input}
          placeholder="Rate Game"
          onChangeText={ratingInput => setRatingInput(ratingInput)}
        />
        <Button
          onPress={() => addRating(ratingInput)}
          title="Rate"
          color="#B1624EFF"
        />

      </View>
    );
  };

  export default SearchPageLogin;


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
    },
    titleText: {
      textAlign: "center",
      fontSize: 50,
      fontWeight: "bold"
    },
    score: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold"
    },
    rows: {
      padding: 20
    },
    views: {
      flexDirection: "row", 
      alignItems: "center", 
      padding: 20
    }
  });